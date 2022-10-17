import search from "../../images/search.svg";
import classes from "./Navigation.module.css";
const Search = () => {
  return (
    <li className={classes.navigation__item}>
      <img src={search} alt=""></img>
    </li>
  );
};
export default Search;
