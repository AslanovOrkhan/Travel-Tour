import React from "react";
import TitleBanner from "../../../components/TitleBanner";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <>
      <TitleBanner title="register" />
      <div className="w-[90%] lg:w-[86%] m-auto overflow-hidden  py-16">
        <p className="text-start text-gray-600 text-sm">
          Hesab yaratdıqdan sonra siz ödəniş statusunuzu izləyə, təsdiqləməni
          izləyə və həmçinin turu bitirdikdən sonra tura qiymət verə bilərsiniz.
        </p>

        <form className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                First Name*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Last Name*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Email*
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Username*
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Passwod*
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Confirm Password*
              </label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Phone*
              </label>
              <input
                type="phone"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Birth Date*
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="w-full border border-gray-300 px-4 py-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 py-6">
            <input type="checkbox" />
            <p>
              * Creating an account means you're okay with our{" "}
              <a href="#" className="text-blue-500">
                Privacy Statement.
              </a>
            </p>
          </div>
          <div className="flex justify-between items-center mb-8">
            <button className="w-full bg-blue-800 text-white font-bold py-3 tracking-widest hover:bg-blue-900 transition">
              SIGN IN
            </button>
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
          <div className="w-full py-8 border-t border-t-gray-500 flex items-center justify-center flex-col lg:gap-2">
              <p className="font-bold text-black">Already a member?</p>
              <Link
                to={"/register"}
                className="text-blue-800 hover:underline text-sm font-bold uppercase"
              >
                login
              </Link>
          </div> 
        </form>
      </div>
    </>
  );
};

export default Register;
