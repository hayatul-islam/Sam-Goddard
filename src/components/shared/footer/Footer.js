import { motion } from "framer-motion";
import React, { useContext } from "react";
import { MainContexts } from "../../../App";

function Footer() {
  const { about } = useContext(MainContexts);
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  const handleEmail = () => {
    window.open("mailto:hello@gmail.com?subject=&body=");
  };
  return (
    <>
      <div
        className={`${
          about ? "] text-[#262525] opacity-60" : " text-[#bebebe]"
        } opacity-70 px-[20px] md:px-[32px] `}
      >
        <div
          className={` ${
            about ? "] border-[#262525] opacity-60" : " border-[#bebebe]"
          } border-t flex justify-between py-4 `}
        >
          <nav className="text-[20px] md:text-[28px] font-neuton flex space-x-2 sm:space-x-4 md:space-x-6">
            <a
              className=" hover:line-through decoration-1"
              href="https://twitter.com/samuelgoddard?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://open.spotify.com/user/sam_goddardn"
              target="_blank"
              rel="noreferrer"
              className=" hover:line-through decoration-1"
            >
              Spotify
            </a>
            <a
              href="https://github.com/samuelgoddard"
              target="_blank"
              rel="noreferrer"
              className=" hover:line-through decoration-1"
            >
              Github
            </a>
            <button
              onClick={handleEmail}
              className=" hover:line-through decoration-1"
            >
              Email
            </button>
          </nav>
          <div>
            <motion.button
              onTap={handleTop}
              className="text-[20px] md:text-[28px] font-neuton hover:line-through decoration-1"
            >
              <span className="hidden md:block">Back to Top</span>{" "}
              <span className="md:hidden">Top</span>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
