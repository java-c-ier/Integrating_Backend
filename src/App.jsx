import React, { useState } from "react";
import Home from "./Components/Home";
import Show from "./Components/Show";
import Services from "./Components/Services";
import { Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className="p-[3%]">
      <nav className="flex justify-center gap-20">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/show">Show</Link>
      </nav>

      {/* <hr className="h-[1.5px] w-full mt-5 color-black"/> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/show" element={<Show />}></Route>
      </Routes>
    </div>
  );
}

export default App;
