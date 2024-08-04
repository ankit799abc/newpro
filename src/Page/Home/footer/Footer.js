import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footerpage">
      <div className='footer'>
      <span className='company'>Royal Broadband</span>
      <div className='footerinfo'>
      <div className="footer-section">
        <h4>Maine Coverage Area</h4>
        <p>Shyam Vihar</p>
        <p>Qutub Vihar</p>
        <p>Chawala</p>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Support</h4>
        <p>98704-20722</p>
        <p>93111-22311</p>
      </div>
      <div className="footer-section">
        <h4>Stay Connected</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://wa.me/9870420711" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:Hellodubey711@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      </div>
      </div>
      
      <div className="footer-bottom">
      <hr class="line"></hr>
        <p>©2012 Royal Broadband - All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
