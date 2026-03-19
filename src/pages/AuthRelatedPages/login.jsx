import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash } from "react-icons/fa"; // আইকনের জন্য
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogIn from "./SocialLogIn";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const location =useLocation()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();








const onSubmit = async (data) => {
    setLoading(true);
    signInUser(data.email, data.password)
      .then((result) => {
        setLoading(false);
        navigate(location?.state || "/")
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/"); 
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">
            Login
          </h2>

          {/* Email Field */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold text-base-content/80">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`input input-bordered w-full focus:input-primary transition-all ${errors.email ? "input-error" : ""}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <label className="label py-1">
                <span className="label-text-alt text-error font-medium">
                  {errors.email.message}
                </span>
              </label>
            )}
          </div>

          {/* Password Field with Toggle */}
          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text font-bold text-base-content/80">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`input input-bordered w-full focus:input-primary transition-all ${errors.password ? "input-error" : ""}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Must be at least 8 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: "Use letter, number & special char",
                  },
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

            <div className="flex justify-between items-start mt-1 px-1">
              <div className="flex-1">
                {errors.password && (
                  <span className="text-error text-xs font-medium leading-none">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <Link
                to="/forgot-password"
                size="xs"
                className="link link-hover text-xs text-#CAEB66 font-semibold"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {/* Login Button with Spinner */}
          <div className="form-control mt-8">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary bg-[#CAEB66] w-full text-black font-bold border-none text-lg"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>





          {/* GitHub */}
         

          <SocialLogIn></SocialLogIn>

          <p className="text-center mt-6 text-sm">
            New to <span className="font-bold text-black">ZapShift</span>?{" "}
            <Link
            state={location.state}
            
            to="/register" className="link link-primary text-[#CAEB66] font-bold">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
