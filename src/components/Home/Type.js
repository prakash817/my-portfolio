import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Deep Learning Engineer",
          "MERN Stack Developer",
          "DataStructure and Algoritham Problem Solver",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
          delay: 3000
      }}
    />
  );
}

export default Type;
