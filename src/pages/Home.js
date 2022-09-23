import React from "react";
import Collaborate from "../components/home/Collaborate";
import Works from "../components/home/Works";

function Home() {
  return (
    <>
      <div className="px-[32px]">
        <Works />
        <Collaborate />
      </div>
    </>
  );
}

export default Home;
