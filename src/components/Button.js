import { Link } from "react-router-dom";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <button className={classes["button-collection"]}>
      <Link to="/Men" className={classes["button-link"]}>
        {props.children}
      </Link>
    </button>
  );
};
export default Button;
