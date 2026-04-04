import React from 'react';
import user from '../../assets/user.png'
import products from '../../assets/products.png'
import rocket from '../../assets/rocket.png'

const Steps = () => {
    return (
        <div className='m-10'>
            <div className='flex flex-col items-center justify-center text-center my-20 gap-3'>
            <h2 className='text-3xl font-bold text-[#101727]'>Get Started in 3 Steps</h2>
            <p className='text-sm text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid grid-cols-3'>
         <div>      
    <div className="relative bg-white rounded-2xl shadow-md p-6 w-80 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        01
      </div>
      <div className="flex justify-center">
        <img src={user} alt=''/>
      </div>
      <h3 className="text-lg text-[#101727] font-semibold mb-2">
        Create Account
      </h3>
      <p className="text-sm text-[#627382]">
        Sign up for free in seconds. No credit card required to get started.
      </p>

    </div>

            </div>
             <div className="relative bg-white rounded-2xl shadow-md p-6 w-80 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        02
      </div>
      <div className="flex justify-center">
        <img src={products} alt=''/>
      </div>
      <h3 className="text-lg text-[#101727] font-semibold mb-2">
       Choose Products
      </h3>
      <p className="text-sm text-[#627382]">
        Browse our catalog and select the tools that fit your needs.
      </p>

    </div>
     <div className="relative bg-white rounded-2xl shadow-md p-6 w-80 text-center hover:shadow-lg transition">
      <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-8 h-8 flex items-center justify-center rounded-full">
        03
      </div>
      <div className="flex justify-center">
        <img src={rocket} alt=''/>
      </div>
      <h3 className="text-lg text-[#101727] font-semibold mb-2">
       Start Creating
      </h3>
      <p className="text-sm text-[#627382]">
        Download and start using your premium tools immediately.
      </p>

    </div>
    
    

            </div> 
        </div>
    );
};

export default Steps;