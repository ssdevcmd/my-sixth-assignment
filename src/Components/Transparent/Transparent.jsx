import React from 'react';

const Transparent = () => {
    return (
        <div className='m-10'>
            <div className='flex flex-col items-center justify-center text-center my-20 gap-3'>
            <h1 className='font-bold text-2xl text-[#101727]'>Simple, Transparent Pricing.</h1>
            <p className='text-sm text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-3'>
                {/* card-1 */}
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="">
      <h2 className="text-3xl font-bold text-[#101727]">Starter</h2>
      <p className='text-[#627382]'>Perfect for getting started</p>
      <span className="text-xl text-[#101727] font-bold">$0/Month</span>
    </div>
    
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
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
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-3xl">Get Started Free</button>
    </div>
  </div>
</div>
         {/* card-2 */}
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-lg">
    <span className="badge badge-xs badge-warning absolute top-[-15px] left-30">Most Popular</span>
    <div className="">
      <h2 className="text-3xl font-bold">Pro</h2>
      <p>Best for professionals</p>
      <span className="text-xl font-bold">$29/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
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
    <div className="mt-6">
      <button className="btn btn-wide bg-white text-[#4f39f6] rounded-3xl">Start Pro Trial</button>
    </div>
  </div>
</div> 
        {/* card-3 */}
            <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="">
      <h2 className="text-3xl text-[#101727] font-bold">Enterprise</h2>
      <p className='text-[#627382]'>For terms and businesses</p>
      <span className="text-xl text-[#101727] font-bold">$99/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
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
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-3xl">Contact Sales</button>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default Transparent;