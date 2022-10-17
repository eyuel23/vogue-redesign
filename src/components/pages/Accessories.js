import Sidebar from "../Navigation/Sidebar.js";
import MainClothingSection from "../clothes/MainClothingSection";
import ClothesSection from "../clothes/Clothes-section";
import classes from "./Accessories.module.css";
const Accessories = () => {
  return (
    <ClothesSection>
      <div className={classes["section-2"]}>
        <Sidebar />
        <MainClothingSection />
      </div>
    </ClothesSection>
  );
};
export default Accessories;
