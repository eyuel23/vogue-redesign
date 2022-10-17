import classes from "./FilterList.module.css";
const FilterList = (props) => {
  return <li className={classes.filterlist}>{props.children}</li>;
};
export default FilterList;
