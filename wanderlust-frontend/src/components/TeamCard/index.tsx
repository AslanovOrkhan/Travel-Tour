import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import personal from "../../../src/assets/images/personnel-3-550x500.jpg"
const TeamCard = () => {
  return (
    <>
      <div className=" flex flex-col items-start gap-3">
        <div className="">
          <img src={personal} alt="" className="w-full h-full"/>
        </div>
        <h5>Jeanette Kingston</h5>
        <span>Chief Executive Officer</span>
         <hr className="bg-gray-500 h-0.5  w-10 "/>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarks.
        </p>
        <div className="flex items-center justify-start gap-3.5">
            <FaFacebookF />
            <FaPinterestP />
            <FaTwitter />

        </div>
      </div>
    </>
  );
};

export default TeamCard;
