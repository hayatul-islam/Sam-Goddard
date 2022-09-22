import { motion } from "framer-motion";
import React, { useState } from "react";

function Work({ work, index, setIsHover, isHover }) {
  const { name, img, year } = work;
  const [isShow, setIsShow] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
    setIsShow(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
    setIsShow(false);
  };

  return (
    <>
      <div className="relative group">
        <motion.div whileHover={{ paddingLeft: "20px", opacity: 1 }}>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`flex justify-between  text-[#bebebe] ${
              isHover && "hover:opacity-100 opacity-20"
            }  `}
          >
            <div className="flex items-start leading-none py-3 space-x-4">
              <span className="text-[46px] font-light font-neuton ">
                ({index < 10 ? `0${index + 1}` : `${index}`})
              </span>
              <span className="text-[150px] font-neue">{name}</span>
            </div>
            <div className="flex items-end ">
              <h3 className="text-[60px] font-light font-neuton">{year}</h3>
            </div>
          </div>
        </motion.div>
        <hr className="opacity-20" />
        {isShow && (
          <div className="absolute top-[-100px] right-[5%] w-[500px] h-[350px] opacity-20">
            <img className="w-full h-full" src={img} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Work;
