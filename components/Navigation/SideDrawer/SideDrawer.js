import Image from "next/image";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import closeCross from "../../../static/images/close.png";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.closeCross} onClick={props.closed}>
          <Image src={closeCross} alt="closeCross" width="40px" height="40px" />
        </div>
        <nav>
          <NavigationItems clicked={props.closed} />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
