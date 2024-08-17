// src/Components/footer/Footer.tsx
'use client';

import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons
import './footer.css'; // Importing global CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logoSection">
          <h2>Your Company</h2>
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
        <div className="linksSection">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="socialSection">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
        <div className="appSection">
          <h3>Download Our App</h3>
          <div className="appLinks">
            <a href="https://play.google.com/store/apps/details?id=yourappid" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay className="app-icon" />
              <span>Google Play</span>
            </a>
            <a href="https://apps.apple.com/app/idyourappid" target="_blank" rel="noopener noreferrer">
              <FaApple className="app-icon" />
              <span>App Store</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
