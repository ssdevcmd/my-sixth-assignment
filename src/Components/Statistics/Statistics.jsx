import React from 'react';

const Statistics = () => {
    return (
        <div className='bg-[#4f39f6] p-10 flex justify-between container mx-auto px-30 my-15'>
            <span className='text-white'>
                <p className='font-bold text-4xl'>50K+</p>
                <p className='text-lg'>Active Users</p>
            </span>

            <span className='text-white'>
                <p className='font-bold text-4xl'>200+</p>
                <p className='text-lg'>Premium Tools</p>
            </span>

            <span className='text-white'>
                <p className='font-bold text-4xl'>4.9</p>
                <p className='text-lg'>Rating</p>
            </span>
        </div>
    );
};

export default Statistics;