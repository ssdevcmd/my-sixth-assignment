import React from 'react';

const Workflow = () => {
    return (
        <div>
            <div className=''>
           <div className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white sm:p-10 justify-center mt-10 mb-0 pt-10'>
            <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-center'>Ready To Transform Your Workflow</h1>
            <p className='mt-4 text-sm sm:text-base lg:text-sm text-center max-w-2xl mx-auto'>Join thousands of professionals who are already using Digitools to work smarter.
             <br />   
            Start your free trial today.</p>

            <div className='mt-8 flex flex-col gap-6'>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <button className='btn bg-white text-[#4f39f6] font-semibold rounded-3xl px-6 mt-4 ml-4 sm:mt-0 sm:ml-0 sm:w-auto'>Explore Products</button>
                <button className='btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-3xl px-6  mt-4 ml-4 sm:mt-0 sm:ml-0 sm:w-auto'>View Pricing</button>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-xs sm:text-sm text-center opacity-90 pb-10'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
                </div>
            </div> 
            
            </div>
        </div>
    );
};

export default Workflow;