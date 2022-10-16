import Sidebar from "../Sidebar.js";
import MainClothingSection from "../MainClothingSection";
import ClothesSection from "../Clothes-section";
import classes from "./Men.module.css";
const Men = () => {
  return (
    <ClothesSection>
      <div className={classes["section-2"]}>
        <Sidebar />
        <MainClothingSection />
      </div>
    </ClothesSection>
  );
};
export default Men;
