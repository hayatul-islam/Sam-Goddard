import React from "react";
import AboutContent from "../components/about/AboutContent";
import FeaturesAwards from "../components/about/FeaturesAwards";
import AboutMe from "../components/home/AboutMe";

function About() {
  return (
    <>
      <div className="px-[20px] md:px-[32px]">
        <AboutContent />
        <FeaturesAwards />
        <AboutMe />
      </div>
    </>
  );
}

export default About;
