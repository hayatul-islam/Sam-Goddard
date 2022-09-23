import { motion } from "framer-motion";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
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

function WorkDetails() {
  const { workId } = useParams();
  const route = workId?.split("-");
  const routeQurey = route?.join(" ");

  const findData = works?.find((work) => work?.name === routeQurey);
  const { name, img } = findData;

  return (
    <>
      <div className="px-[32px] py-12">
        <div className="grid grid-cols-[auto_450px] gap-12">
          <div>
            <div className="">
              <img className="w-full " src={img} alt={name} />
            </div>
            <div className="text-[#bebebe] mt-[-110px] z-50 ">
              <motion.div whileHover={{ opacity: 0.5 }}>
                <Link
                  to="/"
                  className="text-[30px] font-neuton flex items-center"
                >
                  <BsArrowLeftShort className="pt-1" />
                  <span>(All Projects)</span>
                </Link>
              </motion.div>
              <h3 className="text-[145px] font-neue leading-none">{name}</h3>
            </div>
          </div>
          <div className="text-[#bebebe] space-y-12">
            <div>
              <div>
                <h4 className="text-[20px] font-neuton pb-2 opacity-60">
                  TECH STACK
                </h4>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">React</h4>
                  <h4 className="text-[20px] font-neuton ">
                    Static Site Generator
                  </h4>
                </div>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">Tailwind</h4>
                  <h4 className="text-[20px] font-neuton ">CSS Framework</h4>
                </div>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">Framer Motion</h4>
                  <h4 className="text-[20px] font-neuton ">Animation</h4>
                </div>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">Sanity</h4>
                  <h4 className="text-[20px] font-neuton ">Headless CMS</h4>
                </div>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">Vercel</h4>
                  <h4 className="text-[20px] font-neuton ">Hosting</h4>
                </div>
                <hr className="opacity-20" />
              </div>
            </div>

            <div>
              <div>
                <h4 className="text-[20px] font-neuton pb-2 opacity-60">
                  WITH THANKS TO
                </h4>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="flex justify-between items-center py-1">
                  <h4 className="text-[34px] font-neuton ">Designer</h4>
                  <Link
                    to=""
                    className="text-[20px] font-neuton hover:line-through decoratin-1 "
                  >
                    Isaac Powell
                  </Link>
                </div>
                <hr className="opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetails;
