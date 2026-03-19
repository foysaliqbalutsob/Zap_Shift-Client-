import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      parcelType: "Document",
    },
  });

  const onSubmit = (data) => {
    console.log("Parcel Data:", data);
    Swal.fire({
      icon: "success",
      title: "Booking Confirmed",
      text: "Your parcel request has been received!",
    });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-4">
      <div className="max-w-5xl mx-auto bg-base-100 rounded-3xl shadow-sm p-8 md:p-12 border border-base-200">
        <h1 className="text-4xl font-bold text-base-content mb-8">
          Send A Parcel
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* --- Parcel Type Selection --- */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-base-content">
              Enter your parcel details
            </h2>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Document"
                  {...register("parcelType")}
                  className="radio radio-primary radio-sm"
                />
                <span className="font-semibold text-base-content">
                  Document
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="Not-Document"
                  {...register("parcelType")}
                  className="radio radio-primary radio-sm"
                />
                <span className="font-semibold text-base-content/70">
                  Not-Document
                </span>
              </label>
            </div>
          </div>

          {/* --- Basic Parcel Info --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-base-content">
                Parcel Name
              </label>
              <input
                type="text"
                placeholder="Parcel Name"
                className={`input input-bordered w-full focus:outline-primary ${errors.parcelName ? "border-red-500" : ""}`}
                {...register("parcelName", {
                  required: "Parcel name is required",
                })}
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-base-content">
                Parcel Weight (KG)
              </label>
              <input
                type="number"
                placeholder="Parcel Weight (KG)"
                className={`input input-bordered w-full focus:outline-primary ${errors.weight ? "border-red-500" : ""}`}
                {...register("weight", { required: "Weight is required" })}
              />
            </div>
          </div>

          {/* --- Sender & Receiver Details Grid --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {/* Sender Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-base-content">
                Sender Details
              </h3>
              <div className="space-y-4">
                <input
                  placeholder="Sender Name"
                  className="input input-bordered w-full"
                  {...register("senderName", { required: true })}
                />
                <input
                  placeholder="Address"
                  className="input input-bordered w-full"
                  {...register("senderAddress", { required: true })}
                />
                <input
                  placeholder="Sender Phone No"
                  className="input input-bordered w-full"
                  {...register("senderPhone", { required: true })}
                />
                <select
                  className="select select-bordered w-full text-base-content/70"
                  {...register("senderDistrict")}
                >
                  <option value="">Select your District</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                </select>
                <textarea
                  placeholder="Pickup Instruction"
                  className="textarea textarea-bordered w-full h-24"
                  {...register("pickupInstruction")}
                ></textarea>
              </div>
            </div>

            {/* Receiver Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-base-content">
                Receiver Details
              </h3>
              <div className="space-y-4">
                <input
                  placeholder="Receiver Name"
                  className="input input-bordered w-full"
                  {...register("receiverName", { required: true })}
                />
                <input
                  placeholder="Receiver Address"
                  className="input input-bordered w-full"
                  {...register("receiverAddress", { required: true })}
                />
                <input
                  placeholder="Receiver Contact No"
                  className="input input-bordered w-full"
                  {...register("receiverPhone", { required: true })}
                />
                <select
                  className="select select-bordered w-full text-base-content/70"
                  {...register("receiverDistrict")}
                >
                  <option value="">Select your District</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                </select>
                <textarea
                  placeholder="Delivery Instruction"
                  className="textarea textarea-bordered w-full h-24"
                  {...register("deliveryInstruction")}
                ></textarea>
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold text-base-content/80">
            * PickUp Time 4pm-7pm Approx.
          </p>

          <button
            type="submit"
            className="btn btn-primary text-secondary font-bold px-8 normal-case rounded-lg"
          >
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
