import React from 'react';
import ReactDOM from 'react-dom/client';  // Update this import for React 18+
import './index.css';
import App from './App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));  // Use createRoot for React 18+
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
