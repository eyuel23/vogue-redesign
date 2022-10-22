import Clothes from "./Clothes.js";
import Men from "../../Data/Mens.json";
import Women from "../../Data/Womens.json";
import classes from "./MainClothingSection.module.css";
import Popup from "./Popup.js";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pathactions } from "../../store/index.js";
import { useDispatch, useSelector } from "react-redux";

const MainClothingSection = (props) => {
  const dispatch = useDispatch();
  const pop = useSelector((state) => state.path.pop);
  const x = useSelector((state) => state.path.x);
  const location = useSelector((state) => state.path.location);
  const popupHandler = (e) => {
    dispatch(pathactions.changePop(true));
    dispatch(pathactions.changeX(e.target.id));
  };
  const pathName = useLocation().pathname.split("/")[1];

  useEffect(() => {
    dispatch(pathactions.chnageLocation(pathName));
  }, [pathName, dispatch]);
  const exitHandler = () => {
    dispatch(pathactions.changePop(false));
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
            ? Women.map((filter, index) => {
                return (
                  <Clothes
                    key={index}
                    onConfirm={popupHandler}
                    clothe={filter}
                  ></Clothes>
                );
              })
            : Men.map((filter, index) => {
                return (
                  <Clothes
                    key={index}
                    onConfirm={popupHandler}
                    clothe={filter}
                  ></Clothes>
                );
              })}
        </ul>
      </div>
    </>
  );
};
export default MainClothingSection;
