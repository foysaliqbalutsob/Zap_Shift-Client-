

import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import AuthImg from "../assets/banner/authImage.png"
import Navbar from '../shared/Navbar';

const AuthLayout = () => {
    return (
        // min-h-screen নিশ্চিত করে যে পেজটি পুরো স্ক্রিন জুড়ে থাকবে
        <div className='min-h-screen flex flex-col  mx-auto px-4'>
            
            {/* Navbar/Logo Section */}
            
            <div className=' mb-4'>

                <Navbar></Navbar>

            </div>

           
            <div className='flex flex-col md:flex-row items-center justify-center flex-1 gap-10 pb-10 '>
                
                {/* Form Section (Left side on desktop) */}
                <div className='flex-1 w-full order-2 md:order-1'>
                    <Outlet />
                </div>

                
                <div className='flex-1 w-full order-1 md:order-2 flex justify-center'>
                    <img 
                        src={AuthImg} 
                        alt="Authentication" 
                        className='max-w-full h-auto object-contain max-h-[500px]' 
                    />
                </div>
                
            </div>
            
        </div>
    );
};

export default AuthLayout;