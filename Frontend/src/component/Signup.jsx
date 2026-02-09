import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  return (
    <div className="
      min-h-screen 
      flex items-center justify-center 
      bg-gray-100 dark:bg-gray-900 
      px-4 transition-all duration-300
    ">
      <div className="
        w-full max-w-md 
        bg-white dark:bg-gray-800 
        shadow-xl rounded-2xl 
        px-8 py-10 
      ">
        
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700 dark:text-white">
          Create an Account
        </h2>

        <form className="space-y-4">

          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input type="text"
              className="input input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input type="email"
              className="input input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input type="password"
              className="input input-bordered w-full mt-1 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your password"
            />
          </div>

          <button  className=" bg-pink-500 hover:bg-pink-700 w-full rounded-md font-semibold mt-4">
            <span>Sign Up</span>
          </button>
        </form>
{/* 
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Already have an account?{" "}

          <span 
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p> */}
        

      </div>
    </div>
  );
};

export default Signup;
