import FilterList from "./FilterList.js";
import classes from "./Sidebar.module.css";

const SidebarContent = [
  "View All",
  "T-shirts & Tanks",
  "Pants",
  "Shirts",
  "Cardigans & Sweaters",
  "Hoodies & Sweatshirts",
  "Suits & Blazers",
  "Jackets & Coats",
  "Jeans",
  "Accessories",
  "Shoes",
  "Shorts",
  " Swimwear",
  "Sportswear",
  "Underwear",
  "Basics",
  "Sleepwear & Loungewear",
  "Socks",
  "Premium Selection",
  "Care products",
  "Dog clothes & Accessories",
  "Gifting",
  "Gift Cards",
  "Sustainability",
  "Our products",
  "H&M Take Care",
  "Learn More",
];

const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <h1 className={classes.heading}>Shop by Product</h1>
        <ul>
          {SidebarContent.map((filter, index) => {
            return <FilterList key={index}>{filter}</FilterList>;
          })}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
