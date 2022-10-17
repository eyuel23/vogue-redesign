import classes from "./PaymentMethod.module.css";
const Payment = () => {
  return (
    <>
      <div className={classes.method}>
        <h1 className={classes.heading}>Payment Method</h1>
        <div>
          <input
            className={classes.input}
            type="radio"
            id="html"
            name="fav_language"
            value="HTML"
          />
          <label className={classes.input} for="html">
            HTML
          </label>
           
          <input
            className={classes.input}
            type="radio"
            id="css"
            name="fav_language"
            value="CSS"
          />
           
          <label className={classes.input} for="css">
            CSS
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
            {" "}
            Confirm Payment: $14.88{" "}
          </button>
        </div>
      </div>
    </>
  );
};
export default Payment;
