import React, {Suspense, useState} from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';
import Cart from '../Cart/Cart';


const pricingPromise = fetch('PricingData.json')
.then(res => res.json());
const DigitalTools = () => {

  const [selectedCard, setSelectedCard] = useState('products');
  const [cart, setCart] = useState([]);
  // console.log(selectedCard);
    return (
       <div className="text-center my-20">
  
  <div className="mb-6">
    
    <div>
    <h1 className="font-bold text-3xl">
      Premium Digital Tools
    </h1>
    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
      Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
    </p>
    </div>  
    
  </div>

  <div className="flex justify-center gap-3">
    <button
    onClick={() => setSelectedCard('products')} 
    className={`btn ${selectedCard === 'products' ? ' bg-[#6107ec] text-white' : 'bg-white text-[#101727FF]'} rounded-3xl px-6`}>
      Products
    </button>
    <button 
     onClick={() => setSelectedCard('cart')} 
    className={`btn ${selectedCard === 'cart' ? ' bg-[#6107ec] text-white' : 'bg-white text-[#101727FF]'} rounded-3xl px-6`}>
      Cart({cart.length})
    </button>
     

  </div>
   {selectedCard === 'products' ? (
    <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}> 
      <PricingOptions pricingPromise={pricingPromise} setCart={setCart} cart={cart}></PricingOptions>
    </Suspense>):<Cart cart={cart} setCart={setCart}></Cart>}

   </div> 
   
    );
    
};

export default DigitalTools;