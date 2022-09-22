import React from "react";

function Work({ work, index }) {
  const { name, img, year } = work;
  return (
    <>
      <div className="flex justify-between text-[#bebebe] border-b ">
        <div className="flex items-center font-Neue">
          <h4 className="text-[46px] leading-0">({index})</h4>
          <h1 className="text-[150px]">{name}</h1>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Work;
