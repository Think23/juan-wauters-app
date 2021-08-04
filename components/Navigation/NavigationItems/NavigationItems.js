import { useState } from "react";
import classes from "./NavigationItems.module.css";
import Link from "next/link";
// import Image from "next/image";
// import introducingJuanPablo from "../../../static/images/albums/introducing-juan-pablo/introducing-juan-pablo-text.svg";
// import laOndaDeJuanPablo from "../../../static/images/albums/who-me/titulo-who-me-02.svg";
import { SocialIcon } from "react-social-icons";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";

function NavigationItems(props) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <LanguageSelector onClose={hideModalHandler} />}
      <ul className={classes.NavigationItems} onClick={props.clicked}>
        <div className={classes.list}>
          <Link href="/">
            <li onClick={hideModalHandler}>HOME</li>
          </Link>
          <Link href="/albums">
            <li onClick={hideModalHandler}>ALBUMS</li>
          </Link>
          <div className={classes.subList}>
            <Link href="/albums/real-life-situations">
              <li onClick={hideModalHandler}>♫ REAL LIFE SITUATIONS</li>
            </Link>
            <Link href="/albums/introducing-juan-pablo">
              <li onClick={hideModalHandler}>
              ♫ INTRODUCING JUAN PABLO
                {/* <Image src={introducingJuanPablo} alt="introducing-juan-pablo" layout="fill" /> */}
              </li>
            </Link>
            <li onClick={showModalHandler}>
            ♫ LA ONDA DE JUAN PABLO
              {/* <Image src={laOndaDeJuanPablo} alt="la-onda-de-juan-pablo" layout="fill" /> */}
            </li>
            <Link href="/albums/who-me">
              <li onClick={hideModalHandler}>♫ WHO ME?</li>
            </Link>
            <Link href="/albums/NAP">
              <li onClick={hideModalHandler}>♫ NORTH AMERICAN POETRY</li>
            </Link>
          </div>
          <a
            href="https://capturedtracks.com/artist/juan-wauters/"
            target="_blank"
          >
            <li>STORE</li>
          </a>
          <a href="/tour-dates">
            <li>TOUR DATES</li>
          </a>
          <Link href="/about">
            <li>ABOUT - CONTACT</li>
          </Link>
        </div>
      </ul>
      <div className={classes.SocialIcons} >
        <ul>
          <li>
            <SocialIcon
              className={classes.SocialIcon}
              url="https://www.instagram.com/juanwautersofficial"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              className={classes.SocialIcon}
              url="https://www.facebook.com/juanwauters/"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              className={classes.SocialIcon}
              url="https://open.spotify.com/artist/7CKkZZW3XtnPmqlwaElmoV"
              target="_blank"
            />
          </li>
          <li>
            <SocialIcon
              className={classes.SocialIcon}
              url="https://itunes.apple.com/us/artist/juan-wauters/619568264"
              target="_blank"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavigationItems;
