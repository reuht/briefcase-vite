import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const CardProject = ({ image, title, summary, slug }) => {
    return (
        <section className={style.card}>
            <div className={style.card_content__image}>
                <img className={style.card_image} src={image} alt="image_project.jpg" />
            </div>
            <header className={style.card_header}>
                <h2 className={style.card_header__title}>
                    {title}
                </h2>
                <p className={style.card_summary__text}>
                    {summary}
                </p>
            </header>
            <footer className={style.card_footer}>
                <button className={style.card_footer__button}>
                    See more...
                </button>
            </footer>
        </section>
    );
}


export default CardProject; 