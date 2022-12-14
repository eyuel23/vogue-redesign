import classes from "./PaymentMethod.module.css";
import Card from "../images/credit-card.svg";
import Paypal from "../images/Paypal.svg";
import { Link } from "react-router-dom";
const Payment = () => {
  return (
    <>
      <div className={classes.method}>
        <h1 className={classes.heading}>Payment Method</h1>
        <div className={classes.card}>
          <input
            className={classes.input}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label className={classes.input} htmlFor="html">
            <img src={Card} alt="card" />
          </label>
           
          <input
            className={classes.input}
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          />
           
          <label className={classes.input} htmlFor="css">
            <img src={Paypal} alt="card" />
          </label>
        </div>
        <div className={classes.details}>
          <h1>Payment Details</h1>
          <input
            className={classes.inputpay}
            placeholder="Enter Name on Card"
          />
          <input className={classes.inputpay} placeholder="Card Number" />
          <div>
            <input className={classes.inputpay2} placeholder="Expiration" />
            <input className={classes.inputpay2} placeholder="CVV " />
          </div>
        </div>
        <h1 className={classes.heading2}>
          By Clicking “Confirm Payment” I agree to the companies term of
          services
        </h1>
        <div className={classes.btn}>
          <button className={classes.btnwhite}>Back</button>
          <button className={classes.btnblack}>
            <Link className={classes.btnblack} to="/Confirm">
              {" "}
              Confirm Payment: $14.88{" "}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default Payment;
