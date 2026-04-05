import React from 'react';
import user from '../../assets/user.png'
import products from '../../assets/products.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='mx-4 sm:mx-6 lg:mx-10'>
            <div className='flex flex-col items-center justify-center text-center my-12 sm:my-16 lg:my-20 gap-3'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101727]'>Get Started in 3 Steps</h2>
            <p className='text-sm sm:text-base text-[#627382] max-w-md sm:max-w-lg lg:max-w-xl'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
         <div>      
    <div className="relative bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        01
      </div>
      <div className="flex justify-center mb-4">
        <img src={user} alt='' className="w-12 h-12 sm:w-14 sm:h-14 object-contain"/>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-[#101727] mb-2">
        Create Account
      </h3>
      <p className="text-sm sm:text-base text-[#627382] max-w-xs sm:max-w-sm">
        Sign up for free in seconds. No credit card required to get started.
      </p>

    </div>

            </div>
             <div className="relative bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        02
      </div>
      <div className="flex justify-center mb-4">
        <img src={products} alt='' className="w-12 h-12 sm:w-14 sm:h-14 object-contain"/>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-[#101727] mb-2">
       Choose Products
      </h3>
      <p className="text-sm sm:text-base text-[#627382] max-w-xs sm:max-w-sm">
        Browse our catalog and select the tools that fit your needs.
      </p>

    </div>
     <div className="relative bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        03
      </div>
      <div className="flex justify-center mb-4">
        <img src={rocket} alt='' className="w-12 h-12 sm:w-14 sm:h-14 object-contain"/>
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-[#101727] mb-2">
       Start Creating
      </h3>
      <p className="text-sm sm:text-base text-[#627382] max-w-xs sm:max-w-sm">
        Download and start using your premium tools immediately.
      </p>

    </div>
    
    

            </div> 
        </div>
    );
};

export default Steps;