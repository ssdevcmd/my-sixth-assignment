import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
import{toast} from 'react-toastify';
import PricingOptions from '../PricingOptions/PricingOptions';

const PricingCard = ({pricing, cart, setCart}) => {
    // console.log(pricing);\
    // console.log(setCart);
    const {name,price,description,features, tag,image} = pricing;

    const [isSelected, setIsSelected] = useState(false);

     const handleBuy = () => {
    setIsSelected(true);
    toast.success ('Added to cart');
    setCart([...cart, pricing ])
  };


    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body">

    <div className='flex items-center justify-between lg:gap-30 md:gap-30 sm:justify-start sm:gap-3'>
      
    <img src={image} alt="" className='w-[40px] h-[40px]'/>

     <span className={`badge badge-sm text-white ${
    tag === "Popular"
      ? "bg-purple-400"
      : tag === "New"
      ? "bg-green-400"
      : "bg-yellow-400"
  }`}
>{tag}</span>
    </div>
        
    
    <div className="flex justify-between">
      <h2 className="text-2xl text-[#101727] font-bold">{name}</h2>
      <span className="text-xl text-[#101727] font-semibold">${price}/mo</span>
    </div>
    <div className='text-sm text-[#627382]'>
        <h4>{description}</h4>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
    {
        features.map((feature, index) =>   <li key={index} className='flex items-start gap-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className='text-md text-[#627382]'>{feature}</span>
      </li>
  )
    }
    </ul>
    <div className="mt-6">
      {/* <button 
      onClick={() => setIsSelected(true)}
      className="btn btn-primary btn-block">{isSelected === false ? 'Buy Now' : 'Added to Cart'}</button> */}
    <button
      onClick={handleBuy}
      disabled = {isSelected ? true : false}
      className={`btn btn-block ${
        isSelected ? 'bg-green-500 text-white' : 'btn-primary'
      }`}
    >
      {isSelected ? (
  <>
    <TiTick size={25} />
    Added to Cart
  </>
) : (
  "Buy Now"
)}
    </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default PricingCard;