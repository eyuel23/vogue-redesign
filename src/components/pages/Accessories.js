import Sidebar from "../Sidebar.js";
import MainClothingSection from "../MainClothingSection";
import ClothesSection from "../Clothes-section";
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
