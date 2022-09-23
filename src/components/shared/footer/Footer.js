import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className=" text-[#bebebe] opacity-70 px-[32px] ">
        <div className=" border-t border-[#bebebe] flex justify-between py-4">
          <nav className="text-[28px] font-neuton flex space-x-6">
            <NavLink className=" hover:line-through decoration-1" to="">
              Twitter
            </NavLink>
            <NavLink className=" hover:line-through decoration-1" to="">
              Spotify
            </NavLink>
            <NavLink className=" hover:line-through decoration-1" to="">
              Github
            </NavLink>
            <NavLink className=" hover:line-through decoration-1" to="">
              Email
            </NavLink>
          </nav>
          <div>
            <button
              onClick={handleTop}
              className="text-[24px] font-neuton hover:line-through decoration-1"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
