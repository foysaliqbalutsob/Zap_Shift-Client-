import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../../assets/banner/banner1.png"
import img2 from "../../assets/banner/banner2.png"
import img3 from "../../assets/banner/banner3.png"


const Banner = () => {
    return (
        <div className='relative overflow-hidden'>
           
            <Carousel autoPlay={true}
            infiniteLoop={true} 
            showThumbs={false} showStatus={false}>
                <div>
                    <img src={img1} />
                    
                </div>
                <div>
                    <img src={img2} />
                    
                </div>
                <div>
                    <img src={img3} />
                    
                </div>
            </Carousel>
            

            <div className="absolute bottom-10 left-10 flex  gap-5">
  <button className="bg-[#CAEB66] text-black px-6 py-3 rounded-lg">
    Track Your Parcel
  </button>

  <button className="border text-black px-6 py-3 rounded-lg">
    Be a Rider
  </button>
</div>
            
        </div>
    );
};

export default Banner;