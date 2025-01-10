import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import demoVideo from '../../components/LandingPage/promo.mp4'; // Replace with your video file

const LandingPage = () => {
  useEffect(() => {
    // Initialize the canvas for 3D object rendering
    const canvas = document.getElementById('three-d-canvas');
    const ctx = canvas.getContext('2d');

    let angleX = 0;
    let angleY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const render3DObject = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw a 3D-like cube (basic example)
      const size = 100;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const points = [
        [-size, -size, -size],
        [size, -size, -size],
        [size, size, -size],
        [-size, size, -size],
        [-size, -size, size],
        [size, -size, size],
        [size, size, size],
        [-size, size, size],
      ];

      const rotateX = (point, angle) => {
        const [x, y, z] = point;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [x, cos * y - sin * z, sin * y + cos * z];
      };

      const rotateY = (point, angle) => {
        const [x, y, z] = point;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return [cos * x + sin * z, y, -sin * x + cos * z];
      };

      const project = (point) => {
        const [x, y, z] = point;
        const distance = 500;
        const scale = distance / (distance - z);
        return [scale * x + centerX, scale * y + centerY];
      };

      const rotatedPoints = points.map((point) =>
        project(rotateY(rotateX(point, angleX), angleY))
      );

      const edges = [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
        [4, 5],
        [5, 6],
        [6, 7],
        [7, 4],
        [0, 4],
        [1, 5],
        [2, 6],
        [3, 7],
      ];

      ctx.strokeStyle = '#007bff';
      ctx.lineWidth = 2;

      edges.forEach(([start, end]) => {
        const [startX, startY] = rotatedPoints[start];
        const [endX, endY] = rotatedPoints[end];
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      });
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;

      angleY += deltaX * 0.01;
      angleX += deltaY * 0.01;

      lastMouseX = e.clientX;
      lastMouseY = e.clientY;

      render3DObject();
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);

    render3DObject();

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Video Banner */}
      <div className="video-banner">
        <video autoPlay loop muted>
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Experience Virtual Shopping</h1>
          <p>Discover innovative AR products with us!</p>
        </div>
      </div>

      {/* 3D Interactive Object */}
      <div className="three-d-container">
        <canvas id="three-d-canvas" className="canvas-container" width="400" height="400"></canvas>
      </div>
    </div>
  );
};

export default LandingPage;
