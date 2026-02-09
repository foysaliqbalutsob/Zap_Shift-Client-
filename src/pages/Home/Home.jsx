import React from 'react';
import Banner from '../Banner/Banner';
import ParcelDelivery from '../../components/Services/ParcelDelivery';
import ParcelSection from '../../components/ParcelFeatures';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQItem';
import MobileAppPromotion from '../../components/MobileAppPromotion';
import Brands from '../../components/Brands';
import Reviews from '../../components/Reviwes';

const Home = () => {
    return (
        <div className=' bg- [#EAECED]'>
            <Banner></Banner>
            <ParcelDelivery></ParcelDelivery>
            <ParcelSection></ParcelSection>
            <Testimonials></Testimonials>
            <Reviews></Reviews>
            <FAQ></FAQ>
            <div>
                <h1 className='flex justify-center items-center text-3xl font-bold my-8'>We have Thousand of Sales</h1>
                <Brands></Brands>
            </div>
            <MobileAppPromotion></MobileAppPromotion>
        </div>
    );
};

export default Home;