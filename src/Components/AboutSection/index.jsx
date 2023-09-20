import React from "react"
import style from "./style.module.css";
import JosephImg from "../../assets/joseph.svg"; 

const AboutSection = () => {

    return (
        <div className={style.about}>
            <div className={style.about_content}>
                <div className={style.about_wrapper}>
                    <div className={style.about_location}>
                        <span className={style.about_location_text}>
                            Barranquilla, colombia.
                        </span>
                    </div>
                    <div className={style.about_date}>
                        <span className={style.about_date__text}>
                            August 8, 1996.
                        </span>
                        <div className={style.about_image}>
                            <img src={JosephImg} alt="joseph.svg" />
                        </div>
                    </div>
                </div>
                <div className={style.about_description}>
                    <h2 className={style.about_description__title}>
                        About Me.
                    </h2>
                    <p className={style.about_description__text}>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ut dolores quidem ab aut
                        sunt laboriosam obcaecati quasi est ipsam
                        voluptate doloremque necessitatibus magnam,
                        inventore omnis nulla fugit! Tempora, sit?
                        Quisquam!
                    </p>
                </div>
            </div>
        </div>
    );
}


export default AboutSection; 