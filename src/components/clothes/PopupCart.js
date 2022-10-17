import BlackButton from "../buttons/BlackButton";
import classes from "./PopupCart.module.css";
import { Link } from "react-router-dom";
const PopupCart = () => {
  return (
    <div className={classes.box}>
      <h1 className={classes.heading}>Your Cart</h1>
      <div className={classes.checkout}>
        <div className={classes.total}>
          <h1> Total </h1>
          <h1> $0.00 </h1>
        </div>
        <BlackButton>
          <Link to="/Checkout" className={classes.link}>
            Check Out
          </Link>
        </BlackButton>
      </div>
    </div>
  );
};
export default PopupCart;
