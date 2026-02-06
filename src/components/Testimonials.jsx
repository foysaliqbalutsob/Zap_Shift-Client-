import React from "react";
import { MdStar, MdStarHalf, MdArrowForward } from "react-icons/md";

const TestimonialCard = ({ stars, text, name, role, image }) => (
  <div className="bg-base-100 dark:bg-slate-800 p-8  rounded-xl border border-base-300 dark:border-slate-700 flex flex-col justify-between shadow-lg transform transition hover:-translate-y-2 duration-300">
    <div>
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => {
          const rating = i + 1;
          return rating <= Math.floor(stars) ? (
            <MdStar key={i} className="text-xl" />
          ) : rating === Math.ceil(stars) && stars % 1 !== 0 ? (
            <MdStarHalf key={i} className="text-xl" />
          ) : null;
        })}
      </div>
      <p className="text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed">
        "{text}"
      </p>
    </div>
    <div className="flex items-center">
      <img
        alt={name}
        className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#14B8A6]/20"
        src={image}
      />
      <div>
        <h4 className="font-bold text-[#0D3D3D] dark:text-white text-sm">
          {name}
        </h4>
        <p className="text-xs text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  //   const reviews = [
  //     {
  //       id: 1,
  //       stars: 5,
  //       text: "The tracking system is the best I've ever used. I knew exactly where my package was from the warehouse to my doorstep.",
  //       name: "Sarah Jenkins",
  //       role: "E-commerce Owner",
  //       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKLZ8RJfDL-yyYPosfl_G05K1zjDnjBk1LxQf7QuoA-Mlk8lCBhRxoTG4IMTNxai-HzdoUTZarcH4vYQO7aWjlKePLmUR5sPeyZkNXZLo2uZ3nEGY7aMCuyJdRPjw1SW_-qum0w4qtKPbK2G62cnzU6DVIMZSMVsVa_neo49mDl_WhE4ZZDOp3oB2c9pkmacW7_iKGDF8pXiCz_Rpq-wkr7qaegP-z1Ka8CAV1dBAz8PH-5JTrUhdJGshdLdPNmMCpbc_McgRwHV0"
  //     },
  //     {
  //       id: 2,
  //       stars: 5,
  //       text: "Fastest delivery I've had this year. The courier was professional and the fragile items arrived in perfect condition.",
  //       name: "Michael Rivera",
  //       role: "Tech Enthusiast",
  //       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzRq9AwSNa-WQ9mCUWbrooEQ_4JRlLtm3vv-2IBvoheVbqrPMfxO5CsP47GKZOvzA2EM5fESL7nqm0tYUt-wif7Z-DxD2F2MJkyizgzzrsXk2qk6aZoHTsuExrQPXtWWR05q670KmnesIgix-LJVfTLjr0xcN8rZ1-YAa-9YfPHoQwuct269lYO6SfGy6MVGxw1HaNny0Jwp4iLahrJoei0GchYxUSXHp4rwaCUTdrCuA4B0JwYNqrlV5Y8VEPGt0erNAxafMY6lk"
  //     },
  //     {
  //       id: 3,
  //       stars: 4.5,
  //       text: "Affordable rates and great customer support. They solved a delivery address issue for me in minutes. Highly recommend!",
  //       name: "Jessica Williams",
  //       role: "Freelancer",
  //       image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3H4TpHS_FqXvZVtVFwK1GJQcLxfEB0MD2P1dtveAk7k1M4zDLUmIroH7cuSxExwKZdYYTAGCmLspQsVzbS_UK_jgUxNUsp8jCcUZ0sp5tYgBaYDBtKrOrLA5Q80DrqfynX3J1kMsi79HdPltRE9SNVtxtBU5gAPC5PazSs7X64-sw1l6Uygyl2jBjKnRplEAZK2k02TdItFK3-HzNxzvARgngyIHbkCGrilYGZTLbev4eJ6WY7ha4WigHV-MGe9exlwrkFByq78U"
  //     }
  //   ];

  return (
    <section className="bg-base-200 dark:bg-slate-900 py-20 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Animated SVG Illustration */}
        <div className="mb-8 flex justify-center w-full max-w-md animate-pulse">
          <svg
            className="w-64 h-auto text-[#14B8A6] opacity-80"
            fill="none"
            viewBox="0 0 200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 20 L45 20 L50 90 L100 90"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
            <circle
              cx="48"
              cy="98"
              r="6"
              stroke="currentColor"
              strokeWidth="1.5"
            ></circle>
            <rect
              height="20"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              width="30"
              x="52"
              y="70"
            ></rect>
            <rect
              height="15"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              width="25"
              x="52"
              y="55"
            ></rect>
            <rect
              height="25"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1.5"
              width="40"
              x="110"
              y="80"
            ></rect>
            <path
              d="M30 110 L190 110"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1"
            ></path>
          </svg>
        </div>

        {/* Header Content */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D3D3D] dark:text-white mb-6 font-display">
            What our customers are saying
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Reliable logistics, seamless tracking, and care for every parcel.
            Experience why thousands trust us for their deliveries.
          </p>
        </div>

        {/* Testimonials Grid */}

        {/* CTA Button */}
        <div className="mt-16">
          <button className="bg-[#0D3D3D] hover:bg-opacity-90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg flex items-center gap-2 group">
            Read All Stories
            <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
