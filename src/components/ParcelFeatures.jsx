import React from "react";
import img1 from "../assets/banner/live-tracking.png";

import img3 from "../assets/banner/tiny-deliveryman.png"


// Reusable Card Component to keep code DRY
const FeatureCard = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="bg-base-200 dark:bg-slate-900 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 border border-base-300 dark:border-slate-700 transition-all duration-300">
      {/* Image Wrapper */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img
          alt={imgAlt}
          className="w-48 h-48 object-contain filter grayscale contrast-125 dark:invert opacity-90"
          src={imgSrc}
        />
      </div>

      {/* Dashed Divider Line (Hidden on mobile) */}
      <div className="hidden md:block h-32 border-l-2 border-dashed border-slate-300 dark:border-slate-700 self-center"></div>

      {/* Content Section */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#0D3D43] dark:text-teal-400 mb-4 tracking-tight">
          {title}
        </h3>
        <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed max-w-2xl font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const ParcelFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      imgSrc: img1
        ,
      imgAlt: "Live Tracking Illustration",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      imgSrc:
        img3,
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      imgSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBtAjyU__EtqrjJjDBKPAynCBU6mcVvYMs1aelstJXNaKZm6wnE0Fb6Zq9YKOvkvXmuXgp31IxyUx4FCajOP_9Uss1qkjyKYMFysqxOILUiYAUggSGYheEPy1cB_bX9xpTHOcoRhdSzH2cHFMbKe8G0stoBFf2roNd54wnj4H8lKw1Nz0GH4jlJ0YdQJmsXrer7M4zXuvOmhciGYpWNFWW2LQF7mnWxu0OB0A6fmtR09_VmPotBBFxe454SCWInxYGTYOhnbV0YnZQ",
      imgAlt: "Support Illustration",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <section className="bg-base-200 dark:bg-slate-900  min-h-screen py-20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* Mapping through features data */}
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            imgSrc={feature.imgSrc}
            imgAlt={feature.imgAlt}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ParcelFeatures;
