import React from 'react';
import './Footer.css';
import logo from './Estate Project/logo2.png'; // Adjust the path as needed

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src={logo} alt="Logo" className="footer-logo" />
                <p className="footer-vision">Our Vision is to make a World Safer Place</p>
            </div>
            <div className="footer-right">
                <h1>Information</h1>
                <p>WebHive Technology</p>
                <p>Islamabad, Pakistan</p>
                <p><a href="#property">Property</a> | <a href="#service">Service</a> | <a href="#product">Product</a> | <a href="#about">About Us</a></p>
            </div>
        </footer>
    );
};

export default Footer;
