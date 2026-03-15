import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FaArrowLeft, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const ForgetPassWord = () => {
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("Reset Email Sent to:", data.email);

    // ২ সেকেন্ডের ফেক ডিলে
    setTimeout(() => {
      setLoading(false);
      setIsSent(true); // ইমেইল পাঠানো হয়েছে এমন স্টেট
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-100 px-4">
      <div className="card w-full max-w-md shadow-xl border border-base-200 bg-base-100">
        <div className="card-body p-8 text-center">
          
          {/* Icon ও Title */}
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary/10 rounded-full text-primary">
              <FaEnvelope size={30} />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-base-content mb-2">
            {isSent ? "Check your email" : "Forgot Password?"}
          </h2>
          <p className="text-sm text-base-content/60 mb-6">
            {isSent 
              ? "We've sent a password reset link to your email address." 
              : "No worries! Enter your email and we'll send you reset instructions."}
          </p>

          {!isSent ? (
            /* ইমেইল ফর্ম */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className={`input input-bordered w-full focus:input-primary ${errors.email ? "input-error" : ""}`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                {errors.email && (
                  <span className="text-error text-xs mt-1">{errors.email.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-white mt-2"
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Reset Password"
                )}
              </button>
            </form>
          ) : (
            /* সাকসেস স্টেট বাটন */
            <button 
              onClick={() => setIsSent(false)} 
              className="btn btn-outline btn-primary w-full mt-2"
            >
              Resend Email
            </button>
          )}

          {/* ব্যাক টু লগইন */}
          <div className="mt-8">
            <Link 
              to="/login" 
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <FaArrowLeft size={12} />
              Back to Login
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ForgetPassWord;