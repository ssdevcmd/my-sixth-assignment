import React from 'react';
import shoppingcartImg from '../../assets/products/shopping-cart.png';
import Cart from '../Cart/Cart';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4">
  <div className="navbar-start">
   
    <h1 className="bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl font-bold">DigiTools</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-6 text-[#101727] text-sm lg:text-base">
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2 sm:gap-3">
    <div className="indicator">
  <span
    className="indicator-item indicator-start "
  >{}</span>
   <img src={shoppingcartImg} alt="" className='w-5 h-5 sm:w-6 sm:h-6' />
</div>
   
    {/* <span className="text-sm sm:text-base">0</span> */}
    <button className="btn btn-sm sm:btn-md bg-white text-[#101727] rounded-3xl">Login</button>
    <button className="btn btn-sm sm:btn-md bg-[#6107ec] text-white rounded-3xl">Get Started</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;