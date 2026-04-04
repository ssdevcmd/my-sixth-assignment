import React, {useState} from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const DigitalTools = () => {

  //  const pricingData = use(pricingPromise);
  const [selectedCard, setSelectedCard] = useState('products');
  // console.log(selectedCard);
    return (
       <div className="text-center my-20">
  
  <div className="mb-6">
     {selectedCard === 'products' ? (
    <div>
    <h1 className="font-bold text-3xl">
      Premium Digital Tools
    </h1>
    <p className="mt-2 text-gray-600 max-w-xl mx-auto">
      Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
    </p>
    </div> ) 
    : (
      <h3>Your Cart</h3>
    )}
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
      Cart(0)
    </button>
{/* 
    <PricingOptions pricingCard={pricingCard}>
  </PricingOptions> */}
  {/* <PricingOptions 
  pricingData={pricingData}
  selectedCard={selectedCard}
/> */}
  </div>

   </div> 
   
    );
    
};

export default DigitalTools;