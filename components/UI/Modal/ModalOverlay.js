import Image from "next/image";
import closeCross from "../../../static/images/close.png";
import classes from './Modal.module.css';

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div style={{position:'fixed', top:'0', right:'2px', cursor:'pointer'}} className={classes.closeCross}>
        <Image src={closeCross} alt="closeCross" width="40px" height="40px" onClick={props.onClick} />
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;