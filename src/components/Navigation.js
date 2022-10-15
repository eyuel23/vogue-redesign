import classes from "./Navigation.module.css";
import search from "../images/search.svg";
import heart from "../images/heart.svg";
import cart from "../images/cart.svg";
import profile from "../images/profile.svg";
import { useEffect, useState } from "react";
const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handelScroll = () => {
      setSticky(window.scrollY > 940);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.addEventListener("scroll", handelScroll);
  });

  return (
    <>
      <div
        className={
          sticky ? classes.navigation && classes.sticky : classes["navigation"]
        }
      >
        <div className={classes.logo}>
          <h1 className={classes["logo-navigation"]}>Vogue</h1>
        </div>
        <nav className={classes.navigation__nav}>
          <ul className={classes.navigation__list}>
            <li className={classes.navigation__item}>
              <h1 className={classes.navigation__link}>Women</h1>
            </li>
            <li className={classes.navigation__item}>
              <h1 className={classes.navigation__link}>Men</h1>
            </li>
            <li className={classes.navigation__item}>
              <h1 className={classes.navigation__link}>Accesories</h1>
            </li>
            <li className={classes.navigation__item}>
              <h1 className={classes.navigation__link}>Shoes</h1>
            </li>
          </ul>
        </nav>
        <nav className={classes.navigation__nav}>
          <ul className={classes.navigation__list}>
            <li className={classes.navigation__item}>
              <img src={search} alt=""></img>
            </li>
            <li className={classes.navigation__item}>
              <img src={heart} alt=""></img>
            </li>
            <li className={classes.navigation__item}>
              <img src={cart} alt=""></img>
            </li>
            <li className={classes.navigation__item}>
              <img src={profile} alt=""></img>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navigation;
