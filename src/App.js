import React from "react";

import Navbar from "./components/Navbar"
import Profile from "./components/Profile";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <div className="top-container">
        <Profile />
      </div>
      <div className="second-container">
        <Navbar />
        <div className="about">
        <About />
        </div>
        <div>
          <Skill />
        </div>
        <div>
          <Project />
        </div>
        <div>
          <Resume />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}