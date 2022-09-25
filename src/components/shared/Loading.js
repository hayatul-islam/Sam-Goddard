import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";

function Loading() {
  return (
    <>
      <div className="bg-[#262525] w-screen h-screen px-4 lg:px-12 py-7 md:py-12 grid md:flex md:justify-between ">
        <div className="flex w-[300px] md:w-[300px] xl:w-[400px]">
          <motion.img
            initial={{ opacity: 0, height: 0, marginTop: "200px" }}
            animate={{ opacity: 0.6, height: "200px", marginTop: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full  md:hidden "
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, marginTop: "200px" }}
            animate={{ opacity: 0.6, height: "200px", marginTop: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden md:block lg:hidden"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, marginTop: "250px" }}
            animate={{ opacity: 0.6, height: "250px", marginTop: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden lg:block xl:hidden"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, marginTop: "250px" }}
            animate={{ opacity: 0.6, height: "300px", marginTop: 0 }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden xl:block"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className=" flex ml-auto items-end w-[300px] md:w-[400px] lg:w-[580px] xl:w-[700px]">
          <motion.img
            initial={{ opacity: 0, height: 0, bottom: 0 }}
            animate={{ opacity: 0.6, height: "200px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full  md:hidden "
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, bottom: 0 }}
            animate={{ opacity: 0.6, height: "300px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden md:block lg:hidden "
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, bottom: 0 }}
            animate={{ opacity: 0.6, height: "400px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden lg:block xl:hidden"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <motion.img
            initial={{ opacity: 0, height: 0, bottom: 0 }}
            animate={{ opacity: 0.6, height: "500px" }}
            transition={{ duration: 3, type: "spring" }}
            className="w-full h-full hidden xl:block"
            src="https://images.unsplash.com/photo-1494587351196-bbf5f29cff42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGFya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <p className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] text-[24px] md:text-[30px] font-neuton text-[#bebebe] ">
        Sam Goddard’
        <CountUp duration={2.6} end={89} />—
      </p>
    </>
  );
}

export default Loading;
