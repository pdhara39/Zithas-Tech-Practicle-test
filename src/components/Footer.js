// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import logo from './images/Zithas_logo.png';
// import "./style.css"

const Footer = () => {
  return (
    <footer className="bg-light text-light container-fluid mt-5">
        <Row>
          <Col md={4}>
          {/* <div className='logo'>
            <img src={logo} width={'200px'}/>
         </div> */}
            {/* <img src={logo} width={'200px'}/> */}
            {/* Social Links */}
            <div className="social-icons">
                <p className='text-dark'>Stay Connected :</p>
              <a href="your-facebook-url" target="_blank" rel="noopener noreferrer" className='mx-2'><FaFacebook /></a>
              <a href="your-twitter-url" target="_blank" rel="noopener noreferrer" className='mx-2'><FaTwitter /></a>
              <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer" className='mx-2'><FaLinkedin /></a>
              <a href="your-instagram-url" target="_blank" rel="noopener noreferrer" className='mx-2'><FaInstagram /></a>
            </div>
          </Col>
          <Col md={2}>
            {/* Quick Links */}
            <h5 className='text-dark'>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
              {/* Add more quick links as needed */}
            </ul>
          </Col>
          <Col md={2}>
            {/* About Us */}
            <h5>About Us</h5>
            <p>Your about us content goes here.</p>
          </Col>
          
          <Col md={2}>
            {/* Contact Information */}
            <h5 className='text-dark'>Contact Us</h5>
            <address className='text-dark'>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@example.com</p>
              <p>Address: 123 Main St, Cityville, State, Zip</p>
            </address>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;