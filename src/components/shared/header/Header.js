import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContexts } from "../../../App";

function Header() {
  const { about } = useContext(MainContexts);
  return (
    <>
      <div className="px-[32px]">
        <div
          className={`grid grid-cols-2 text-[28px] pt-[10px] border-b-2 ${
            about
              ? "border-[#262525] text-[#262525] opacity-60"
              : "border-[#bebebe] text-[#bebebe]"
          } `}
        >
          <div className="flex justify-between">
            <div className="flex space-x-6">
              <h2 className="hover:line-through ">Sam Goddard</h2>
              <h2>’89 —</h2>
            </div>
            <div className="w-[300px] overflow-hidden">
              <marquee>Creative Developer — Available May ’22 —</marquee>
            </div>
          </div>
          <div>
            <div className="flex justify-end space-x-12">
              <nav className="flex space-x-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "list-disc ml-[-30px] italic flex hover:line-through "
                      : `${"list-none not-italic hover:line-through"}`
                  }
                  to="/"
                >
                  <li className="mr-0 w-4"></li>
                  <span>Work</span>
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "list-disc ml-[-30px] italic flex hover:line-through"
                      : `${"list-none not-italic hover:line-through"}`
                  }
                  to="/about"
                >
                  <li className="mr-0 w-4"></li>
                  <span>About</span>
                </NavLink>
              </nav>
              <div>
                <button className="hover:line-through ">
                  Let's Collaborate
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
