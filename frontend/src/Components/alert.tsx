import React from 'react';

// Hero Section Component
const Alert = () => {
    return (
    <div className='font-montserrat flex center gap-6 h-9 px-96 items-center text-sm bg-gray-100 '>
        <div>
            <button className='bg-[#69315E] px-2 py-1  ml-24 text-white rounded-2xl'> 
                Latest release
            </button>
        </div>
        <div className='text-[#69315E]'>
            Introducing Creators Platform
        </div>
        <div className='text-[#69315E]'>
            Learn more 
        </div>
    </div>
    )
};

export default Alert;