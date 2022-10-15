import classes from "./Clothes.module.css";
const Clothes = (props) => {
  const clothe = props.clothe;
  return (
    <li>
      <img
        src={require(`../${clothe.url}.jpeg`)}
        alt="images"
        className={classes.clothes}
      />
      <h1 className={classes["heading-collection"]}>
        Seemless Puffer Jacket
        <br />
        59.99$
        <br />
        New arrival
      </h1>
    </li>
  );
};
export default Clothes;
