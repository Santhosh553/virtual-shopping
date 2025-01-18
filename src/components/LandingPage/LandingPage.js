import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import demoVideo from '../../components/LandingPage/promo.mp4';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Video Banner */}
      <div className="video-banner">
        <video autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/promo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>Experience Virtual Shopping</h1>
          <p>Discover innovative AR products with us!</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Shop With Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Augmented Reality</h3>
            <p>Try products in your space before you buy.</p>
          </div>
          <div className="feature">
            <h3>Exclusive Deals</h3>
            <p>Get access to special discounts and offers.</p>
          </div>
          <div className="feature">
            <h3>Fast Shipping</h3>
            <p>Receive your orders quickly and reliably.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2>Ready to Explore Shopping?</h2>
        <Link to="/products" className="cta-button">Shop Now</Link>
      </div>

    </div>
  );
};

export default LandingPage;
