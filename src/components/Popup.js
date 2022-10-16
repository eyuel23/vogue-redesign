import Dropdown from "./DropdownSize";
import classes from "./Popup.module.css";

const Popup = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onExit} />
      <div className={classes.modal}>
        {props.id > 0 ? (
          <img
            className={classes.image}
            alt="popup"
            src={require(`../images/Mens/second-${props.id}.jpeg`)}
          />
        ) : (
          <img
            className={classes.image}
            alt="popup"
            src={require(`../images/Womens/second-${props.id}.jpeg`)}
          />
        )}
        <Dropdown />
        <button onClick={props.onExit} className={classes.btn}>
          Add to bag
        </button>
      </div>
    </div>
  );
};

export default Popup;
