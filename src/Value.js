import React, { useState } from 'react';
import './Value.css';
import valimg from './Estate Project/value.png';

const Value = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className='main-divv'>
                <div className='image-divv'>
                    <img src={valimg} alt="Value" className="value-image" />
                </div>
                <div className='data-divv'>
                    <h3>Our Value</h3>
                    <h1>Value We Give to You</h1>
                    <p>We are always ready to help by providing the best services for you. We believe a good place to live makes life better.</p>
                    <br/>
                    <div className='accordion'>
                        <div className="accordion-item">
                            <button 
                                className={`accordion-button ${activeIndex === 1 ? 'active' : ''}`} 
                                onClick={() => handleAccordionToggle(1)}
                            >
                                Best Interest Rate On The Markeet
                            </button>
                            <div className={`accordion-content ${activeIndex === 1 ? 'show' : ''}`}>
                                This is the first item's accordion body. It is shown by default, until you click the button again to hide it.
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button 
                                className={`accordion-button ${activeIndex === 2 ? 'active' : ''}`} 
                                onClick={() => handleAccordionToggle(2)}
                            >
                               Prevent Unstable Prices
                            </button>
                            <div className={`accordion-content ${activeIndex === 2 ? 'show' : ''}`}>
                                This is the second item's accordion body. It is hidden by default, until you click the button.
                            </div>
                        </div>
                        <div className="accordion-item">
                            <button 
                                className={`accordion-button ${activeIndex === 3 ? 'active' : ''}`} 
                                onClick={() => handleAccordionToggle(3)}
                            >
                                Best Price  On The Markeet
                            </button>
                            <div className={`accordion-content ${activeIndex === 3 ? 'show' : ''}`}>
                                This is the third item's accordion body. It is hidden by default, until you click the button.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Value;
