import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Filter out the products that are not in the cart before mapping
  const productsInCart = all_product.filter(e => cartItems[e.id] > 0);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {productsInCart.map(e => (
        <div key={e.id}>
          <div className="cartitems-format">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>Rs {e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>{e.new_price * cartItems[e.id]}</p>
            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CartItems;
