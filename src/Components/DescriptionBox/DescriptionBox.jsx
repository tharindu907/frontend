import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Furdeer is a family-owned frock clothing brand founded 
            by a sister and brother duo. We specialize in creating stylish 
            and comfortable frocks for women and kids. Our collection is 
            designed to bring joy and ease to your everyday life, with high-quality 
            fabrics and timeless designs. Discover the perfect blend of fashion and functionality 
            with Furdeer, where every piece is made with love and attention to detail.</p>
            <p>
            We deliver island-wide. Cash on delivery is available in Colombo 
            and the suburbs only. Delivery times vary based on your location and can range 
            from 1-5 business days. In rare cases, such as prolonged adverse weather conditions or 
            government-imposed travel restrictions, delivery may take longer.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
