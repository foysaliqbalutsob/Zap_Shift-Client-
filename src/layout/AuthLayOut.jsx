// import React from 'react';
// import Logo from '../components/Logo';
// import { Outlet } from 'react-router';
// import AuthImg from "../assets/banner/authImage.png"

// const AuthLayout = () => {
//     return (
//         <div>
//             <Logo></Logo>
//             <div className='flex my-8'>
//                 <div className='flex-1'>
//                     <Outlet></Outlet>

//                 </div>
//                 <div className='flex-1' >
//                     <img src={AuthImg} alt="" />

//                 </div>
                
//             </div>
            
//         </div>
//     );
// };

// export default AuthLayout;

import React from 'react';
import Logo from '../components/Logo';
import { Outlet } from 'react-router';
import AuthImg from "../assets/banner/authImage.png"

const AuthLayout = () => {
    return (
        // min-h-screen নিশ্চিত করে যে পেজটি পুরো স্ক্রিন জুড়ে থাকবে
        <div className='min-h-screen flex flex-col max-w-7xl mx-auto px-4'>
            
            {/* Navbar/Logo Section */}
            <nav className='py-6'>
                <Logo />
            </nav>

            {/* Main Content Area */}
            {/* items-center দিয়ে আমরা ভার্টিকালি সবকিছু সমান করছি */}
            <div className='flex flex-col md:flex-row items-center justify-center flex-1 gap-10 pb-10'>
                
                {/* Form Section (Left side on desktop) */}
                <div className='flex-1 w-full order-2 md:order-1'>
                    <Outlet />
                </div>

                {/* Image Section (Right side on desktop) */}
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