import React from "react";
import { useForm } from "react-hook-form";
import riderImg from "../../assets/agent-pending.png";

const BeARider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Application Submitted!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-teal-900 mb-4">Be a Rider</h1>
        <p className="text-gray-600 max-w-xl">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Form Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-teal-900 mb-6 border-b pb-2">
            Tell us about yourself
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name & License */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  {...register("fullName", { required: "Name is required" })}
                  placeholder="Your Name"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-lime-400 outline-none"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Driving License Number
                </label>
                <input
                  {...register("licenseNo", { required: true })}
                  placeholder="Driving License Number"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-lime-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  placeholder="Your Email"
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-lime-400 outline-none"
                />
              </div>
            </div>

            {/* Region & District */}
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Region
                </label>
                <select
                  {...register("region")}
                  className="w-full p-2 border rounded-md bg-white"
                >
                  <option value="">Select your Region</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="chattogram">Chattogram</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your District
                </label>
                <select
                  {...register("district")}
                  className="w-full p-2 border rounded-md bg-white"
                >
                  <option value="">Select your District</option>
                  <option value="dhaka-city">Dhaka City</option>
                </select>
              </div>
            </div>

            {/* NID & Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">NID No</label>
              <input
                {...register("nid")}
                placeholder="NID"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* Bike Details */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Bike Brand Model and Year
              </label>
              <input
                {...register("bikeModel")}
                placeholder="Bike Brand Model and Year"
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Bike Registration Number
              </label>
              <input
                {...register("bikeReg")}
                placeholder="Bike Registration Number"
                className="w-full p-2 border rounded-md"
              />
            </div>

            {/* About Yourself */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Tell Us About Yourself
              </label>
              <textarea
                {...register("about")}
                placeholder="Tell Us About Yourself"
                className="w-full p-2 border rounded-md h-24"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#C5E571] hover:bg-[#b3d45f] text-teal-900 font-bold py-3 rounded-md transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Illustration Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={riderImg}
            alt="Rider Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BeARider;
