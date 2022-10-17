import heart from "../../images/heart.svg";
import classes from "./Navigation.module.css";
const Favorite = () => {
  return (
    <li className={classes.navigation__item}>
      <img src={heart} alt=""></img>
    </li>
  );
};
export default Favorite;
