import Clothes from "./Clothes.js";
import Men from "../Data/Mens.json";
import Women from "../Data/Womens.json";
import classes from "./MainClothingSection.module.css";
import Popup from "./Popup.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MainClothingSection = (props) => {
  const [pop, setPop] = useState(false);
  const [x, setX] = useState("");
  const popupHandler = (e) => {
    setPop(true);
    setX(e.target.id);
  };
  const pathName = useLocation().pathname.split("/")[1];
  let [location, setLocation] = useState(pathName);

  useEffect(() => {
    setLocation(pathName);
  }, [pathName]);
  const exitHandler = () => {
    setPop(false);
  };
  return (
    <>
      <div>
        {pop && <Popup id={x} onExit={exitHandler} />}
        <h1 className={classes["heading-collection"]}>
          {" "}
          New Winter Collection
        </h1>
        <ul className={classes["clothes-list"]}>
          {location === "Women"
            ? Women.map((filter) => {
                return (
                  <Clothes onConfirm={popupHandler} clothe={filter}></Clothes>
                );
              })
            : Men.map((filter) => {
                return (
                  <Clothes onConfirm={popupHandler} clothe={filter}></Clothes>
                );
              })}
        </ul>
      </div>
    </>
  );
};
export default MainClothingSection;
