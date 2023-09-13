import React from "react";
import style from "./style.module.css";

const Hero = ({ ...props }) => (
  <div className={style.banner}>
    <div className={style.banner_content}>
      <div className={style.banner_content__title}>
        <p className={style.banner_title__text}>Joseph Villalba</p>
      </div>
      <div className={style.banner_content__subtitle}>
        <h1 className={style.banner_subtitle__text}>Developer Full Stack.</h1>
      </div>
    </div>
  </div>
);

export default Hero;
