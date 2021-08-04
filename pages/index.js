// import React, { Component } from 'react';

// class Index extends Component {
//   render() {
//     return (
//       <div className="page">
//         <div className="content">
//             <div className="header-container">
//                 <div className="header-container-inner">
//                     <picture>
//                       <source srcSet={require('../static/images/juan-wauters.png?webp')} type="image/webp" />
//                       <source srcSet={require('../static/images/juan-wauters.png')} type="image/jpeg" />
//                       <img src={require('../static/images/juan-wauters.png')} />
//                     </picture>
//                 </div>
//             </div>
//             {/* <div className="language-selector">
//                 <a href="/es/albums">
//                   <picture className="language-image">
//                     <source srcSet={require('../static/images/language-es.png?webp')} type="image/webp" />
//                     <source srcSet={require('../static/images/language-es.png')} type="image/jpeg" />
//                     <img src={require('../static/images/language-es.png')} />
//                   </picture>
//                 </a>
//                 <a href="/albums/">
//                   <picture className="language-image">
//                     <source srcSet={require('../static/images/language-en.png?webp')} type="image/webp" />
//                     <source srcSet={require('../static/images/language-en.png')} type="image/jpeg" />
//                     <img src={require('../static/images/language-en.png')} />
//                   </picture>
//                 </a>
//             </div> */}
//         </div>
        
//         <style global jsx>{`
//           .content {
//             display: flex;
//             height: 100%;
//             width: 100%;
//             position: absolute;
//             flex-direction: column;
//             justify-content: center;
//             overflow-y: scroll;
//             -webkit-overflow-scrolling: touch;
//           }
//           div.header-container {
//             display:flex;
//             justify-content: center;
//             margin-bottom: 20px;
//             margin-top: 20px;
//             width: 100%;
//           }
//           div.header-container-inner {
//             flex: 1 1 auto;
//             text-align: center;
//           }
//           div.header-container picture {
//             display: block;
//           }
//           div.header-container img {
//             max-width: 500px;
//             width: 100%;
//           }

//           .language-selector {
//             display:flex;
//             justify-content: center;
//             margin-bottom: 20px;
//             margin-top: 20px;
//             width: 100%;
//             flex-wrap: wrap;
//           }
//           .language-image img{
//             width: 320px;
//           }
//           .language-image:hover {
//             filter: brightness(1.2);
//           }


//           @media (max-width: 1240px) {
//             .language-image img {
//                 width: 240;
//             }
//           }

//           @media (max-width: 980px) {
//             .language-image img {
//                 width: 240px;
//             }
//           }

//           @media (max-width: 420px) {
//             .language-image img {
//                 width: 140px;
//             }
//           }

//           @media (max-height: 420px) {
//             div.header-container img {
//               max-width: 300px;
//             }
//             .language-image img {
//               width: 140px;
//             }
//             div.header-container {
//               margin-bottom: 0px;
//               margin-top: 0px;
//             }
//             div.language-selector {
//               margin-top: 0px;
//             }
//           }
//         `}</style>
//       </div>
//     )
//   }
// }
// export default Index;


import Link from "next/link";
import Image from "next/image";
import titleImage from "../static/images/juan-wauters.png";
import continueImage from "../static/images/vamos.png";
import classes from "./index.module.css";

function HomePage() {
  return (
    <div className={classes.HomePage}>
      <div className={classes.Title}>
        <Image src={titleImage} alt="juan-wauters" width="800px" height="500px" />
      </div>
      <div className={classes.Continue}>
        <Link href="/albums">
          <Image src={continueImage} alt="lets-go"  width="300px" height="150px"/>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;