import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdSearch, MdShoppingCart, MdAccountCircle } from "react-icons/md"; // Import icons from react-icons

import logo from "../../../images/logo.png";

const options = {
  burgerColor: "#F6850E",
  burgerColorHover: "white",
  logo,
  logoWidth: "20vmax",
  navColor1: "rgba(0,0,0,0.4)",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#fae9e5",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  searchIconColor: "#fae9e5",
  cartIconColor: "#fae9e5",
  profileIconColor: "#fae9e5",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  profileIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIcon: true, // Enable search icon
  SearchIconElement: MdSearch, // Use MdSearch icon for search icon
  cartIcon: true, // Enable cart icon
  CartIconElement: MdShoppingCart, // Use MdShoppingCart icon for cart icon
  profileIcon: true, // Enable profile icon
  ProfileIconElement: MdAccountCircle, // Use MdAccountCircle icon for profile icon
};


const Header = () => {
  return (
    <ReactNavbar
      {...options}
    />
  );
};

export default Header;
