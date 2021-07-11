import ReactDOM from "react-dom";
import { useEffect, useRef, useState, Fragment } from "react";
// import classes from "./Modal.module.css";
import BackdropModal from "./BackdropModal";
import ModalOverlay from "./ModalOverlay";

function Modal(props) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <BackdropModal onClose={props.onClose} />,
          document.getElementById("overlays")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,
          document.getElementById("overlays")
        )}
      </Fragment>
    );
  } else {
    return null;
  }
}

export default Modal;
