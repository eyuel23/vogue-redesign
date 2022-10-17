import classes from "./BlackButton.module.css";
const BlackButton = (props) => {
  return (
    <button onClick={props.onPop} className={classes.btn}>
      {props.children}
    </button>
  );
};
export default BlackButton;
