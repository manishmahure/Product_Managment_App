
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
       
        <div className="Footer-section">
         
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="Footer-section">
          <h2>Follow Us</h2>
          <div className="Social-icons">
            <a href="#" className="Social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="Social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="Social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

