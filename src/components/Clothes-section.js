import classes from "./Clothes-section.module.css";
const ClothesSection = (props) => {
  return <div className={classes["clothes-section"]}>{props.children}</div>;
};
export default ClothesSection;
