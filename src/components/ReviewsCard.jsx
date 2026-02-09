import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const ReviewsCard = ({ review }) => {
  // Destructuring for easy use
  const { userName, user_photoURL, ratings, review: reviewText, date } = review;

  return (
    <div className="bg-base-200  dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 h-full flex flex-col relative group hover:shadow-md transition-all duration-300">
      
      
      <FaQuoteLeft className="absolute top-4 right-6 text-slate-100 dark:text-slate-700 text-5xl" />

      <div className="relative z-10 flex flex-col h-full">
        
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={user_photoURL} 
            alt={userName} 
            className="w-12 h-12 rounded-full border-2 border-[#C2E46B] object-cover"
          />
          <div>
            <h4 className="font-bold text-slate-800 dark:text-white leading-none">{userName}</h4>
            <p className="text-[10px] text-slate-400 mt-1 uppercase font-semibold">
              {new Date(date).toLocaleDateString('en-GB')}
            </p>
          </div>
        </div>

        {/* রেটিং স্টারস */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar 
              key={index}
              className={`text-sm ${index < Math.floor(ratings) ? 'text-yellow-400' : 'text-slate-200 dark:text-slate-600'}`}
            />
          ))}
          <span className="text-xs font-bold text-slate-500 ml-1">{ratings}</span>
        </div>

        {/* রিভিউ টেক্সট */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic flex-grow">
          "{reviewText}"
        </p>
      </div>

      {/* নিচের বর্ডার এনিমেশন */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C2E46B] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
};

export default ReviewsCard;