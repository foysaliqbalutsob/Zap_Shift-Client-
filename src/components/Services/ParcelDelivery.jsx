import React from "react";
import {
  MdMap,
  MdPayments,
  MdLocalShipping,
  MdBusiness,
  MdFlashOn,
  MdInventory,
  MdHome,
  MdSettingsSuggest,
  MdAssignmentReturn,
} from "react-icons/md";

const Services = () => {
  // 'How it Works' Data
  const processes = [
    {
      id: 1,
      icon: <MdMap />,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time.",
    },
    {
      id: 2,
      icon: <MdPayments />,
      title: "Cash On Delivery",
      desc: "Secure payments and fast processing for your business needs.",
    },
    {
      id: 3,
      icon: <MdLocalShipping />,
      title: "Delivery Hub",
      desc: "Strategic hubs across the country for faster sorting and shipping.",
    },
    {
      id: 4,
      icon: <MdBusiness />,
      title: "Booking SME & Corporate",
      desc: "Custom solutions for small businesses and large corporations.",
    },
  ];

  // 'Our Services' Data
  const services = [
    {
      id: 1,
      icon: <MdFlashOn className="text-blue-600" />,
      title: "Express & Standard Delivery",
      desc: "We deliver parcels within 24-72 hours in all major cities. Express delivery available in 4-6 hours.",
    },
    {
      id: 2,
      icon: <MdLocalShipping className="text-forest" />,
      title: "Nationwide Delivery",
      desc: "Home delivery in every district ensuring your products reach customers within 48-72 hours.",
    },
    {
      id: 3,
      icon: <MdInventory className="text-orange-500" />,
      title: "Fulfillment Solution",
      desc: "Specialized service with inventory management, online order processing, and packaging support.",
    },
    {
      id: 4,
      icon: <MdHome className="text-green-500" />,
      title: "Cash on Home Delivery",
      desc: "B2B cash on delivery anywhere in Bangladesh with guaranteed safety and fast payment.",
    },
    {
      id: 5,
      icon: <MdSettingsSuggest className="text-purple-500" />,
      title: "Corporate Service",
      desc: "Customized warehouse and inventory management support for large scale operations.",
    },
    {
      id: 6,
      icon: <MdAssignmentReturn className="text-red-500" />,
      title: "Parcel Return",
      desc: "Easy reverse logistics allowing customers to return or exchange products easily.",
    },
  ];

  return (
    <div className="bg-base-200 dark:bg-slate-900 py-16">
      {/* 1. How it Works Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-bold text-forest dark:text-[#bef264] mb-12">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processes.map((p) => (
            <div
              key={p.id}
              className="card bg-base-100 dark:bg-slate-800 shadow-sm border border-base-300 dark:border-slate-700 hover:shadow-md transition-all duration-300"
            >
              <div className="card-body p-8">
                <div className="text-4xl text-forest dark:text-[#bef264] mb-2">
                  {p.icon}
                </div>
                <h3 className="card-title text-lg">{p.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Our Services Section */}
      <section className="mx-4 rounded-[2.5rem] bg-[#03373D] dark:bg-black py-20 lg:py-15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-white font-extrabold mb-4">Our Services</h2>
            <p className="text-white max-w-2xl mx-auto">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="card bg-base-200 dark:bg-slate-900 shadow-sm border border-base-300 dark:border-slate-700 hover:bg-[#bef264] hover:shadow-md transition-all duration-300"
              >
                <div className="card-body items-center text-center p-10">
                  <div className="w-20 h-20 rounded-full bg-base-200/50 dark:bg-slate-800/50 flex items-center justify-center text-4xl mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
