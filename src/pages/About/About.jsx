import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabContent = {
    Story: `We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.`,
    Mission: `Our mission is to revolutionize the logistics industry in our region by providing the most efficient and technology-driven delivery solutions. We aim to empower businesses and individuals by connecting them through a seamless network of professional riders and smart tracking systems.`,
    Success: `With over 1 million successful deliveries and a 99% customer satisfaction rate, our success story is built on trust. We have grown from a small local team to a nationwide network, helping thousands of entrepreneurs reach their customers faster than ever before.`,
    "Team & Others": `Our team consists of dedicated professionals, tech enthusiasts, and a massive fleet of reliable riders. Together, we work 24/7 to ensure the wheels keep turning. We believe in teamwork, integrity, and continuous innovation to serve you better.`,
  };

  const tabs = ["Story", "Mission", "Success", "Team & Others"];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-base-100 text-base-content font-sans min-h-screen">
      {/* Top Heading Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-base-content mb-4">About Us</h1>
        <p className="text-base-content/80 max-w-2xl leading-relaxed">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Tabs / Buttons Section */}
      <div className="border-t pt-8">
        <div className="flex flex-wrap gap-8 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-semibold transition-colors duration-300 ${
                activeTab === tab
                  ? "text-primary underline underline-offset-8 decoration-2"
                  : "text-base-content/50 hover:text-base-content"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Content Section */}
        <div className="max-w-4xl transition-all duration-500 ease-in-out">
          <p className="text-base-content/80 leading-7 text-lg mb-6">
            {tabContent[activeTab]}
          </p>

          <p className="text-base-content/70 leading-7 text-lg mb-6 opacity-80">
            {tabContent[activeTab]}
          </p>
          <p className="text-base-content/60 leading-7 text-lg opacity-60">
            {tabContent[activeTab]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
