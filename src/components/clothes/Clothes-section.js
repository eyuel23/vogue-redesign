import classes from "./Clothes-section.module.css";
const ClothesSection = (props) => {
  return (
    <section className={classes["clothes-section"]}>{props.children}</section>
  );
};
export default ClothesSection;
