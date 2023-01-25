import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";

const HEADER = [
  { name: "دیگر آموزش ها ", href: "/*", title: "" },
  { name: " یادگیری لینوکس", href: "/*", title: "" },
  { name: "صفحه اصلی", href: "/", title: "" },

];

function Header() {
  return (
    <header className="navbar">
      <img src={logo} />
      <nav>
        <ul className="nav">
          {HEADER.map((item, index) => (
            <li key={index + item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? "active" : "link")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <input type="text" className="search" placeholder="جستجو" />
      <button className="register">ثبت نام</button>
      <button className="login">ورود</button>
    </header>
  );
}

export default Header;
