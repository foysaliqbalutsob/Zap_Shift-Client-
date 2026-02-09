import React, { useEffect, useState } from "react";
import {
  MdLocalShipping,
  MdNotificationsActive,
  MdSecurity,
  MdVerifiedUser,
  MdStar,
  MdGroup,
  MdSpeed,
} from "react-icons/md";
import { AiFillApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const AppPromotion = () => {
  return (
    <div className="font-sans bg-base-100 dark:bg-slate-900 text-[#181c0d] dark:text-slate-200 transition-colors duration-300">
      {/* --- Main Section Start --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-6 lg:px-20 bg-base-100 dark:bg-slate-900">
        <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 1. Left Side: Mobile Mockups */}
          <div className="relative flex justify-center items-center h-[550px] lg:h-[650px] @container">
            {/* Secondary Phone (Dashboard) - পেছনে থাকে */}
            <div className="absolute z-10 transform translate-x-12 lg:translate-x-16 -translate-y-8 lg:-translate-y-12 w-[240px] lg:w-[280px] aspect-[9/19] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-800 shadow-xl overflow-hidden opacity-95">
              <div className="relative w-full h-full bg-white dark:bg-zinc-800 p-6 pt-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#C2E46B]/20 border-2 border-[#C2E46B] flex items-center justify-center overflow-hidden">
                    <img
                      src="https://i.pravatar.cc/150?u=faisal"
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-800 dark:text-white">
                      Alex Johnson
                    </h4>
                    <p className="text-[10px] font-bold text-[#C2E46B] uppercase tracking-tighter">
                      Premium Member
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#C2E46B]/10 dark:bg-zinc-700/50 rounded-2xl border border-[#C2E46B]/30 shadow-sm">
                    <p className="text-[10px] font-bold text-slate-500 dark:text-zinc-400 uppercase">
                      Active Deliveries
                    </p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-slate-900 dark:text-white">
                        03
                      </span>
                      <span className="text-xs font-bold text-slate-500 dark:text-[#C2E46B]">
                        Parcels
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-zinc-900/40 rounded-2xl border border-slate-100 dark:border-zinc-700">
                    <p className="text-[10px] font-bold text-slate-400">
                      Total Spent
                    </p>
                    <p className="text-lg font-black text-slate-800 dark:text-white">
                      $1,240.50
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Phone (Working Map) - সামনে থাকে */}
            <div className="absolute z-20 transform -translate-x-8 lg:-translate-x-12 translate-y-4 lg:translate-y-0 w-[250px] lg:w-[300px] aspect-[9/19] bg-slate-900 rounded-[2.8rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden transition-all hover:scale-105 duration-500">
              <div className="relative w-full h-full bg-slate-200">
                {/* React-Leaflet map (replaces iframe) */}
                <MapArea />

                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-4 right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#CAEB66] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <MdLocalShipping className="text-slate-900 text-2xl" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                        Courier is near
                      </p>
                      <p className="text-md font-black dark:text-white">
                        Arriving in 4 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Right Side: Text Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#CAEB66]/20 text-[#6a7d36] dark:text-[#CAEB66] text-sm font-bold rounded-full">
                🚀 Version 2.0 is out now
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Everything you need <br />
                <span className="text-[#CAEB66] bg-slate-900 px-4 py-1 inline-block rounded-xl mt-3 shadow-lg">
                  In Your Pocket
                </span>
              </h1>
              <p className="text-xl text-slate-500 dark:text-slate-400 max-w-[500px] leading-relaxed">
                Take control of your logistics. Track parcels in real-time and
                manage payments with our all-in-one mobile app.
              </p>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-5 pt-4">
              <button className="flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-7 py-4 rounded-2xl transition-all transform hover:-translate-y-1 shadow-xl border border-slate-700">
                <AiFillApple className="text-3xl" />
                <div className="text-left leading-none">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Download on
                  </p>
                  <p className="text-xl font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-7 py-4 rounded-2xl transition-all transform hover:-translate-y-1 shadow-xl border border-slate-700">
                <IoLogoGooglePlaystore className="text-3xl" />
                <div className="text-left leading-none">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">
                    Get it on
                  </p>
                  <p className="text-xl font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- Trust Badges Section (Matches your theme) --- */}
      <div className="bg-base-200 dark:bg-slate-900 py-12 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-around items-center gap-8 opacity-70 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 text-neutral dark:text-white">
          <div className="flex items-center gap-2">
            <MdVerifiedUser className="text-3xl text-[#CAEB66]" />
            <span className="font-bold text-xl uppercase tracking-tighter">
              SecureApp
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdStar className="text-3xl text-yellow-400" />
            <span className="font-bold text-xl">4.9 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <MdGroup className="text-3xl text-[#CAEB66]" />
            <span className="font-bold text-xl">1M+ Users</span>
          </div>
          <div className="flex items-center gap-2">
            <MdSpeed className="text-3xl text-[#CAEB66]" />
            <span className="font-bold text-xl">Real-time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPromotion;

// --- Map subcomponents placed below export to keep main component file tidy ---
function MapFlyController({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 10, {
        duration: 2,
        easeLinearity: 0.25,
      });
    }
  }, [center, map]);

  return null;
}

function MapArea() {
  const [mapCenter, setMapCenter] = useState([23.8103, 90.4125]);
  const [serviceCenters, setServiceCenters] = useState([]);

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setServiceCenters(data))
      .catch((err) => console.error("Error loading warehouses.json:", err));
  }, []);

  return (
    <MapContainer
      className="absolute inset-0 w-full h-full grayscale-[20%] contrast-[1.1]"
      center={mapCenter}
      zoom={7}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapFlyController center={mapCenter} />
      {serviceCenters.map((center, index) => (
        <Marker key={index} position={[center.latitude, center.longitude]}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg text-[#00302E]">
                {center.district} Hub
              </h3>
              <p className="text-sm text-slate-500">
                Service: {center.covered_area?.join(", ")}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
