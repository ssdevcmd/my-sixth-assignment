import React from 'react';
import shoppingcartImg from '../../assets/products/shopping-cart.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
   
    <h1 className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-4xl font-bold">DigiTools</h1>
  </div>
  <div className="navbar-center lg:flex">
    <ul className="flex gap-4 text-[#101727 cursor-pointer">
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <img src={shoppingcartImg} alt="" />
    <span>0</span>
    <button className="btn bg-white text-[#101727] rounded-3xl">Login</button>
    <button className="btn bg-[#6107ec] text-white rounded-3xl">Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;