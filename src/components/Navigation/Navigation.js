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
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    setLocation(pathName);
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
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
        <button onClick={toggleHandler} className={classes.navbtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className={classes.navsvg}
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {(toggleMenu || screenWidth > 500) && (
          <>
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
                  <Link
                    to={"/Accessories"}
                    className={classes.navigation__link}
                  >
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
          </>
        )}
      </div>
    </>
  );
};
export default Navigation;
