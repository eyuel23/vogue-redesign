import classes from "./OrderConfirm.module.css";
const OrderConfirm = () => {
  return (
    <div className={classes.confirm}>
      <h1 className={classes.complete}> Your Order Complete!!</h1>
      <h1 className={classes.thank}> Thank You For Shopping </h1>
    </div>
  );
};
export default OrderConfirm;
