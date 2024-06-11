import React from 'react';
import './Hero.css'
/*import hand_icon from '../Assets/hand_icon.png'*/
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_1.jpg'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Revamp Your Style with Our Exclusive Frocks!</h2>
        <div>
            <div className="hand-hand-icon">
                <p>Discover</p>
                {/*<img src={hand_icon} alt="" />*/}
            </div>
            <p>the Latest Trends</p>
            <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>New Arrivals</div>
            <img src={arrow_icon} alt="" />
        </div>
        <div>
            <h3>Enjoy Free Shipping on Orders Over Rs 7500</h3>
            <h3>Hassle-Free Exchanges and Returns on All Orders.</h3>
            <h3>Island-Wide Delivery and Convenient Warehouse Pickups Available.</h3>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
