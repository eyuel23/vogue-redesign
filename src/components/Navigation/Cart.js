import { Link } from "react-router-dom";
import cart from "../../images/cart.svg";
import classes from "./Navigation.module.css";
const Cart = (props) => {
  return (
    <li onClick={props.onConfirm} className={classes.navigation__item}>
      <Link>
        <img src={cart} alt=""></img>
      </Link>
    </li>
  );
};
export default Cart;
