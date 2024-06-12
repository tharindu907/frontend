import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'

import logo from '../Assets/logo.png'
import logo_name from '../Assets/logo_name.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/dropdown_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();
    const dropdownRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible');
        dropdownRef.current.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
           <img src={logo} alt="" />
           <img src={logo_name} alt="" />
           {/*<p>FurDeer</p>*/}
        </div>
        <img className='nav-dropdown' ref={dropdownRef} onClick={dropdown_toggle} src={nav_dropdown} alt="dropdown" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none', color: '#696969' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none', color: '#696969' }} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none', color: '#696969' }} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("occations")}}><Link style={{ textDecoration: 'none', color: '#696969' }} to='/occations'>Occation</Link>{menu==="occations"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link style={{textDecoration: 'none' }} to='/login'><button>Login</button></Link>
            <Link style={{textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar
