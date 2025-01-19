import React, { useRef, useState, useEffect } from "react";
import LazyLoad from "react-lazyload";
import { QRCodeSVG } from "qrcode.react";
import "./ModelViewer.css";

const ModelViewer = ({ item, addToWishlist, removeFromWishlist, wishlist }) => {
  const [ARSupported, setARSupported] = useState(false);
  const [annotate, setAnnotate] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const modelRef = useRef();

  useEffect(() => {
    if (
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/Android/i)
    ) {
      setARSupported(true);
    }
  }, []);

  useEffect(() => {
    if (wishlist) {
      const isInWishlist = wishlist.some((wishlistItem) => wishlistItem.id === item.id);
      setIsInWishlist(isInWishlist);
    }
  }, [item, wishlist]);

  const toggleFullscreen = () => {
    if (modelRef.current) {
      if (!document.fullscreenElement) {
        modelRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleAddToWishlist = () => {
    if (isInWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  return (
    <div className="model-view-container">
      <model-viewer
        key={item.id}
        ref={modelRef}
        src={item.modelSrc}
        ios-src={item.iOSSrc}
        alt="3D Model"
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
      ></model-viewer>

      <div className="model-controls">
        {ARSupported && (
          <button className="ar-button">View in Your Space</button>
        )}
        <button onClick={toggleFullscreen}>Fullscreen</button>
        <button onClick={() => setAnnotate(!annotate)}>Description</button>
      </div>

      {annotate && (
        <div className="annotations">
          <h3>Object Information</h3>
          <p><b>Name:</b> {item.name}</p>
          <p><b>Price:</b> Rs. {item.price}</p>
          <p><b>Description:</b> {item.description}</p>
          {/* Add more object-specific details here */}
        </div>
      )}

      <LazyLoad>
        <div className="product-section">
          <div className="qr-code">
            {!ARSupported && (
              <QRCodeSVG
                value={window.location.href}
                size={100}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            )}
          </div>
          <div className="product-details">
            <h2>{item.name}</h2>
            <div className="price">Price: Rs. {item.price}</div>
            <button
              className="wishlist-btn"
              onClick={handleAddToWishlist}
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </LazyLoad>
    </div>
  );
};

export default ModelViewer;
