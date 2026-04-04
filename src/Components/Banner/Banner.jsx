import React from 'react';
import { CiPlay1 } from "react-icons/ci";


const Banner = () => {
    return (
        <div className='space-y-5'>
            <div className='bg-gradient-to-r from-[#b1b2b5FF] to-[#e1e7ffFF] flex gap-1 rounded-3xl ml-6 mt-16 my-6 py-1 px-3 w-fit items-center'>
             <img src="/src/assets/Group 5.png" alt="" className='w-5 h-5 ml-4' />   
            <h4 className='font-semibold text-sm text-purple-500'>New: AI-Powered Tools Available</h4>
            </div>
            <div className='flex gap-3'>
                <div className='p-5 gap-3'>
               <h1 className='text-5xl font-bold text-[#101727FF]'>Supercharge Your
                 <br />
                 Digital Workflow</h1>
            <p className='text-lg text-[#627382] py-4'>Access premium AI tools, design assets, templates, and productivity 
            <br />
            software—all in one place. Start creating faster today.
            <br />
            Explore Products</p>
            <div className='flex gap-2 mt-10'>
                 <button className='btn bg-[#4f39f6] text-white rounded-3xl'>Explore Products</button>
          <button className='btn text-[#4f39f6] rounded-3xl'> <CiPlay1 color='#4f39f6' size={20}/> Watch Demo</button>
            </div>
                </div>
                <div>
               <img src="/src/assets/banner.png" alt="" className='w-[500px] h-[500px] pb-10' />
              </div>
            </div>
        </div>
    );
};

export default Banner;