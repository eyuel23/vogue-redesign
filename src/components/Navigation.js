import classes from "./Navigation.module.css";
import search from "../images/search.svg";
import heart from "../images/heart.svg";
import cart from "../images/cart.svg";
import profile from "../images/profile.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Navigation = () => {
  const pathName = useLocation().pathname;
  let [location, setLocation] = useState(pathName);

  useEffect(() => {
    setLocation(pathName);
  }, [pathName]);
  return (
    <>
      <div
        className={
          location === "/"
            ? classes.navigation
            : `${classes.navigation} ${classes["navigation-pages"]}`
        }
      >
        <div className={classes.logo}>
          <Link to={"/"} className={classes["logo-navigation"]}>
            Vogue
          </Link>
        </div>
        <nav className={classes.navigation__nav}>
          <ul className={classes.navigation__list}>
            <li className={classes.navigation__item}>
              <Link to={"/Women"} className={classes.navigation__link}>
                Women
              </Link>
            </li>
            <li className={classes.navigation__item}>
              <Link to={"/Men"} className={classes.navigation__link}>
                Men
              </Link>
            </li>
            <li className={classes.navigation__item}>
              <Link to={"/Accessories"} className={classes.navigation__link}>
                Accesories
              </Link>
            </li>
            <li className={classes.navigation__item}>
              <Link to={"/Shoes"} className={classes.navigation__link}>
                Shoes
              </Link>
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
              <h1 className={classes.cartNo}>1</h1>
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
