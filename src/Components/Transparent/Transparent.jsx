import React from 'react';

const Transparent = () => {
    return (
        <div className='mx-4 sm:mx-6 lg:mx-10'>
            <div className='flex flex-col items-center text-center my-12 sm:my-16 lg:my-20 gap-3'>
            <h1 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101727]'>Simple, Transparent Pricing.</h1>
            <p className='text-sm sm:text-base text-[#627382] max-w-md sm:max-w-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                {/* card-1 */}
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
  <div className="card-body flex flex-col flex-1">
    <div className="">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#101727]">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <span className="text-lg sm:text-xl font-bold text-[#101727]">$0/Month</span>
    </div>
    
    <ul className="mt-6 flex flex-col gap-2 text-sm text-[#627382] flex-1">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
    </ul>
    <div className="mt-auto">
      <button className="btn btn-primary btn-block rounded-3xl">Get Started Free</button>
    </div>
  </div>
</div>
         {/* card-2 */}
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
  <div className="card-body bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-lg flex flex-col flex-1">
    <span className="badge badge-xs badge-warning absolute top-[-15px] left-30">Most Popular</span>
    <div className="">
      <h2 className="text-2xl sm:text-3xl font-bold">Pro</h2>
      <p>Best for professionals</p>
      <span className="text-lg sm:text-xl font-bold">$29/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-sm flex-1">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
    </ul>
    <div className="mt-auto">
      <button className="btn w-full lg:w-full md:w-full sm:w-auto bg-white text-[#4f39f6] rounded-3xl px-6">Start Pro Trial</button>
    </div>
  </div>
</div> 
        {/* card-3 */}
            <div className="card bg-base-100 shadow-sm h-full flex flex-col">
  <div className="card-body flex flex-col flex-1">
    <div className="">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#101727]">Enterprise</h2>
      <p className='text-[#627382]'>For terms and businesses</p>
      <span className="text-lg sm:text-xl font-bold text-[#101727]">$99/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-sm text-[#627382] flex-1">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-resolution image generation</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch processing capabilities</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-driven image enhancements</span>
      </li>
    </ul>
    <div className="mt-auto">
      <button className="btn btn-primary btn-block rounded-3xl">Contact Sales</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Transparent;