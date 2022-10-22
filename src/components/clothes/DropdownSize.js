import classes from "./DropdownSize.module.css";
const Dropdown = () => {
  return (
    <>
      <div className={classes.dropdown}>
        <label className={classes.label} htmlFor="Size">
          Select Size:
        </label>

        <select className={classes.select} name="Size" id="Size">
          <option className={classes.options} value="extralarge">
            ExtraLarge
          </option>
          <option className={classes.options} value="large">
            Large
          </option>
          <option className={classes.options} value="medium">
            Medium
          </option>
          <option className={classes.options} value="small">
            Small
          </option>
          <option className={classes.options} value="extrasmall">
            ExtraSmall
          </option>
        </select>
      </div>
    </>
  );
};
export default Dropdown;
