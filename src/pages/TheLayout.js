import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkDetails from "../components/home/WorkDetails";
import Header from "../components/shared/header/Header";
import About from "./About";

function TheLayout() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/:workId" element={<WorkDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default TheLayout;
