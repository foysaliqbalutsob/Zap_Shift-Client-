import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { FaEye, FaEyeSlash, FaUser, FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
    const location =useLocation()


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {registerUser,updateUserProfile
      
} = useAuth();

const handleRegistration = async (data) => {
    setLoading(true);
    
    
    const imageFile = data.photoFile[0];
    
    
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      
      import.meta.env.VITE_image_host;
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
        formData
      );

      if (res.data.success) {
        const photoURL = res.data.data.display_url; 

       
        registerUser(data.email, data.password)
          .then(async (result) => {
            console.log("User Created:", result.user);

            await updateUserProfile(data.name, photoURL);

            setLoading(false);
            alert("Registration Successful with Profile Photo!");
            navigate(location.state || "/");
          })
          .catch((error) => {
            setLoading(false);
            console.log("Firebase Error:", error.message);
          });
      }
    } catch (error) {
      setLoading(false);
      console.log("ImgBB Error:", error.message);
      alert("Image upload failed, please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(handleRegistration)} className="card-body p-8">
          <h2 className="text-3xl font-bold text-center  text-[#CAEB66] mb-6">Create Account</h2>
          <p>Welcome to zap shift</p>


          
{/* File Upload Input Field */}
<div className="form-control w-full">
  <label className="label">
    <span className="label-text font-bold text-base-content/80">Upload Profile Photo</span>
  </label>
  <input
    type="file"
    accept="image/*" 
    className={`file-input file-input-bordered file-input-primary w-full ${errors.photoFile ? "file-input-error" : ""}`}
    {...register("photoFile", { required: "Please upload a photo" })}
  />
  {errors.photoFile && (
    <span className="text-error text-xs mt-1 ml-1">{errors.photoFile.message}</span>
  )}
</div>

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
              className="btn btn-primary bg-[#CAEB66] w-full text-white border-none font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform"
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