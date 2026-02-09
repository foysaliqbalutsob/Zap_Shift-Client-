import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const RootLayout = () => {
    return (
        <div className='w-full mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;