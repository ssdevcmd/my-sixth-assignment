import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <div className='bg-[#101727] text-white flex justify-between gap-20 p-10'>
               <div>
                 <h3 className='text-2xl font-bold'>DigiTools</h3>
                <p className='text-sm mt-2'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
               </div>

                <ul>
                    <li className='font-bold text-lg'>Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>

                <ul>
                    <li className='font-bold text-lg'>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>

                <ul>
                    <li className='font-bold text-lg'>Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>

                <div>
                    <h2 className='font-bold text-lg'>Social Links</h2>
                    <div className='flex justify-between gap-2 mt-2'>
                         <SlSocialInstagram size={30} />
                <FaFacebook size={30} />
                <FaXTwitter size={30} />
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;