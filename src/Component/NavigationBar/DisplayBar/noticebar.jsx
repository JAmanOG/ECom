import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../../authentication/logoutbtn";

function Noticebar() {
  return (
    <section id="displaybar">
      <div className="flex text-sm pr-6 justify-between bg-black text-white pl-[3rem] p-2 w-full">
        <span className="p-2 align-middle">
        Free shipping, 30-day return or refund guarantee.
        </span>
        <div className="bg-black flex">
          <span className="p-2">
            <Link to="/login" rel="noopener noreferrer">
              SIGN IN
            </Link>
          </span>
          <span className="p-2">
            <Link to="/signup" rel="noopener noreferrer">
              SIGN UP
            </Link>
          </span>
          <span className="p-2">
          <LogoutButton />
          </span>
          <span className="p-2">
            <Link to="/help" rel="noopener noreferrer">
              FAQS
            </Link>
          </span>
          <div className="relative p-2 inline-block text-left dropdown"></div>
        </div>
      </div>
    </section>
  );
}

export default Noticebar;
