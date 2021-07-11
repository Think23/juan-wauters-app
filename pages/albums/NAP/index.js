import React, { Component } from "react";
import posed from "react-pose";
import SpotifyPlayer from "react-spotify-player";
import SVG from "react-inlinesvg";

const songs = {
  1: {
    tracks: {
      spotify: "spotify:track:54vpagPheGvRFcLJeGl5Y9",
      appleMusic:
        "https://embed.music.apple.com/us/album/super-talking/1454723412?i=1454723413",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969502&app_id=1",
    },
  },
  2: {
    tracks: {
      spotify: "spotify:track:4RD1lwAMHKZXKSr7xgNhQW",
      appleMusic:
        "https://embed.music.apple.com/us/album/doing-alright/1454723412?i=1454723414",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969512&app_id=1",
    },
  },
  3: {
    tracks: {
      spotify: "spotify:track:37mt8MIW8cIfklxTET4jW8",
      appleMusic:
        "https://embed.music.apple.com/us/album/rubia/1454723412?i=1454723418",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969522&app_id=1",
    },
  },
  4: {
    tracks: {
      spotify: "spotify:track:4OlkiUABpOP3v4RLw96Pon",
      appleMusic:
        "https://embed.music.apple.com/us/album/letter/1454723412?i=1454723419",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=ff0000&layout=&size=medium&type=tracks&id=641949072&app_id=1",
    },
  },
  5: {
    tracks: {
      spotify: "spotify:track:5lNdpnjT0eNKHvcNkv72ew",
      appleMusic:
        "https://embed.music.apple.com/us/album/bolero-maurice-ravel/1454723412?i=1454723420",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969542&app_id=1",
    },
  },
  6: {
    tracks: {
      spotify: "spotify:track:74g1GQEznQbe3fah279XW0",
      appleMusic:
        "https://embed.music.apple.com/us/album/mystery/1454723412?i=1454723421",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969552&app_id=1",
    },
  },
  7: {
    tracks: {
      spotify: "spotify:track:57bhmX4zTeRasqh8Cky8hS",
      appleMusic:
        "https://embed.music.apple.com/us/album/lonely/1454723412?i=1454723422",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969562&app_id=1",
    },
  },
  8: {
    tracks: {
      spotify: "spotify:track:2sJlnMKn8TpllT2U3m70Ay",
      appleMusic:
        "https://embed.music.apple.com/us/album/mountain/1454723412?i=1454723423",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969572&app_id=1",
    },
  },
  9: {
    tracks: {
      spotify: "spotify:track:1tTVAwS5LCDIr6qgQNOaYg",
      appleMusic:
        "https://embed.music.apple.com/us/album/jaime-tortuga/1454723412?i=1454723424",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969582&app_id=1",
    },
  },
  10: {
    tracks: {
      spotify: "spotify:track:2ZLKdobYzWgLjUhj4JBr4U",
      appleMusic:
        "https://embed.music.apple.com/us/album/el-hombre-de-la-calle/1454723412?i=1454723425",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=ff0000&layout=&size=medium&type=tracks&id=656680772&app_id=1",
    },
  },
  11: {
    tracks: {
      spotify: "spotify:track:1ryeWO1ourhWBZ6580FkdW",
      appleMusic:
        "https://embed.music.apple.com/us/album/dos/1454723412?i=1454723636",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969602&app_id=1",
    },
  },
  12: {
    tracks: {
      spotify: "spotify:track:1YexttmsVnbkDktbAfoitf",
      appleMusic:
        "https://embed.music.apple.com/us/album/what-you-gonna-do/1454723412?i=1454723637",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969612&app_id=1",
    },
  },
  13: {
    tracks: {
      spotify: "spotify:track:2Fiyni4zKCyoKbwI2n9S6z",
      appleMusic:
        "https://embed.music.apple.com/us/album/letter-ii-feat-maxine-yolanda/1454723412?i=1454723638",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969622&app_id=1",
    },
  },
  14: {
    tracks: {
      spotify: "spotify:track:3earNMFlfH1QtZhqpfwuxj",
      appleMusic:
        "https://embed.music.apple.com/us/album/crazy-funny-feat-maxine-yolanda/1454723412?i=1454723641",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969632&app_id=1",
    },
  },
  15: {
    tracks: {
      spotify: "spotify:track:1r6lpEPbGOLGUVt43UyTJy",
      appleMusic:
        "https://embed.music.apple.com/us/album/lora/1454723412?i=1454723642",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969642&app_id=1",
    },
  },
  16: {
    tracks: {
      spotify: "spotify:track:7xUQjDLsRSh5323robWrQx",
      appleMusic:
        "https://embed.music.apple.com/us/album/straighten-up-and-lose/1454723412?i=1454723643",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969652&app_id=1",
    },
  },
  17: {
    tracks: {
      spotify: "spotify:track:5Awh1RXqVjwMo8Oh4Me8yB",
      appleMusic:
        "https://embed.music.apple.com/us/album/saludos/1454723412?i=1454723644",
      deezer:
        "https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=668969662&app_id=1",
    },
  },
};

const Song = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
});

const BuyLink = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
});

const PlayerButon = posed.div({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.1 },
});

const DeezerPlayer = (props) => {
  return (
    <iframe
      scrolling="no"
      frameBorder="0"
      allowtransparency="true"
      src={props.src}
      width="100%"
      height="90"
    ></iframe>
  );
};
const Players = ({ selectedPlayer, onSelectPlayer, song }) => {
  let player = null;
  if (song) {
    switch (selectedPlayer) {
      case "spotify":
        player = (
          <div className="music-player spotify-player">
            <SpotifyPlayer
              uri={songs[song].tracks.spotify}
              size={{ height: 81, width: "100%" }}
              view={"coverart"}
              theme={"white"}
            />
          </div>
        );
        break;
      case "apple":
        player = (
          <div className="music-player apple-music-player">
            <iframe
              allow="autoplay *; encrypted-media *;"
              frameBorder="0"
              height="150"
              width="100%"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={songs[song].tracks.appleMusic}
            ></iframe>
          </div>
        );
        break;
      case "deezer":
        player = (
          <div className="music-player deezer-player">
            <DeezerPlayer src={songs[song].tracks.deezer} />
          </div>
        );
        break;
    }
  }
  return (
    <div
      id="players"
      className={
        "players " +
        (selectedPlayer
          ? "players--selected-player selected--" + selectedPlayer
          : "") +
        (song ? " players--selected-song" : "")
      }
    >
      <div className="select-platform-hint">
        <img src="/static/images/introducing-juan-pablo/svgs/pick-a-music-platform.svg" />
      </div>
      <div className="players-container">
        <PlayerButon
          className="player player-spotify"
          data-platform-name="spotify"
          onClick={() => onSelectPlayer("spotify")}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            height="48px"
            width="48px"
            viewBox="0 0 48 48"
            className="player-icon"
          >
            <g>
              <path d="M23.992,4C12.969,4,4,12.969,4,23.994C4,35.025,12.969,44,23.992,44C35.025,44,44,35.025,44,23.994C44,12.969,35.025,4,23.992,4z M13.847,31.341c2.317-0.706,4.694-1.063,7.063-1.063c4.023,0,7.994,1.02,11.487,2.949c0.208,0.113,0.396,0.487,0.481,0.953c0.084,0.466,0.051,0.945-0.085,1.194c-0.172,0.32-0.521,0.526-0.888,0.526c-0.183,0-0.342-0.041-0.502-0.127c-3.207-1.763-6.835-2.694-10.494-2.694c-2.211,0-4.381,0.327-6.448,0.972c-0.101,0.03-0.204,0.046-0.308,0.046c-0.453,0-0.846-0.288-0.978-0.716C12.998,32.796,13.366,31.497,13.847,31.341z M12.975,23.975c2.583-0.703,5.253-1.059,7.936-1.059c4.821,0,9.609,1.166,13.85,3.375c0.297,0.151,0.516,0.407,0.616,0.721c0.102,0.317,0.071,0.658-0.088,0.963c-0.378,0.74-0.82,1.238-1.101,1.238c-0.199,0-0.391-0.048-0.581-0.143c-3.937-2.051-8.208-3.09-12.696-3.09c-2.497,0-4.946,0.328-7.277,0.975C13.524,26.984,13.413,27,13.302,27c-0.561,0-1.055-0.379-1.201-0.92C11.913,25.376,12.341,24.146,12.975,23.975z M12.751,19.161c-0.118,0.029-0.239,0.044-0.359,0.044c-0.679,0-1.266-0.458-1.429-1.112c-0.204-0.83,0.314-1.793,1.065-1.982c2.922-0.718,5.91-1.082,8.882-1.082c5.751,0,11.26,1.294,16.373,3.845c0.355,0.175,0.621,0.478,0.746,0.852c0.127,0.374,0.099,0.777-0.077,1.133c-0.239,0.479-0.757,0.996-1.327,0.996c-0.221,0-0.446-0.052-0.646-0.146c-4.697-2.351-9.767-3.543-15.068-3.543C18.186,18.166,15.44,18.501,12.751,19.161z"></path>
            </g>
          </svg>
          <span className="player-name">
            <img src="/static/images/introducing-juan-pablo/svgs/spotify-text.svg" />
          </span>
        </PlayerButon>
        <PlayerButon
          className="player player-appleMusic"
          data-platform-name="appleMusic"
          onClick={() => onSelectPlayer("apple")}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            height="48px"
            width="48px"
            viewBox="0 0 48 48"
            className="player-icon"
          >
            <g>
              <path d="M35.423,24.103c-1.146-5.95,4.331-9.442,4.331-9.442s-2.137-3.185-5.722-4.004c-3.585-0.821-5.378,0.204-7.169,0.974c-1.793,0.77-2.686,0.77-2.686,0.77c-2.586,0-4.477-2.825-9.405-1.54c-3.396,0.885-6.969,4.929-7.616,9.754c-0.646,4.826,0.748,10.986,3.435,15.762c2.686,4.775,5.424,6.574,7.366,6.625c1.942,0.05,3.881-1.436,6.22-1.798c2.336-0.358,3.78,0.875,6.072,1.542c2.288,0.666,3.088,0.047,5.724-2.266C38.609,38.171,41,31.546,41,31.546S36.57,30.063,35.423,24.103z M30.348,6.803C32.887,4.133,32.023,0,32.023,0s-3.566,0.646-5.957,3.211c-2.386,2.566-1.989,6.621-1.989,6.621S27.807,9.472,30.348,6.803z"></path>
            </g>
          </svg>
          <span className="player-name">
            <img src="/static/images/introducing-juan-pablo/svgs/apple-music-text.svg" />
          </span>
        </PlayerButon>
        <PlayerButon
          className="player player-deezer"
          data-platform-name="deezer"
          onClick={() => onSelectPlayer("deezer")}
        >
          <svg
            preserveAspectRatio="xMidYMid meet"
            height="48px"
            width="48px"
            viewBox="0 0 48 48"
            className="player-icon"
          >
            <g>
              <path d="M0,34.826h8.75V37.5H0V34.826zM0,31.352h8.75v2.674H0V31.352zM0,27.877h8.75v2.674H0V27.877zM0,24.402h8.75v2.672H0V24.402zM0,20.926h8.75v2.673H0V20.926zM9.812,34.826h8.751V37.5H9.812V34.826zM9.812,31.352h8.751v2.674H9.812V31.352zM9.812,27.877h8.751v2.674H9.812V27.877zM19.624,34.826h8.751V37.5h-8.751V34.826zM19.624,31.352h8.751v2.674h-8.751V31.352zM19.624,27.877h8.751v2.674h-8.751V27.877zM19.624,24.402h8.751v2.672h-8.751V24.402zM19.624,20.926h8.751v2.673h-8.751V20.926zM19.624,17.451h8.751v2.673h-8.751V17.451zM19.624,13.976h8.751v2.673h-8.751V13.976zM29.436,34.826h8.752V37.5h-8.752V34.826zM29.436,31.352h8.752v2.674h-8.752V31.352zM29.436,27.877h8.752v2.674h-8.752V27.877zM29.436,24.402h8.752v2.672h-8.752V24.402zM29.436,20.926h8.752v2.673h-8.752V20.926zM39.248,34.826H48V37.5h-8.752V34.826zM39.248,31.352H48v2.674h-8.752V31.352zM39.248,27.875H48v2.674h-8.752V27.875zM39.248,24.402H48v2.672h-8.752V24.402zM39.248,20.925H48v2.674h-8.752V20.925zM39.248,17.451H48v2.673h-8.752V17.451zM39.248,13.975H48v2.672h-8.752V13.975zM39.248,10.5H48v2.673h-8.752V10.5z"></path>
            </g>
          </svg>
          <span className="player-name">
            <img src="/static/images/introducing-juan-pablo/svgs/deezer-text.svg" />
          </span>
        </PlayerButon>
      </div>
      <div className="music-players-container">
        {song && selectedPlayer ? player : null}
      </div>
      <div className="select-song-hint">
        <img src="/static/images/introducing-juan-pablo/svgs/choose-a-song.svg" />
      </div>
    </div>
  );
};

class IntroducingJuanPablo extends Component {
  constructor() {
    super();
    this.state = {
      selectedPlayer: null,
      song: null,
    };
    this.selectPlayer = this.selectPlayer.bind(this);
  }
  // componentDidMount() {
  //   $(".video-container").fitVids();
  //   this.props.closeMenu();
  // }
  selectPlayer(player) {
    this.setState({
      selectedPlayer: player,
    });
  }
  selectSong(song) {
    this.setState({
      song: song,
    });
    window.location.hash = "#players";
    window.location.hash = "";

    //const scrollTop = Math.max(document.scrollingElement.scrollTop, document.body.scrollTop);
    //$(document.scrollingElement).animate({
    //  scrollTop: $('.players').offset().top
    //},500);
  }
  render() {
    const { song, selectedPlayer } = this.state;
    return (
      <div className="introducing-juan-pablo">
        <style global jsx>{`
          body {
            background-image: none !important;
            background-color: #fff !important;
            width: 100%;
            overflow: auto !important;
            position: relative !important;
          }
          html {
            overflow: auto !important;
            height: auto !important;
          }
          .introducing-juan-pablo {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            padding-bottom: 150px;
            margin-top: 0%;
          }
          .intro {
            font-family: "Walter Turncoat", cursive;
            font-weight: bolder;
            width: 90%;
            max-width: 700px;
          }
          .sub-cover {
            width: 60%;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            max-width: 500px;
          }
          .sub-cover img {
            align-self: center;
            width: 75%;
            max-width: 640px;
            margin-bottom: 2%;
          }
          .cover {
            width: 90%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            max-width: 700px;
          }

          @media (max-width: 500px) {
            .sub-cover {
              margin-top: 10%;
            }
          }
          .intro img,
          .cover img {
            align-self: center;
            width: 100%;
            max-width: 800px;
            margin-bottom: 5%;
          }
          .players--selected-player.players--selected-song
            .music-players-container {
            height: 150px;
            transition: height 0.3s;
          }
          .music-players-container {
            display: flex;
            height: 0px;
            transition: height 0.3s;
            flex-direction: column;
            justify-content: center;
            background-image: url("/static/images/loader.webp");
            background-repeat: no-repeat;
            background-position: center;
            max-width: 700px;
            margin-top: 5%;
          }
          .players {
            padding: 0px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            text-align: center;
            width: 100%;
            max-width: 1000px;
            margin-bottom: 5%;
          }
          .player-name {
            display: none;
          }
          .player-name img {
            height: 14px;
          }
          .player-icon {
            width: 15vw;
            height: auto;
            min-width: 48px;
            max-width: 72px;
          }
          .songs {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 30px;
            margin-right: 30px;
            margin-bottom: 3em;
          }
          .song {
            align-self: center;
            width: 60%;
            padding-left: 5%;
            padding-right: 5%;
            min-width: 248px;
            max-width: 640px;
          }
          .song .song-name-wrapper {
            width: 100% !important;
            display: block;
          }
          .song path {
            stroke: #000 !important;
            stroke-width: 0.05 !important;
            transition: fill 0.3s, stroke 0.3s, stroke-width 0.3s;
          }
          .song--selected {
            transform: scale(1.1) !important;
            background-image: url("/static/images/introducing-juan-pablo/svgs/song--selected.svg");
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100% 100%;
          }
          .song--selected path {
            fill: #fff !important;
            stroke: #fff !important;
            stroke-width: 0.15 !important;
            transition: fill 0.3s, stroke 0.3s, stroke-width 0.3s;
          }
          .burger-menu {
            position: fixed !important;
          }
          .players--selected-player .select-platform-hint {
            transition: max-height 0.3s ease-in;
            max-height: 0px;
          }
          .players--selected-player .select-platform-hint img {
            transition: margin-right 0.3s, width 0.3s, min-width 0.3s;
            margin-right: 100%;
            width: 0%;
            min-width: 0px;
          }
          .players--selected-song .select-song-hint {
            transition: max-height 0.3s ease-in;
            max-height: 0px;
          }
          .players--selected-song .select-song-hint img {
            transition: margin-left 0.3s, width 0.3s, min-width 0.3s;
            margin-left: 100%;
            width: 0%;
            min-width: 0px;
          }
          .select-platform-hint,
          .select-song-hint {
            transform: scale(1);
            transition: transform 0.5s;
            margin-top: 5%;
            max-height: 200px;
          }
          .select-platform-hint img {
            width: 35%;
            min-width: 166px;
            margin-right: 37%;
            margin-bottom: 0%;
          }
          .select-song-hint img {
            width: 32%;
            margin-left: 37%;
            min-width: 166px;
          }
          .video-container {
            width: 95%;
            max-width: 1000px;
            max-height: 562px;
            overflow: hidden;
            background-image: url("/static/images/loader.webp");
            background-repeat: no-repeat;
            background-position: center;
          }
          .fluid-width-video-wrapper {
            padding-top: 56.25% !important;
          }
          .listen-header,
          .videos-header {
            margin-top: 1.5%;
          }
          .video-title {
            width: 100%;
            max-width: 1000px;
          }

          .buy-record a {
            display: block;
            width: 100%;
            margin-top: 10%;
          }
          .video-iframe {
            height: 600px;
            width: 100%;
          }
          @media (max-width: 800px) {
            .video-iframe {
              height: 450px;
            }
          }
          @media (max-width: 600px) {
            .video-iframe {
              height: 400px;
            }
          }
          @media (max-width: 500px) {
            .video-iframe {
              height: 200px;
            }
          }
          @media (max-width: 330px) {
            .video-iframe {
              height: 180px;
            }
          }
        `}</style>
        {/* <div className="title">
          <img src="/static/images/albums/nap/titulo-nap-01.svg" />
        </div> */}
        <div className="sub-cover">
          <img src="/static/images/albums/nap/titulo-nap-01.svg" />
          <img src="/static/images/albums/nap-edited/22D6949C.png" />
        </div>
        <div className="cover">
          <img src="/static/images/albums/nap-edited/98978800.png" />
        </div>
        <div className="intro">
          <img src="/static/images/albums/nap-edited/B6536978.png" />
          {/* <p>
            Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem
            ipsumLorem ipsum{" "}
          </p> */}
        </div>
        <div className="intro listen-header">
          <img src="/static/images/introducing-juan-pablo/svgs/listen.svg" />
        </div>
        <Players
          selectedPlayer={selectedPlayer}
          onSelectPlayer={this.selectPlayer}
          song={song}
        />
        <div className="songs">
          <Song
            onClick={() => this.selectSong("1")}
            className={song == 1 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/1-let me hip you to something.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("2")}
            className={song == 2 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/2-sanity.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("3")}
            className={song == 3 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/3-lost in soup.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("4")}
            className={song == 4 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/4-escucho mucho.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("5")}
            className={song == 5 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/5-woke up feeling like sleeping.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("6")}
            className={song == 6 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/6-water.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("7")}
            className={song == 7 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/7-goo.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("8")}
            className={song == 8 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/8-all tall mall will fall.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("9")}
            className={song == 9 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/9-continue to be you.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("10")}
            className={song == 10 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/10-breathing.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("11")}
            className={song == 11 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/11-how do they all do.svg"
            />
          </Song>
          <Song
            onClick={() => this.selectSong("12")}
            className={song == 12 ? "song song--selected" : "song"}
          >
            <SVG
              className="song-name-wrapper"
              src="/static/images/albums/nap/songs/12-ay ay ay.svg"
            />
          </Song>
        </div>
        <div className="intro videos-header">
          <img src="/static/images/introducing-juan-pablo/svgs/videos.svg" />
        </div>
        <div className="video-container">
          <iframe
            className="video-iframe"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            src="https://www.youtube.com/embed/eResaNhTli8"
          ></iframe>
        </div>
        <div className="video-title">
          <h5> "I'm All Wrong" on a Bicycle</h5>
          {/* <img src="/static/images/introducing-juan-pablo/svgs/vid-el-hombre-de-la-calle.svg" /> */}
        </div>
        <div className="intro videos-header">
          <img src="/static/images/introducing-juan-pablo/svgs/more-videos-coming-soon.svg" />
        </div>
        <BuyLink className="intro buy-record">
          <a
            href="https://www.omnianmusicgroup.com/products/n-a-p-north-american-poetry"
            target="_blank"
          >
            <img src="/static/images/introducing-juan-pablo/svgs/buy-records.svg" />
          </a>
        </BuyLink>
      </div>
    );
  }
}
export default IntroducingJuanPablo;
