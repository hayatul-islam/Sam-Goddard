import { motion } from "framer-motion";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
const works = [
  {
    id: 1,
    name: "Tattooed",
    img: "https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2022,
    details:
      "Tattooed pickled pug iceland. Pork belly austin taiyaki hexagon occupy gatekeep jianbing tattooed sriracha, ugh pop-up. Meditation gluten-free copper mug lyft food truck mustache yes plz blog tattooed affogato tofu prism la croix fam green juice. Knausgaard pickled celiac vibecession, slow-carb listicle hashtag. ",
  },
  {
    id: 2,
    name: "Narwhal",
    img: "https://images.unsplash.com/photo-1610043009524-fccee9d8b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzEwfHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2022,
    details:
      "Narwhal kinfolk af twee 3 wolf moon praxis schlitz franzen art party leggings lo-fi synth microdosing normcore vaporware. Pabst actually cliche food truck banh mi glossier bodega boys crucifix same ennui. Church-key subway tile quinoa hot chicken vaporware literally farm-to-table roof party squid actually knausgaard.",
  },
  {
    id: 3,
    name: "V&A Portal",
    img: "https://images.unsplash.com/photo-1584988176693-876965ff28df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMwfHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Flexitarian lomo deep v chillwave food truck Brooklyn heirloom, banjo sus copper mug. Lomo activated charcoal salvia health goth retro hammock coloring book drinking vinegar mustache synth ugh church-key 90's PBR&B. Sriracha vaporware stumptown marfa +1, iceland bodega boys scenester umami.",
    stack: {
      twig: "Templating",
      craft: "CMS",
      tailwind: "CMS Framework",
      algolia: "Live Search",
    },
    thanksTo: {
      client: "V&A",
      employer: "Kind",
    },
  },
  {
    id: 4,
    name: "Blue bottle",
    img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjExfHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Blue bottle umami lyft bodega boys, four loko 90's hoodie artisan lomo cray. Kickstarter franzen 90's beard tacos green juice sriracha thundercats poutine vinyl echo park lyft. Migas taiyaki keffiyeh hot chicken. Yes plz hoodie lyft cronut lumbersexual scenester leggings copper mug seitan ascot sus.",
  },
  {
    id: 5,
    name: "Vegan twee",
    img: "https://images.unsplash.com/photo-1519219788971-8d9797e0928e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Vegan twee squid live-edge irony meditation. Actually intelligentsia cronut seitan gatekeep heirloom tacos vaporware cloud bread +1 bicycle rights YOLO. Kitsch DIY ennui hot chicken, drinking vinegar praxis keytar coloring book pop-up authentic.",
  },
  {
    id: 6,
    name: "Jianbing",
    img: "https://images.unsplash.com/photo-1577017050748-389f0021d860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Jianbing iceland praxis bespoke food truck blue bottle la croix synth art party edison bulb wolf keytar. Gochujang coloring book kinfolk poutine pitchfork farm-to-table.",
  },
  {
    id: 7,
    name: "Trust fund",
    img: "https://images.unsplash.com/photo-1507837357635-0c89d2d066de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxzaW1wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Trust fund marfa pour-over, mukbang locavore tote bag iceland artisan godard. Knausgaard typewriter woke put a bird on it williamsburg, squid literally truffaut freegan trust fund tilde plaid. Kickstarter quinoa vegan big mood unicorn. Echo park fixie sartorial helvetica photo booth YOLO pitchfork,",
  },
  {
    id: 8,
    name: "Chartreuse",
    img: "https://images.unsplash.com/photo-1509943089014-50b4f4edfbbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHNpbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "single-origin coffee edison bulb glossier chartreuse iPhone +1. Taiyaki photo booth 90's lyft cold-pressed chia. Flexitarian sustainable wolf schlitz farm-to-table. Banh mi artisan tousled, 90's helvetica roof party fashion axe.",
  },
  {
    id: 9,
    name: "Pabst XOXO",
    img: "https://images.unsplash.com/photo-1584117756263-bc482c509c49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHNpbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Pabst XOXO ramps, art party fashion axe readymade voluptate hexagon salvia 3 wolf moon church-key ut bushwick synth JOMO. Fanny pack taiyaki normcore XOXO, quinoa bruh lo-fi heirloom nulla blog cornhole. ",
  },
  {
    id: 10,
    name: "Lyft pinterest",
    img: "https://images.unsplash.com/photo-1521489871110-81dc5a61dbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHNpbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Lyft pinterest vexillologist selvage, shaman elit vaporware mixtape kinfolk forage. Kitsch palo santo 90's, poke chambray edison bulb kombucha succulents laborum pinterest blue bottle sustainable. Whatever fanny pack pok pok fingerstache. Freegan intelligentsia blue bottle single-origin coffee anim lyft, kombucha truffaut.",
  },
  {
    id: 11,
    name: "Brunch",
    img: "https://images.unsplash.com/photo-1448932284983-0c7b152eba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHNpbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Brunch vaporware selvage proident truffaut bushwick intelligentsia taiyaki cliche flexitarian ascot incididunt air plant vegan af. Elit proident 90's fixie enim try-hard distillery ugh prism heirloom ut. Blog aliquip migas cloud bread chillwave waistcoat viral hammock williamsburg dolore af chambray anim.",
  },
  {
    id: 12,
    name: "Aliqua",
    img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHNpbXBsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    year: 2021,
    details:
      "Aliqua incididunt austin aliquip bicycle rights anim enim. Lorem fixie 90's drinking vinegar, pour-over seitan la croix ad magna mustache tumblr. Scenester readymade health goth seitan twee venmo humblebrag fashion axe exercitation.",
  },
];

function WorkDetails() {
  const { workId } = useParams();
  const route = workId?.split("-");
  const routeQurey = route?.join(" ");

  const findData = works?.find((work) => work?.name === routeQurey);
  const { name, img, details, stack, thanksTo } = findData;

  return (
    <>
      <div className="px-[20px] md:px-[32px] py-12">
        <div className="grid lg:grid-cols-[auto_400px] xl:grid-cols-[auto_450px] gap-12">
          <div>
            <motion.div
              initial={{ scale: 1.03 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <img className="w-full rounded " src={img} alt={name} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring" }}
            >
              <div className="text-[#bebebe] mt-[-60px] sm:mt-[-70px] md:mt-[-80px] lg:mt-[-110px] z-50 ">
                <motion.div whileHover={{ opacity: 0.5 }}>
                  <Link
                    to="/"
                    className="text-[20px] md:text-[30px] font-neuton flex items-center"
                  >
                    <BsArrowLeftShort className="pt-1" />
                    <span>(All Projects)</span>
                  </Link>
                </motion.div>
                <h3 className="text-[60px] sm:text-[88px] lg:text-[145px] font-neue leading-none">
                  {name}
                </h3>
              </div>
            </motion.div>
          </div>
          {!stack && (
            <div className="text-[#bebebe] space-y-12">
              <div>
                <div>
                  <h4 className="text-[16px] xl:text-[20px] font-neuton pb-2 opacity-60">
                    TECH STACK
                  </h4>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        React
                      </h4>
                      <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                        Static Site Generator
                      </h4>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        Tailwind
                      </h4>
                      <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                        CSS Framework
                      </h4>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        Framer Motion
                      </h4>
                      <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                        Animation
                      </h4>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        Sanity
                      </h4>
                      <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                        Headless CMS
                      </h4>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        Vercel
                      </h4>
                      <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                        Hosting
                      </h4>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
              </div>
              <div>
                <div>
                  <h4 className="text-[16px] xl:text-[20px] font-neuton pb-2 opacity-60">
                    WITH THANKS TO
                  </h4>
                  <hr className="opacity-20" />
                </div>
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                  >
                    <div className="flex justify-between items-center py-1">
                      <h4 className="text-[24px] xl:text-[34px] font-neuton ">
                        Designer
                      </h4>
                      <Link
                        to=""
                        className="text-[18px] xl:text-[20px] font-neuton hover:line-through decoratin-1 "
                      >
                        Isaac Powell
                      </Link>
                    </div>
                  </motion.div>
                  <hr className="opacity-20" />
                </div>
              </div>
            </div>
          )}
          {stack && (
            <div className="text-[#bebebe] space-y-12">
              <div>
                <div>
                  <h4 className="text-[16px] xl:text-[20px] font-neuton pb-2 opacity-60">
                    TECH STACK
                  </h4>
                  <hr className="opacity-20" />
                </div>
                <div className="text-[#bebebe] space-y-12">
                  <div>
                    {Object.entries(stack)?.map(([key, value], i) => (
                      <div key={i}>
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1, type: "spring" }}
                        >
                          <div className="flex justify-between items-center py-1">
                            <h4 className="text-[24px] xl:text-[34px] font-neuton capitalize">
                              {key}
                            </h4>

                            <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                              {value}
                            </h4>
                          </div>
                        </motion.div>
                        <hr className="opacity-20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="text-[16px] xl:text-[20px] font-neuton pb-2 opacity-60">
                    WITH THANKS TO
                  </h4>
                  <hr className="opacity-20" />
                </div>
                <div>
                  {Object.entries(thanksTo)?.map(([key, value], i) => (
                    <div key={i}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                      >
                        <div className="flex justify-between items-center py-1">
                          <h4 className="text-[24px] xl:text-[34px] font-neuton capitalize">
                            {key}
                          </h4>

                          <h4 className="text-[18px] xl:text-[20px] font-neuton ">
                            {value}
                          </h4>
                        </div>
                      </motion.div>
                      <hr className="opacity-20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ABOUT THE PROJECT */}
        <div className="md:flex md:justify-between xl:justify-start  py-12">
          <div className="xl:w-[490px] lg:w-[400px] md:w-[200px]">
            <p className="text-[20px] text-[#bebebe] font-neuton">
              ABOUT THE PROJECT
            </p>
            <div className="hidden md:block xl:w-[330px] text-[#bebebe] pt-6">
              <div>
                <h4 className="text-[16px] lg:ext-[20px] font-neuton pb-2 opacity-60">
                  AWARDS
                </h4>
                <hr className="opacity-20" />
              </div>
              <div>
                <div className="lg:flex justify-between items-center py-2">
                  <h4 className="text-[20px] xl:text-[34px] leading-none font-neue ">
                    CSSDA
                  </h4>
                  <h4 className="text-[18px] lg:text-[20px] leading-none font-neuton ">
                    Site Of The Day
                  </h4>
                </div>
                <hr className="opacity-20" />
              </div>
            </div>
          </div>
          <div className="md:w-[490px] text-[#bebebe] pt-4 md:pt-0">
            <p className="text-[33px] md:text-[40px] lg:text-[50px] font-neuton leading-none ">
              &nbsp;&nbsp;&nbsp;&nbsp;{details}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkDetails;
