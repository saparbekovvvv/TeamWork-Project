import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div id="Header">
      <div className="container">
        <div className="flex ">
          <NavLink className="logo" to={"/"}>
            <h1>BooksShop</h1>
          </NavLink>
          <div className="links">
            <NavLink to={"/categories"}>Categories</NavLink>
            <NavLink to={"/recent"}>Recent</NavLink>
            <NavLink to={"/books"}>Books</NavLink>
            <NavLink to={"/aboutUs"}>AboutUs</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
