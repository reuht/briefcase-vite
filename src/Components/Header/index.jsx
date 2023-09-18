import React from "react";
import style from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

const Header = () => (
  <>
  <header className={style.header}>
    <div className={style.header_content}>
      <div className={style.header__content_logo}>
        <span className={style.header__content_logo_text}>Logo</span>
      </div>
      <div className={style.header__content_navegation}>
        <nav className={style.content__navegation_nav}>
          <ul className={style.navegation__list}>
            <li className={style.navegation__list_item}>
              <Link className={style.navegation__list_anchor} to="/">
               who I am ?
              </Link>
            </li>
            <li className={style.navegation__list_item}>
              <Link className={style.navegation__list_anchor} to="/project">
                Project
              </Link>
            </li>
            <li className={style.navegation__list_item}>
              <Link className={style.navegation__list_anchor} to="/skills">
                Skills
              </Link>
            </li>
            <li className={style.navegation__list_item}>
              <Link className={style.navegation__list_anchor} to="/blog">
                blogs
              </Link>
            </li>
            <li className={style.navegation__list_item}>
              <Link className={style.navegation__list_anchor} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <Outlet></Outlet>
  </>
);

export default Header;
