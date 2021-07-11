// import App from 'next/app'
// import React from 'react'
// import EnglishMenu from './albums/_menu';
// import SpanishMenu from './albums/_menu';
// import Head from 'next/head'

// export default class MyApp extends App {
//     constructor() {
//       super();
//       this.state = {
//         menuState: 'hidden',
//       }
//       this.hideMenu = this.hideMenu.bind(this);
//       this.showMenu = this.showMenu.bind(this);
//       this.closeMenu = this.closeMenu.bind(this);
//     }

//     static async getInitialProps({ Component, router, ctx }) {
//       let pageProps = {}
//       let lang = router.route.split("/")[1];
//       if (lang !== 'en' && lang !== 'es') {
//         lang = 'en';
//       }
//       pageProps.lang = lang;

//       if (Component.getInitialProps) {
//         pageProps = await Component.getInitialProps(ctx)
//       }
   
//       return { pageProps }
//     }
    
//     showMenu() {
//       this.setState({
//         menuState: 'open',
//       })
//     }
//     closeMenu() {
//       this.setState({
//         menuState: 'closed',
//       })
//     }
//     hideMenu() {
//       this.setState({
//         menuState: 'hidden',
//       })
//     }

//     render() {
//       const { Component, pageProps } = this.props;
//       const {menuState} = this.state;
//       const Menu = (pageProps.lang === 'es') ? SpanishMenu:EnglishMenu;
//       return (
//         <>
//           <Head>
//             <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
//           </Head>
//           <Component {...pageProps} hideMenu={this.hideMenu} showMenu={this.showMenu} closeMenu={this.closeMenu} />
//           <Menu pose={menuState} menuState={menuState} hideMenu={this.hideMenu} showMenu={this.showMenu} closeMenu={this.closeMenu}/>      
//           <style jsx global>{`
//             html {
//               height: 100vh;
//               -webkit-overflow-scrolling: touch;
//               overflow: hidden;
//             }
//             * {
//               -webkit-overflow-scrolling: touch;
//             }
//             .page-transition-enter {
//               opacity: 0;
//             }
//             .page-transition-enter-active {
//               opacity: 1;
//               transition: opacity 300ms;
//             }
//             .page-transition-exit {
//               opacity: 1;
//             }
//             .page-transition-exit-active {
//               opacity: 0;
//               transition: opacity 300ms;
//             }
//             @import url('https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans&subset=latin-ext');
//             .intro-content {
//               /*position: absolute;
//               left:0;
//               top:0;
//               width: 100%;
//               height: 100vh;
//               padding: 60px;
//               box-sizing: border-box;
//               display: flex;
//               justify-content: center; */

//               position: absolute;
//               width: 100%;
//               height: 100vh;
//               top: 0;
//               left: 0;
//               overflow-y: scroll;
//               -webkit-overflow-scrolling: touch;
//               padding: 120px 263px 0 240px;
//               box-sizing: border-box;
//               opacity: 1;
//               background-color: #040404c2;
//             }

//             .intro-content-inner {
//               /* text-align: center; */
//               /* border: 3px solid #000; */
//               padding: 20px;
//               width: 100%;
//               height: 100vh;
//               box-sizing: border-box;
//               /* max-width: 760px; */
//               /* overflow-y: scroll; */
//               color: #FFF;
//               width: 477px;
//               padding-bottom: 240px;
//             }
//             .skip-video-link {
//               cursor: pointer;
//               float:right;
//             }
//             .vamos-link {
//               cursor: pointer;
//               float:right;
//             }
//             .close {
//               background-image: url(${require('../static/images/close.png')});
//               background-size: 32px 32px;
//               height: 32px;
//               width: 32px;
//               position: absolute;
//               right: 0.5em;
//               top: 0.5em;
//               cursor: pointer;
//             }
//             .close:hover {
//               filter: brightness(1.2);
//             }
//             .country-content-container {
//               position: absolute;
//               width: 100%;
//               height: 100vh;
//               top: 0;
//               left: 0;
//               overflow-y: scroll;
//               -webkit-overflow-scrolling: touch;
//               opacity: 0;
//             }
//             .country-content {
//               position: absolute;
//               top: 0;
//               width: 920px;
//               min-height: 100vh;
//               right: 0;
//               padding: 140px 20px 40px 320px;
//               background-color: #FFF;
//               box-shadow: 0 0 20px 10px rgb(0,0,0,0.4);
//               box-sizing: border-box;
//               border-left: 3px #000 solid;
//             }
//             .country-content-inner {
//               width: 477px;
//             }
//             .song-image-container {
//               position: absolute;
//               left: -320px;
//               width: 640px;
//               top: 100px;
//             }
//             .song-image {
//               width: 640px;
//             }
//             body {
//               min-width: 320px;
//               background: #ccae89;
//               font-family: 'Open Sans', sans-serif;
//               margin: 0;
//               padding: 0;
//               background-image: url(${require('../static/images/simple-old-paper-1-light.jpg')});
//               box-sizing: border-box;
//               width: 100%;
//               height: 100vh;
//               overflow: hidden;
//               position: absolute;
//               font-size: 16px;
//             }
//             h1, h2, h3, h4, h5, h6 {
//               font-family: 'Bree Serif', serif;
//               font-weight: normal;
//             }
//             .map {
//               display: flex;
//               justify-content: center;
//             }
//             .mapSvg {
//               height: 100vh;
//               width: auto;
//               overflow: auto;
//             }
//             .players {
//               display: flex;
//               margin-bottom: 2em;
//               flex-wrap: wrap;
//             }
//             .players-container {
//               display: flex;
//             }
//             .player {
//               margin: 0em 1em;
//               display: flex;
//               flex-direction: column;
//               justify-content: center;
//               align-items: center;
//               cursor: pointer;
//               opacity: 0.4;
//             }

//             .player:hover {
//               opacity: 1;
//             }

//             .selected--spotify .player-spotify,
//             .selected--apple .player-appleMusic,
//             .selected--deezer .player-deezer {
//               opacity: 1;
//             }

//             .music-players-container {
//               margin-top:20px;
//               width: 100%;
//             }
//             .pagination {
//               display: flex;
//               justify-content: space-evenly;
//               margin-top: 4em;
//               margin-bottom: 2em;
//             }

//             .pagination--item {
//               height: 64px;
//               width: 64px;
//               cursor: pointer;
//             }

//             .pagination--item-next {
//               background-image: url(${require('../static/images/arrow-next.png')});
//               align-self: flex-end;
//             }

//             .pagination--item-prev {
//               background-image: url(${require('../static/images/arrow-prev.png')});
//               align-self: flex-start;
//             }


//             .coming-soon-container {
//               position: absolute;
//               width: 100%;
//               height: 100vh;
//               top: 0;
//               left: 0;
//               opacity: 0;
//               background-color: rgba(0,0,0,0.4);
//               display: flex;
//               justify-content: center;
//               align-items: center;
//               overflow-y: scroll;
//               -webkit-overflow-scrolling: touch;
//             }
//             .coming-soon {
//               margin-top: 221px;
//               position:relative;
//               width: 320px;
//               height: 411px;
//               padding: 20px;
//               padding-top: 120px;
//               background-color: #FFF;
//               box-sizing: border-box;
//               border: 3px #000 solid;
//             }
//             .coming-soon-inner {
//               text-align: center;
//             }
//             .coming-soon .close {
//               top: -130px!important;
//               right: 17px!important;
//             }

//             .coming-soon .coming-soon-image {
//               position: absolute;
//               top: -100px;
//               left: 0;
//               width: 320px;
//            }

//             @media (max-width: 1240px) {
//               .country-content {
//                 padding-left: 240px;
//                 width: 740px;
//               }
//               .song-image {
//                 width: 480px;
//                 height: 480px;
//               }
//               .song-image-container {
//                 left: -240px;
//                 width: 480px;
//               }
//             }

//             @media (max-width: 980px) {
//               .country-content {
//                 left: 0;
//                 width: 100%;
//                 margin-top: 20em;
//                 margin-left: 0;
//                 border-left: none;
//                 border-top: 3px #000 solid;
//                 padding: 0;
//                 min-width: 100%;
//                 max-width: 100%;
//                 padding: 2em;
//                 box-sizing: border-box;
//                 padding-top: 8em;
//                 height: auto;
//                 display: flex;
//                 justify-content: center;
//               }
//               .song-image-container {
//                 position: absolute;
//                 height: 26em;
//                 top: -19em;
//                 display: flex;
//                 left: 0;
//                 justify-content: center;
//                 width: 100%;
//               }
//               .song-image {
//                 display:block;
//                 height: 420px;
//                 width: 420px;
//               }
//               .close {
//                 right: 0.5em;
//                 top: -18.5em;
//               }
//             }

//             @media (max-width: 420px) {
//               .country-content {
//                 margin-top: 250px;
//                 padding-top: 95px;
//               }
//               .song-image-container {
//                 top: -234px;
//                 height: 320px;
//               }
//               .song-image {
//                 display:block;
//                 height: 320px;
//                 width: 320px;
//               }
//               .close {
//                 top: -234px;
//               }
//               .intro-content {
//                 display: flex;
//                 justify-content: center;
//                 padding: 40px 20px 0 20px;
//               }
//               .intro-content-inner {
//                 padding: 10px;
//               }
//               .coming-soon {
//                 border-right: none;
//                 border-left: none;
//                 border-bottom: none;
//                 width: 100%;
//               }
//             }
//           `}</style>
//         </>
//       )
//     }
//   }

import App from 'next/app'
import "../styles/globals.css";
import Layout from "../hoc/Layout/Layout";
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";

export default class MyApp extends App {

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    let lang = router.route.split("/")[1];
    if (lang !== 'en' && lang !== 'sp') {
      lang = 'en';
    }
    pageProps.lang = lang;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
 
    return { pageProps }
  }

render() { 
  const { Component, pageProps } = this.props;
return (
  <>
  <Head>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />
  </Head>
  <Component  />
  {/* <Component {...pageProps} /> */}
  <Layout />

<style jsx global>{`
            html {
              height: 100vh;
              -webkit-overflow-scrolling: touch;
              overflow: hidden;
            }
            *::-webkit-scrollbar {
              display: none;
            }
            * {
              -webkit-overflow-scrolling: touch;
            }
            .page-transition-enter {
              opacity: 0;
            }
            .page-transition-enter-active {
              opacity: 1;
              transition: opacity 300ms;
            }
            .page-transition-exit {
              opacity: 1;
            }
            .page-transition-exit-active {
              opacity: 0;
              transition: opacity 300ms;
            }
          
            .intro-content {
              /*position: absolute;
              left:0;
              top:0;
              width: 100%;
              height: 100vh;
              padding: 60px;
              box-sizing: border-box;
              display: flex;
              justify-content: center; */
              
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              padding: 120px 263px 0 240px;
              box-sizing: border-box;
              opacity: 1;
              background-color: #040404c2;
            }

            .intro-content-inner {
              /* text-align: center; */
              /* border: 3px solid #000; */
              padding: 20px;
              width: 100%;
              height: 100vh;
              box-sizing: border-box;
              /* max-width: 760px; */
              /* overflow-y: scroll; */
              color: #FFF;
              width: 477px;
              padding-bottom: 240px;
            }
            .skip-video-link {
              cursor: pointer;
              float:right;
            }
            .vamos-link {
              cursor: pointer;
              float:right;
            }
            .close {
              background-image: url(${require('../static/images/close.png')});
              background-size: 32px 32px;
              height: 32px;
              width: 32px;
              position: absolute;
              right: 0.5em;
              top: 0.5em;
              cursor: pointer;
            }
            .close:hover {
              filter: brightness(1.2);
            }
            .country-content-container {
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              opacity: 0;
            }
            .country-content {
              position: absolute;
              top: 0;
              width: 920px;
              min-height: 100vh;
              right: 0;
              padding: 140px 20px 40px 320px;
              background-color: #FFF;
              box-shadow: 0 0 20px 10px rgb(0,0,0,0.4);
              box-sizing: border-box;
              border-left: 3px #000 solid;
            }
            .country-content-inner {
              width: 477px;
            }
            .song-image-container {
              position: absolute;
              left: -320px;
              width: 640px;
              top: 100px;
            }
            .song-image {
              width: 640px;
            }
            body {
              min-width: 320px;
              background: #ccae89;
              font-family: "Walter Turncoat", cursive;
              margin: 0;
              padding: 0;
              background-image: url(${require('../static/images/simple-old-paper-1-light.jpg')});
              box-sizing: border-box;
              width: 100%;
              height: 100vh;
              overflow: hidden;
              position: absolute;
              font-size: 16px;
            }
            h1, h2, h3, h4, h5, h6 {
              font-family: "Walter Turncoat", cursive;
              font-weight: normal;
            }
            .map {
              display: flex;
              justify-content: center;
            }
            .mapSvg {
              height: 100vh;
              width: auto;
              overflow: auto;
            }
            .players {
              display: flex;
              margin-bottom: 2em;
              flex-wrap: wrap;
            }
            .players-container {
              display: flex;
            }
            .player {
              margin: 0em 1em;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              opacity: 0.4;
            }

            .player:hover {
              opacity: 1;
            }

            .selected--spotify .player-spotify,
            .selected--apple .player-appleMusic,
            .selected--deezer .player-deezer {
              opacity: 1;
            }

            .music-players-container {
              margin-top:20px;
              width: 100%;
            }
            .pagination {
              display: flex;
              justify-content: space-evenly;
              margin-top: 4em;
              margin-bottom: 2em;
            }

            .pagination--item {
              height: 64px;
              width: 64px;
              cursor: pointer;
            }

            .pagination--item-next {
              background-image: url(${require('../static/images/arrow-next.png')});
              align-self: flex-end;
            }

            .pagination--item-prev {
              background-image: url(${require('../static/images/arrow-prev.png')});
              align-self: flex-start;
            }
            .coming-soon-container {
              position: absolute;
              width: 100%;
              height: 100vh;
              top: 0;
              left: 0;
              opacity: 0;
              background-color: rgba(0,0,0,0.4);
              display: flex;
              justify-content: center;
              align-items: center;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
            }
            .coming-soon {
              margin-top: 221px;
              position:relative;
              width: 320px;
              height: 411px;
              padding: 20px;
              padding-top: 120px;
              background-color: #FFF;
              box-sizing: border-box;
              border: 3px #000 solid;
            }
            .coming-soon-inner {
              text-align: center;
            }
            .coming-soon .close {
              top: -130px!important;
              right: 17px!important;
            }

            .coming-soon .coming-soon-image {
              position: absolute;
              top: -100px;
              left: 0;
              width: 320px;
           }

            @media (max-width: 1240px) {
              .country-content {
                padding-left: 240px;
                width: 740px;
              }
              .song-image {
                width: 480px;
                height: 480px;
              }
              .song-image-container {
                left: -240px;
                width: 480px;
              }
            }

            @media (max-width: 980px) {
              .country-content {
                left: 0;
                width: 100%;
                margin-top: 20em;
                margin-left: 0;
                border-left: none;
                border-top: 3px #000 solid;
                padding: 0;
                min-width: 100%;
                max-width: 100%;
                padding: 2em;
                box-sizing: border-box;
                padding-top: 8em;
                height: auto;
                display: flex;
                justify-content: center;
              }
              .song-image-container {
                position: absolute;
                height: 26em;
                top: -19em;
                display: flex;
                left: 0;
                justify-content: center;
                width: 100%;
              }
              .song-image {
                display:block;
                height: 420px;
                width: 420px;
              }
              .close {
                right: 0.5em;
                top: -18.5em;
              }
            }

            @media (max-width: 420px) {
              .country-content {
                margin-top: 250px;
                padding-top: 95px;
              }
              .song-image-container {
                top: -234px;
                height: 320px;
              }
              .song-image {
                display:block;
                height: 320px;
                width: 320px;
              }
              .close {
                top: -234px;
              }
              .intro-content {
                display: flex;
                justify-content: center;
                padding: 40px 20px 0 20px;
              }
              .intro-content-inner {
                padding: 10px;
              }
              .coming-soon {
                border-right: none;
                border-left: none;
                border-bottom: none;
                width: 100%;
              }
            }
          `}</style>
          </>
);
}
}

// import "../styles/globals.css";
// import Layout from "../hoc/Layout/Layout";
// import "bootstrap/dist/css/bootstrap.min.css";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Component {...pageProps} />
//       <Layout />
//     </>
//   );
// }

// export default MyApp;