import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContexts } from "../../../App";

function Header() {
  const { about } = useContext(MainContexts);
  const handleEmail = () => {
    window.open("mailto:hello@gmail.com?subject=&body=");
  };
  return (
    <>
      <div className="px-[20px] md:px-[32px]">
        <div
          className={`grid grid-cols-2 text-[20px] lg:text-[28px] font-neuton py-1 md:py-[10px]  border-b-2 ${
            about
              ? "border-[#262525] text-[#262525] opacity-60"
              : "border-[#bebebe] text-[#bebebe]"
          } `}
        >
          <div className="flex justify-between">
            <div className="flex md:space-x-6">
              <NavLink
                to="/"
                className="hover:line-through decoration-1 cursor-pointer md:w-[150px] "
              >
                <span className="hidden md:block">Sam Goddard</span>
                <span className="md:hidden">SG</span>
              </NavLink>
              <h2 className="md:w-[70px]">’89 —</h2>
            </div>
            <div className="hidden lg:flex lg:w-[300px] ">
              <marquee>Creative Developer — Available May ’22 —</marquee>
            </div>
          </div>
          <div>
            <div className="flex justify-end space-x-4 md:space-x-12">
              <nav className="flex space-x-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive && !about
                      ? "list-disc ml-[-30px] italic flex hover:line-through decoration-1 "
                      : `${"list-none not-italic hover:line-through decoration-1"}`
                  }
                  to="/"
                >
                  <li className="mr-0 w-4"></li>
                  <span>Work</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "list-disc ml-[-30px] italic flex hover:line-through decoration-1"
                      : `${"list-none not-italic hover:line-through decoration-1"}`
                  }
                  to="/about"
                >
                  <li className="mr-0 w-4"></li>
                  <span>About</span>
                </NavLink>
              </nav>
              <div>
                <button
                  onClick={handleEmail}
                  className="hover:line-through decoration-1"
                >
                  <span className="hidden md:block">Let's Collaborate</span>{" "}
                  <span className="hidden sm:block md:hidden  ">
                    Collaborate
                  </span>
                  <span className=" sm:hidden   ">Collab</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
