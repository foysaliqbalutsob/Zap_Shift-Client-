import React, { useEffect, useState } from "react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewsCard from "./ReviewsCard";
import "swiper/css";
import "swiper/css/effect-coverflow";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <div>
      <div >
        <h2 className="text-3xl font-bold my-8 flex justify-center">Reviews</h2>
        <p className="flex justify-center my-8 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut nisi culpa deleniti non facere nam accusamus unde magni quo.</p>
      </div >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        // ২. Autoplay কনফিগারেশন যোগ করো (২ সেকেন্ড পর পর)
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        slidesPerView={"auto"} // অথবা ৩ দিতে পারো
        coverflowEffect={{
          rotate: 30, // সাইডের কার্ডগুলোকে কত ডিগ্রি বাঁকাবে
          stretch: '50%', // কার্ডগুলোর মধ্যে গ্যাপ (মাইনাস দিলে একটি আরেকটির ওপর উঠে আসবে)
          depth: 200, // সাইডের কার্ডগুলো কতটুকু পেছনে যাবে (এটি বাড়ালে থ্রিডি লুক বাড়বে)
          modifier: 1,
          scale:0.75, // ইফেক্টের তীব্রতা
          slideShadows: true, // এটি অবশ্যই true রাখবে, তাহলেই ওই রিয়েলিস্টিক শ্যাডো আসবে
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          // স্লাইডারের ক্লাসে উইডথ নিয়ন্ত্রণ করা
          <SwiperSlide key={review.id} className="max-w-[350px]">
            <ReviewsCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
