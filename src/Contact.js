import React from 'react';
import './Contact.css';
import locat from './Estate Project/location.jpg'; // Adjust path as needed

const Contact = () => {
    return (
        <div className="main-div">
            <div className="data-div">
                <h2>Our Contact US</h2>
                <h1>Easy To Contact Us</h1>
                <p>We are always ready to help by providing the best services for you. We believe a good place to live makes life better.</p>
                
                <div className="contact-container">
                    <div className="contact-item">
                        <div className="contact-row">
                            <div className="contact-icon">📞</div>
                            <div className="contact-info">
                                <h2>Call</h2>
                                <p>+123 456 7890</p>
                                <button className="contact-button">Call Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-row">
                            <div className="contact-icon">💬</div>
                            <div className="contact-info">
                                <h2>Chat</h2>
                                <p>+123 456 7891</p>
                                <button className="contact-button">Chat Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-row">
                            <div className="contact-icon">📹</div>
                            <div className="contact-info">
                                <h2>Video Call</h2>
                                <p>+123 456 7892</p>
                                <button className="contact-button">Video Call Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="contact-item">
                        <div className="contact-row">
                            <div className="contact-icon">✉️</div>
                            <div className="contact-info">
                                <h2>Message</h2>
                                <p>+123 456 7893</p>
                                <button className="contact-button">Message Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="image-div"></div>
        </div>
    );
};

export default Contact;
