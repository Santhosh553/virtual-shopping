import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import your CSS for styles
import demoImage from '../../components/LandingPage/demo.jpg'; // Example promo image

const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Track scroll position to control animations
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="landing-page">
      {/* 3D Animated Banner */}
      <div className="banner">
        <div className="banner-content">
          <h1 className="animate-scroll">Welcome to AR Shopping</h1>
          <p className="animate-scroll">Experience the future of shopping with VR/AR devices.</p>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <div className="category-item">
          <h2 className="animate-scroll">Dresses</h2>
          <p className="animate-scroll">Browse a wide selection of dresses in AR.</p>
        </div>
        <div className="category-item">
          <h2 className="animate-scroll">Toys</h2>
          <p className="animate-scroll">Explore toys with your VR device.</p>
        </div>
        <div className="category-item">
          <h2 className="animate-scroll">Chairs</h2>
          <p className="animate-scroll">Find the perfect chair for your space in AR.</p>
        </div>
        <div className="category-item">
          <h2 className="animate-scroll">Tables</h2>
          <p className="animate-scroll">Experience furniture shopping in VR.</p>
        </div>
      </div>

      {/* Start Exploring Button */}
      <div className="start-exploring">
        <Link to="/products" className="start-exploring-button animate-scroll">
          Start Exploring
        </Link>
      </div>

      {/* Scroll Down to Explore More */}
      <div className="scroll-text">
        <p className="animate-scroll">Scroll down to explore more innovative AR shopping experiences.</p>
      </div>

      {/* 3D Display Cards */}
      <div className="product-cards">
        <div className="product-card animate-scroll">
          <img src={demoImage} alt="Product 1" />
          <h3>Product 1</h3>
          <p>Discover amazing AR experiences with this product.</p>
        </div>
        <div className="product-card animate-scroll">
          <img src={demoImage} alt="Product 2" />
          <h3>Product 2</h3>
          <p>Experience 3D shopping with this fantastic item.</p>
        </div>
        <div className="product-card animate-scroll">
          <img src={demoImage} alt="Product 3" />
          <h3>Product 3</h3>
          <p>Bring your shopping experience to life with AR.</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <Link to="/products" className="view-products-button animate-scroll">
        View Products
      </Link>
    </div>
  );
};

export default LandingPage;
