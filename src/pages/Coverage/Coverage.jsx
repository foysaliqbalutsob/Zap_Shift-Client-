import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// ম্যাপ মুভ করার জন্য flyTo কম্পোনেন্ট
function MapFlyController({ center }) {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.flyTo(center, 10, {
        duration: 2, // ২ সেকেন্ড ধরে অ্যানিমেশন হবে
        easeLinearity: 0.25
      });
    }
  }, [center, map]);

  return null;
}

const Coverage = () => {
  const [mapCenter, setMapCenter] = useState([23.8103, 90.4125]);
  const [serviceCenters, setServiceCenters] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/warehouses.json")
      .then((res) => res.json())
      .then((data) => setServiceCenters(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const foundDistrict = serviceCenters.find((c) =>
      c.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (foundDistrict) {
      setMapCenter([foundDistrict.latitude, foundDistrict.longitude]);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-black text-slate-800 dark:text-white">
            Available in <span className="text-[#C2E46B]">64 Districts</span>
        </h2>
        
        <form onSubmit={handleSearch} className="mt-8 flex max-w-lg mx-auto bg-slate-100 dark:bg-slate-800 rounded-full p-2 border focus-within:border-[#C2E46B] transition-all">
          <input
            type="text"
            placeholder="Search district name..."
            className="w-full bg-transparent px-6 outline-none dark:text-white"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit" className="bg-[#C2E46B] hover:bg-[#b1d35a] text-[#00302E] font-bold py-3 px-8 rounded-full">
            Search
          </button>
        </form>
      </div>

      <div className="h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
        <MapContainer
          className="w-full h-full"
          center={mapCenter}
          zoom={7}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* এই কম্পোনেন্টটি flyTo অ্যানিমেশন হ্যান্ডেল করবে */}
          <MapFlyController center={mapCenter} />

          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-lg text-[#00302E]">{center.district} Hub</h3>
                  <p className="text-sm text-slate-500">Service: {center.covered_area.join(", ")}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;