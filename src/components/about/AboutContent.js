import { motion } from "framer-motion";
import React from "react";

function AboutContent() {
  return (
    <>
      <div className="py-6">
        <motion.div>
          <h2 className="text-[45px] sm:text-[60px] md:text-[75px] lg:text-[98px] font-neuton leading-none font-bold max-w-6xl">
            &nbsp;&nbsp;&nbsp;&nbsp;I’m a creative developer & co-founder of
            <a
              href="https://www.shiftwalk.studio"
              target="_blank"
              className="px-2 hover:line-through decoration-4"
              rel="noreferrer"
            >
              Shiftwalk Studio
            </a>
            . With a focus on methodical code, I enjoy making websites that are
            innovative, user-focussed, accessible & performant.
          </h2>
        </motion.div>
        <div className="flex justify-end mt-[-100px] sm:mt[-160px] md:mt-[-250px] z-0">
          <img
            className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] sm:h-[300px] md:h-[400px] lg:h-[500px] z-0 opacity-20 rounded"
            src="https://www.datocms-assets.com/38619/1607792250-reform.jpg?auto=format&dpr=1&fit=crop&h=730&w=900"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AboutContent;
