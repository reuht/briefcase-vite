import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={style.header}>
    <div className={style.header__content_logo}>
      <span className={style.header__content_logo_text}>Joseph</span>
    </div>
    <div className={style.header__content_navegation}>
      <nav className={style.content__navegation_nav}>
        <ul className={style.navegation__list}>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/home">
              Quien soy
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/projet">
              Project
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/skills">
              Habilidades
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/blog">
              blog
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
