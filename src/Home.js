import React from "react";
import CountUp from 'react-countup'; // Import CountUp
import './Home.css';
import locat from './Estate Project/location.jpg';

const Home = () => {
    return (
        <div className="mainn-divv">
            <div className="dataa-divv">
                <br />
                <h1>Discover<br /> Your Suitable <br />Property</h1>
                <br />
                <p>Find a Variety Of Property That Suit You very easily. Forget all difficulties in finding a residence for you.</p>
                
                <br/>
                <div className="live-location">
                    <img src={locat} alt="" />
                    <button>Search</button>
                </div>
                <br />
                <br />
                <div className="reting">
                    <p className="pop">
                        <CountUp start={8800} end={9000} duration={2.5} separator="," />+<br />
                        <span className="p">Premium </span>
                    </p>
                    <p className="pop">
                        <CountUp start={1900} end={1998} duration={2.5} separator="," />+<br />
                        <span className="p">Happy </span>
                    </p>
                    <p className="pop">
                        <CountUp start={20} end={128} duration={2.5} separator="," />+<br />
                        <span className="p">Awards</span>
                    </p>
                </div>
            </div>
            <div className="image-divv"></div>
        </div>
    );
};

export default Home;
