import Button from "../buttons/Button";
import Header from "../Header.js";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <Header>
      <div className={classes.collection}>
        <h1 className={classes["heading-collection"]}>
          NEW WINTER <br /> COLLECTION 2022
        </h1>
        <Button>VIEW COLLECTION</Button>
      </div>
    </Header>
  );
};
export default Home;
