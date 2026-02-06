import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdArrowOutward } from "react-icons/md";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`accordion-item group border rounded-xl overflow-hidden shadow-sm transition-all duration-300 ${
        isOpen
          ? "border-base-300 dark:border-[#bef264]/50 bg-[#e6f3f3] dark:bg-slate-800"
          : "border-base-300 bg-base-100 dark:bg-slate-800 dark:border-slate-700"
      }`}
    >
      <button
        className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span
          className={`font-semibold transition-colors ${
            isOpen
              ? "text-[#0a3a3a] dark:text-[#bef264]"
              : "text-[#0a3a3a] dark:text-white"
          }`}
        >
          {question}
        </span>
        <span
          className={`text-2xl transition-transform duration-300 ${
            isOpen
              ? "rotate-180 text-[#0a3a3a] dark:text-[#bef264]"
              : "text-gray-400"
          }`}
        >
          {isOpen ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </button>

      {/* Accordion Content with smooth transition */}
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open the first one

  const faqs = [
    {
      question: "How can I track my parcel?",
      answer:
        "Tracking your parcel is simple and efficient. Once your shipment is confirmed, you'll receive a unique tracking number via email or SMS. Simply enter this number into our tracking portal on the homepage.",
    },
    {
      question: "What are the shipping rates?",
      answer:
        "Our shipping rates are calculated based on weight, dimensions, and destination distance. Use our shipping calculator for an instant quote.",
    },
    {
      question: "Do you offer international delivery?",
      answer:
        "Yes, we deliver to over 150 countries worldwide with dedicated customs support to ensure your parcel arrives smoothly.",
    },
    {
      question: "What items are prohibited for shipment?",
      answer:
        "Prohibited items include hazardous materials, flammable liquids, and perishable goods without proper packaging. Please check our full list on the policy page.",
    },
    {
      question: "How will I be notified when the parcel arrives?",
      answer:
        "You'll receive a final delivery confirmation alert via SMS and email as soon as the delivery partner marks the parcel as delivered.",
    },
  ];

  return (
    <section className="bg-base-200 dark:bg-slate-900 min-h-screen py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a3a3a] dark:text-white mb-4">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Experience seamless logistics and real-time updates with our
            delivery service. We ensure your parcels reach their destination
            safely and quickly!
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Action Button Section */}
        <div className="mt-12 flex justify-center items-center">
          <div className="inline-flex items-center gap-2">
            <button className="bg-[#c2e46b] hover:bg-[#b0d258] transition-colors text-[#0a3a3a] font-bold px-8 py-3.5 rounded-full shadow-md text-sm md:text-base">
              See More FAQ's
            </button>
            <button className="bg-[#0a3a3a] hover:bg-[#134e4e] transition-colors text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              <MdArrowOutward className="text-xl rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
