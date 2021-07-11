import Image from "next/image";
import Link from "next/link";
import Modal from "../UI/Modal/Modal";
import spanish from "../../static/images/language-es.png";
import english from "../../static/images/language-en.png";
import classes from "./LanguageSelector.module.css";

const LanguageSelector = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className={classes.LangSel}>
        <Link href="/albums/la-onda-de-juan-pablo/sp">
          <Image src={spanish} alt="spanish" width="fill-content" height="auto" onClick={props.onClose}/>
        </Link>
        <Link href="/albums/la-onda-de-juan-pablo/en">
          <Image src={english} alt="english" width="fill-content" height="auto" onClick={props.onClose}/>
        </Link>
      </div>
      {/* <div className={classes.button}>
        <button onClick={props.onClose}>GO BACK!</button>
      </div> */}
    </Modal>
  );
};

export default LanguageSelector;
