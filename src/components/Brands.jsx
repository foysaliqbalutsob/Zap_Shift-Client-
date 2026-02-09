import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay'; 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Scrollbar বাদ দিয়েছি

// তোমার ইমেজগুলো ইমপোর্ট করা আছে ধরে নিচ্ছি
import img1 from "../assets/brands/amazon.png";
import img2 from "../assets/brands/amazon_vector.png";
import img3 from "../assets/brands/casio.png";
import img4 from "../assets/brands/moonstar.png";
import img5 from "../assets/brands/randstad.png";
import img6 from "../assets/brands/star.png";
import img7 from "../assets/brands/start_people.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Brands = () => {
    return (
        <div className="py-10 bg-base-100 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
            <Swiper 
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                modules={[Autoplay]} // শুধু Autoplay মডিউল রেখেছি
                className="mySwiper items-center"
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {
                    images.map((singleImg, index) => (
                        <SwiperSlide key={index} className="flex items-center justify-center">
                            <div className="flex items-center justify-center h-20 px-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                <img 
                                    src={singleImg} 
                                    alt={`brand-${index}`} 
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Brands;