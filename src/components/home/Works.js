import React from "react";
import Work from "./Work";
const works = [
  {
    id: 1,
    name: "SHIFTWALK",
    img: "",
    year: 2022,
  },
  {
    id: 2,
    name: "SHIFTWALK",
    img: "",
    year: 2022,
  },
  {
    id: 3,
    name: "SHIFTWALK",
    img: "",
    year: 2021,
  },
];

function Works() {
  return (
    <>
      {works?.map((work, i) => (
        <Work key={work?.id} index={i} work={work} />
      ))}
    </>
  );
}

export default Works;
