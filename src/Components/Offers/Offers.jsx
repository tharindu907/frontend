import React from 'react';
import './Offers.css'
import exclusive_image from '../Assets/hero_2.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Special Deals</h1>
        <h2>Just For You</h2>
        <p>Enjoy Amazing Discounts on Our Top-Selling Items</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img className='offers-img' src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
