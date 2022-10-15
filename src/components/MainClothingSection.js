import Clothes from "./Clothes.js";
import Mens from "../Data/Mens.json";
import classes from "./MainClothingSection.module.css";
const MainClothingSection = (props) => {
  return (
    <>
      <div>
        <h1 className={classes["heading-collection"]}>
          {" "}
          New Winter Collection
        </h1>
        <ul className={classes["clothes-list"]}>
          {Mens.map((filter) => {
            return <Clothes clothe={filter}></Clothes>;
          })}
        </ul>
      </div>
    </>
  );
};
export default MainClothingSection;
