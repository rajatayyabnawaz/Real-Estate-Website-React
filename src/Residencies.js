import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Residencies.css';
import img1 from './Estate Project/r1.png'; // Add your actual image paths
import img2 from './Estate Project/r2.png';
import img3 from './Estate Project/r3.png';
import img4 from './Estate Project/r4.jpg';
import img5 from './Estate Project/r2.png';

const Residencies = () => {
    return (
        <>
            <div className='oio'>
                <h2>Best Choices</h2>
                <h1>Popular Residencies</h1>
            </div>
            <div className="r-main">
                <Carousel controls={true} indicators={false} interval={null}>
                    <Carousel.Item>
                        <div className="d-flex">
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img1} alt="Islamabad" />
                                <div className="carousel-content">
                                    <p><span>$</span>2000</p>
                                    <h1>Islamabad</h1>
                                    <p>Home No 2,Street No2,Islamabad Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img2} alt="Lahore" />
                                <div className="carousel-content">
                                    <p><span>$</span>1500</p>
                                    <h1>Lahore</h1>
                                    <p>Home No 2,Street No2,Lahore Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img3} alt="Karachi" />
                                <div className="carousel-content">
                                    <p><span>$</span>2500</p>
                                    <h1>Karachi</h1>
                                    <p>Home No 2,Street No2,Karachi Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img4} alt="Quetta" />
                                <div className="carousel-content">
                                    <p><span>$</span>1800</p>
                                    <h1>Quetta</h1>
                                    <p>Home No 2,Street No2,Quetta Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="d-flex">
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img5} alt="Peshawar" />
                                <div className="carousel-content">
                                    <p><span>$</span>1700</p>
                                    <h1>Peshawar</h1>
                                    <p>Home No 2,Street No2,Peshawar Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img1} alt="Islamabad" />
                                <div className="carousel-content">
                                    <p><span>$</span>2000</p>
                                    <h1>Islamabad</h1>
                                    <p>Home No 2,Street No2,Islamabad Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img2} alt="Lahore" />
                                <div className="carousel-content">
                                    <p><span>$</span>1500</p>
                                    <h1>Lahore</h1>
                                    <p>Home No 2,Street No2,Lahore Pakistan</p>
                                </div>
                            </div>
                            <div className="carousel-img-container">
                                <img className="carousel-image" src={img3} alt="Karachi" />
                                <div className="carousel-content">
                                    <p><span>$</span>2500</p>
                                    <h1>Karachi</h1>
                                    <p>Home No 2,Street No2,Karachi Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Residencies;
