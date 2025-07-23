import React from "react";
import TitleBanner from "../../../components/TitleBanner";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <TitleBanner title="login" />
      <div className="flex items-center justify-center bg-white px-4 lg:py-20 py-12 w-full h-auto">
        <div className="w-[90%] lg:w-[86%] m-auto overflow-hidden">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Username or E-Mail
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-2"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full border border-gray-300 px-4 py-2"
                  placeholder="Enter your password"
                />
              </div>
            </form>
            <div className="flex justify-between items-center mb-6">
              <button className="w-full bg-blue-800 text-white font-bold py-3 tracking-widest hover:bg-blue-900 transition">
                SIGN IN
              </button>
            </div>

             <div className="flex justify-end mb-6">
              <a href="#" className="text-sm text-blue-800 hover:underline">
                Forget Password?
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-9">
              <button className="w-full lg:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                <FaFacebookF /> Continue with <strong>Facebook</strong>
              </button>
              <button className="w-full lg:w-auto flex items-center justify-center gap-3 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                <FaGoogle /> Continue with <strong>Google</strong>
              </button>
              <button className="w-full lg:w-auto flex items-center justify-center gap-3 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
                <FaTwitter /> Continue with <strong>Twitter</strong>
              </button>
            </div>

            

            <div className="w-full py-8 border-t	 border-t-gray-500 flex items-center justify-center flex-col gap-2">
              <p className="font-bold text-black">DO NOT HAVE AN ACCOUNT?</p>
              <Link
                to={"/register"}
                className="text-blue-800 font-semibold hover:underline text-sm"
              >
                CREATE AN ACCOUNT
              </Link>
            </div> 
          </div>
        </div>
      </div>
   );
};

export default Login;
