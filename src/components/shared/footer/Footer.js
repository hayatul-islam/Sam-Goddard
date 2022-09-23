import { motion } from "framer-motion";
import React from "react";

function Footer() {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  const handleEmail = () => {
    window.open("mailto:hayatulislam28@gmail.com?subject=&body=");
  };
  return (
    <>
      <div className=" text-[#bebebe] opacity-70 px-[32px] ">
        <div className=" border-t border-[#bebebe] flex justify-between py-4">
          <nav className="text-[28px] font-neuton flex space-x-6">
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
              className="text-[28px] font-neuton hover:line-through decoration-1"
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
