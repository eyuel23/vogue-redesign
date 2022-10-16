import Sidebar from "../Sidebar.js";
import MainClothingSection from "../MainClothingSection";
import ClothesSection from "../Clothes-section";
import classes from "./Shoes.module.css";
const Shoes = () => {
  return (
    <ClothesSection>
      <div className={classes["section-2"]}>
        <Sidebar />
        <MainClothingSection />
      </div>
    </ClothesSection>
  );
};

export default Shoes;
