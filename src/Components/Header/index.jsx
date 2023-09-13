import React from "react";
import style from "./style.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={style.header}>
    <div className={style.header__content_logo}>
      <span>Logo</span>
    </div>
    <div className={style.header__content_navegation}>
      <nav className={style.content__navegation_nav}>
        <ul className={style.navegation__list}>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/home">
              Home
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/about">
              About
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/blog">
              Blog
            </a>
          </li>
          <li className={style.navegation__list_item}>
            <a className={style.navegation__list_anchor} href="/projects">
              Projects
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
