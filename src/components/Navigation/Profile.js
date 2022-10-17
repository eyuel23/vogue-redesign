import profile from "../../images/profile.svg";
import classes from "./Navigation.module.css";

const Profile = () => {
  return (
    <li className={classes.navigation__item}>
      <img src={profile} alt=""></img>
    </li>
  );
};
export default Profile;
