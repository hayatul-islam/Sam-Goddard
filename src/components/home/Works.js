import React, { useState } from "react";
import Work from "./Work";
const works = [
  {
    id: 1,
    name: "SHIFTWALK",
    img: "https://images.unsplash.com/photo-1663860307386-891a5beb6e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2022,
  },
  {
    id: 2,
    name: "SHIFTWALK IT",
    img: "https://images.unsplash.com/photo-1663860307386-891a5beb6e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2022,
  },
  {
    id: 3,
    name: "SHIFTWALK",
    img: "https://images.unsplash.com/photo-1663860307386-891a5beb6e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
  },
  {
    id: 4,
    name: "SHIFTWALK",
    img: "https://images.unsplash.com/photo-1663860307386-891a5beb6e9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
  },
];

function Works() {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="py-3">
        {works?.map((work, i) => (
          <div>
            <Work
              isHover={isHover}
              setIsHover={setIsHover}
              key={work?.id}
              index={i}
              work={work}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Works;
