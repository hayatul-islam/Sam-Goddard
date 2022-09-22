import React from "react";

function Work({ work, index }) {
  const { name, img, year } = work;
  return (
    <>
      <div className="flex justify-between text-[#bebebe] border-b border-[#e2e8f0] border-opacity-20 ">
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
    </>
  );
}

export default Work;
