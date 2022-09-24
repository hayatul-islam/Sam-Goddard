import React from "react";
import AboutContent from "../components/about/AboutContent";
import FeaturesAwards from "../components/about/FeaturesAwards";

function About() {
  return (
    <>
      <div className="px-[32px]">
        <AboutContent />
        <FeaturesAwards />
      </div>
    </>
  );
}

export default About;
