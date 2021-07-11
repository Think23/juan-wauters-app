import React, { Component } from 'react';
import posed from 'react-pose'



const Album = posed.a({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.03 },
})

class Albums extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }
  render() {
    return (
      <div className="albums">
        <style global jsx>{`
            body {
                width: 100%;
                overflow: auto!important;
                position: relative!important;
            }
            html {
              overflow: auto!important;
            }
            #__next {
                height: 100%;
            }
            .albums {
              width: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              height: 100%;
            }
            .header {
              width: 90%;
              display: flex;
              justify-content: center;
              flex-direction: column;
              align-items: center;
              margin: 5%;
            }
            .header img {
              align-self: center;
              width: 100%;
              max-width: 450px;
            }
            .albums-container {
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 3em;
              margin-right: 7%;
              margin-left: 7%;
            }
            .album {
              display: block;
              align-self: center;
              width: 40%;
              margin-left: 1%;
              margin-right: 1%;
              max-width: 350px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;

            }
            .album-cover {
                width: 100%;
                margin-bottom: 1em;
            }
            .album-text {
                width: 80%;
            }
            
            .burger-menu {
              position: fixed!important;
            }

            @media (orientation: landscape) {
              .album {
                width: 40vh;
              }
              .header img {
                width: 80vh;
              }
              .header {
                margin: 5vh;
              }
            }

        `}</style>
        <div className="header">
            <img src="/static/images/albums/choose-an-album.svg"/>
        </div>
        <div className="albums-container">
            <Album href="/en/introducing-juan-pablo" className="album">
             <img className="album-cover" src="/static/images/albums/introducing-juan-pablo-cover.jpg"/>
             <img className="album-text" src="/static/images/albums/introducing-juan-pablo-text.svg"/>
          </Album>
          <Album href="/en/la-onda-de-juan-pablo#main" className="album">
             <img className="album-cover" src="/static/images/albums/la-onda-de-juan-pablo-cover.jpg"/>
             <img className="album-text" src="/static/images/albums/la-onda-de-juan-pablo-text.svg"/>
          </Album>
        </div>
      </div>
    )
  }
}
export default Albums;
