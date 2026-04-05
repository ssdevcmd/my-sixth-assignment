import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-[#4f39f6] container mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 my-10 sm:my-12 lg:my-16 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0'>
            <span className='text-white text-center'>
                <p className='font-bold text-3xl sm:text-4xl'>50K+</p>
                <p className='text-base sm:text-lg'>Active Users</p>
            </span>

            <span className='text-white text-center'>
                <p className='font-bold text-3xl sm:text-4xl'>200+</p>
                <p className='text-base sm:text-lg'>Premium Tools</p>
            </span>

            <span className='text-white text-center'>
                <p className='font-bold text-3xl sm:text-4xl'>4.9</p>
                <p className='text-base sm:text-lg'>Rating</p>
            </span>
        </div>
    );
};

export default Statistics;