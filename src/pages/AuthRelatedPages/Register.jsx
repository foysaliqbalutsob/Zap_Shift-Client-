import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {registerUser,
        signInUser
} = useAuth();

  const handleRegistration = async (data) => {
    setLoading(true);
    console.log("Registration Data:", data);
    registerUser(data.email, data.password).then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })

    // ফেক ডিলে (Fake Delay)
    setTimeout(() => {
      setLoading(false);
      alert("Registration Successful!");
      // রেজিস্ট্রেশন সফল হলে লগইন পেজে পাঠিয়ে দেওয়া
      // navigate("/login"); 
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleRegistration)} className="card-body p-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Create Account</h2>

          {/* Name Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-base-content/80">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className={`input input-bordered w-full focus:input-primary transition-all ${errors.name ? "input-error" : ""}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-error text-xs mt-1 ml-1">{errors.name.message}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-bold text-base-content/80">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full focus:input-primary transition-all ${errors.email ? "input-error" : ""}`}
              {...register("email", { 
                required: "Email is required",
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <span className="text-error text-xs mt-1 ml-1">{errors.email.message}</span>
            )}
          </div>

          {/* Password Field with Toggle */}
          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-bold text-base-content/80">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className={`input input-bordered w-full focus:input-primary transition-all ${errors.password ? "input-error" : ""}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Must be at least 8 characters" },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Include letter, number & special char"
                  }
                })}
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <span className="text-error text-xs mt-1 ml-1">{errors.password.message}</span>
            )}
          </div>

          {/* Registration Button with Spinner */}
          <div className="form-control mt-8">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </div>

          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-bold">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;