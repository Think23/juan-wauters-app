import classes from "./Modal.module.css";

const BackdropModal = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

export default BackdropModal;