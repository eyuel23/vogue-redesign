import classes from "./Navigation.module.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Favorite from "./Favourite";
import Cart from "./Cart";
import Profile from "./Profile";
const Navigation = (props) => {
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
            <Search />
            <Favorite />
            <Cart onConfirm={props.onCart} />
            <Profile />
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Navigation;
