import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h2>İş takip</h2>
      <div>
        <NavLink to="/">İş Listesi</NavLink>
        <NavLink to="add-job">İş Ekle</NavLink>
      </div>
    </header>
  );
};

export default Header;
