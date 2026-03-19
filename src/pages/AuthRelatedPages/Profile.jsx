import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
  // useAuth থেকে updateUserProfile ফাংশনটি বের করে নিন
  const { user, updateUserProfile } = useAuth();

  // Edit mode এবং input state গুলো
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [loading, setLoading] = useState(false);

  // ১. নাম এবং ছবি আপডেট করার ফাংশন
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fileInput = e.target.photoFile.files[0];
    let finalPhotoURL = user?.photoURL; // ডিফল্টভাবে আগের ছবিটিই থাকবে

    try {
      // ২. যদি ইউজার নতুন ছবি সিলেক্ট করে থাকে, তবে ImgBB-তে আপলোড করুন
      if (fileInput) {
        const formData = new FormData();
        formData.append("image", fileInput);

        const imgBB_API_KEY = import.meta.env.VITE_image_host;
        const res = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`,
          formData,
        );

        if (res.data.success) {
          finalPhotoURL = res.data.data.display_url; // নতুন ছবির লিঙ্ক
        }
      }

      // ৩. নাম এবং (নতুন বা পুরনো) ছবির লিঙ্ক দিয়ে প্রোফাইল আপডেট করুন
      await updateUserProfile(name, finalPhotoURL);

      setLoading(false);
      setIsEditing(false); // Edit mode বন্ধ করুন

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 p-4 py-12">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl overflow-hidden">
        <div className="h-32 bg-primary w-full flex items-center justify-center">
          <h1 className="text-3xl font-bold text-white">My Account</h1>
        </div>

        <div className="card-body -mt-16 items-center">
          {/* প্রোফাইল ছবি */}
          <div className="avatar">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl">
              <img
                src={
                  user?.photoURL ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
                alt="User"
              />
            </div>
          </div>

          {/* ৪. সাধারণ ভিউ মোড */}
          {!isEditing && (
            <div className="w-full text-center space-y-4 mt-6">
              <h2 className="text-3xl font-extrabold text-base-content">
                {user?.displayName || "Name not set"}
              </h2>
              <p className="text-xl text-base-content/70">{user?.email}</p>

              <div className="divider">Profile Details</div>

              <div className="grid grid-cols-2 gap-4 w-full text-left p-4 bg-base-200 rounded-box">
                <p>
                  <span className="font-semibold">UID:</span>{" "}
                  {user?.uid.slice(0, 10)}...
                </p>
                <p>
                  <span className="font-semibold">Verified:</span>{" "}
                  <span
                    className={
                      user?.emailVerified ? "text-success" : "text-warning"
                    }
                  >
                    {user?.emailVerified ? "Yes" : "No"}
                  </span>
                </p>
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-primary btn-block mt-8"
              >
                Edit My Profile
              </button>
            </div>
          )}

          {/* ৫. এডিট মোড (Form) */}
          {isEditing && (
            <form
              onSubmit={handleUpdateProfile}
              className="w-full space-y-5 mt-6 p-4 bg-base-200 rounded-box"
            >
              <h2 className="text-2xl font-bold text-center">
                Edit Profile Information
              </h2>

              {/* নাম এডিট */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered input-primary w-full"
                  required
                />
              </div>

              {/* ছবি এডিট (File Input) */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Update Photo (Optional)
                  </span>
                </label>
                <input
                  type="file"
                  name="photoFile" // e.target.photoFile দিয়ে ধরা যাবে
                  accept="image/*"
                  className="file-input file-input-bordered file-input-primary w-full"
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/50">
                    Current: {user?.photoURL?.slice(0, 30)}...
                  </span>
                </label>
              </div>

              {/* বাটন গ্রুপ */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="btn btn-outline btn-error"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Save Changes"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
