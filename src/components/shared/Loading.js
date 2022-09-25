import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";

function Loading() {
  return (
    <>
      <div className="bg-[#262525] w-screen h-screen p-12 flex justify-between ">
        <div className="flex w-[400px]">
          <motion.img
            initial={{ opacity: 0, height: 0, marginTop: "300px" }}
            animate={{ opacity: 0.6, height: "300px", marginTop: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className=" flex items-end w-[700px]">
          <motion.img
            initial={{ opacity: 0, height: 0, bottom: 0 }}
            animate={{ opacity: 0.6, height: "500px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <p className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-[30px] font-neuton text-[#bebebe] ">
        Sam Goddard’
        <CountUp duration={3} end={89} />—
      </p>
    </>
  );
}

export default Loading;
