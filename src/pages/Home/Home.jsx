import React from 'react';
import Banner from '../Banner/Banner';
import ParcelDelivery from '../../components/Services/ParcelDelivery';
import ParcelSection from '../../components/ParcelFeatures';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQItem';

const Home = () => {
    return (
        <div className=' bg- [#EAECED]'>
            <Banner></Banner>
            <ParcelDelivery></ParcelDelivery>
            <ParcelSection></ParcelSection>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;