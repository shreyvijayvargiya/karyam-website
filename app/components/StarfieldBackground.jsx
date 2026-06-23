import React, { useEffect, useRef } from "react";

const STAR_COUNT = 180;

const createStars = (width, height) =>
	Array.from({ length: STAR_COUNT }, () => ({
		x: Math.random() * width,
		y: Math.random() * height,
		z: Math.random() * 0.75 + 0.25,
		vx: (Math.random() - 0.5) * 0.18,
		vy: (Math.random() - 0.5) * 0.18,
		radius: Math.random() * 1.4 + 0.35,
	}));

const StarfieldBackground = () => {
	const canvasRef = useRef(null);
	const starsRef = useRef([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const frameRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resize = () => {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			starsRef.current = createStars(window.innerWidth, window.innerHeight);
		};

		const handleMouseMove = (event) => {
			mouseRef.current = {
				x: (event.clientX / window.innerWidth - 0.5) * 2,
				y: (event.clientY / window.innerHeight - 0.5) * 2,
			};
		};

		const draw = () => {
			const width = window.innerWidth;
			const height = window.innerHeight;
			const isDark = document.documentElement.classList.contains("dark");

			ctx.clearRect(0, 0, width, height);

			starsRef.current.forEach((star) => {
				star.x += star.vx * star.z;
				star.y += star.vy * star.z;

				if (star.x < -20) star.x = width + 20;
				if (star.x > width + 20) star.x = -20;
				if (star.y < -20) star.y = height + 20;
				if (star.y > height + 20) star.y = -20;

				const parallaxX = star.x + mouseRef.current.x * star.z * 45;
				const parallaxY = star.y + mouseRef.current.y * star.z * 45;
				const size = star.radius * (0.6 + star.z * 1.2);
				const opacity = 0.15 + star.z * 0.65;

				ctx.beginPath();
				ctx.arc(parallaxX, parallaxY, size, 0, Math.PI * 2);
				ctx.fillStyle = isDark
					? `rgba(255, 255, 255, ${opacity})`
					: `rgba(30, 30, 40, ${opacity * 0.55})`;
				ctx.fill();
			});

			frameRef.current = requestAnimationFrame(draw);
		};

		resize();
		draw();

		window.addEventListener("resize", resize);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("mousemove", handleMouseMove);
			if (frameRef.current) cancelAnimationFrame(frameRef.current);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 -z-10 pointer-events-none"
			aria-hidden="true"
		/>
	);
};

export default StarfieldBackground;
