import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Work({ work, index, setIsHover, isHover }) {
  const { name, img, year } = work;
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();

  const route = name.split(" ");
  const routeQurey = route?.join("-");

  const handleNavigate = () => {
    navigate(`/${routeQurey}`);
  };

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
      <motion.div
        onClick={handleNavigate}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        whileHover={{ paddingLeft: "20px" }}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`relative group cursor-pointer z-50 ${
            isHover && "hover:opacity-100 opacity-20"
          }`}
        >
          <div className={`flex justify-between  text-[#bebebe]   `}>
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

          {isShow && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, zIndex: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute top-[-100px] right-[5%] w-[500px] h-[350px] opacity-20">
                <img className="w-full h-full" src={img} alt="" />
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
      <hr className="opacity-20" />
    </>
  );
}

export default Work;
