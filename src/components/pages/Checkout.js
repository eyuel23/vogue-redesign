import Payment from "../PaymentMethod";
import classes from "./Checkout.module.css";
const Checkout = (props) => {
  return (
    <>
      <div className={classes.checkout}>
        <h1 className={classes.heading}>Check Out</h1>
        <Payment />
      </div>
    </>
  );
};
export default Checkout;
