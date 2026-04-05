import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] text-white px-4 sm:px-8 lg:px-12 py-10'>
                <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap justify-between gap-10">
               <div className='max-w-sm'>
                 <h3 className='text-2xl font-bold'>DigiTools</h3>
                <p className='text-sm mt-2'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
               </div>

                <ul className='space-y-2'>
                    <li className='font-bold text-lg'>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>

                <ul className='space-y-2'>
                    <li className='font-bold text-lg'>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>

                <ul className='space-y-2'>
                    <li className='font-bold text-lg'>Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <h2 className='font-bold text-lg mb-2'>Social Links</h2>
                    <div className='flex gap-3'>
                         <SlSocialInstagram size={30} />
                <FaFacebook size={30} />
                <FaXTwitter size={30} />
                    </div>
                </div>
                </div>
                
                    <hr className='my-5 bg-[#e5e7eb]' />
                    <div className='flex justify-between text-[#fafafa]'>
                    <span>© 2026 Digitools. All rights reserved.</span>
                    <span>Privacy Policy       Terms of Service Cookies</span>
                    </div>      
                
            </div>
        </div>
    );
};

export default Footer;