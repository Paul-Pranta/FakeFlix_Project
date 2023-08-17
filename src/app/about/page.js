

import React from "react";

import Mainsection from "../components/Mainsection";
import Mainsection2 from "../components/Mainsection2";
import styles from "@/app/styles/mainsection.module.css"

const About = () => { 

  return (
    <div>
          <Mainsection title={"Know More About Us"} imgUrl={"/about1.svg"} />
          
          <Mainsection2 title={"More Shows Coming Every Week"} imgUrl={"/movie-night.svg"} />
         
          <Mainsection title={"Enjoy Shows With Friends And Family"} imgUrl={"/movie-day.svg"}/>
    </div>
    )



}

export default About