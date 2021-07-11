import React, { Component } from 'react';
import posed from 'react-pose'
import SpotifyPlayer from 'react-spotify-player';

const songs = {
  letter: {
    tracks: {
      spotify: "spotify:track:3lPLuRKS51Pd8upmkcg76q",
      appleMusic: "https://embed.music.apple.com/us/album/el-se%C3%B1or/1440522694?i=1440522697",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343442&app_id=1",
    }
  },
  other: {
    tracks: {
      spotify: "spotify:track:0DTMZwvMOLaKbYaJUzHovk",
      appleMusic: "https://embed.music.apple.com/us/album/camdombe/1440522694?i=1440522700",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343472&app_id=1",
    }
  },
  another: {
    tracks: {
      spotify: "spotify:track:5q6Zmyz6auO3L6OpEBbbuU",
      appleMusic: "https://embed.music.apple.com/us/album/mi-vida/1440522694?i=1440522942",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343492&app_id=1",
    }
  }
}

const ClickableImage = posed.img({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
})


const Players = ({selectedPlayer, onSelectPlayer, song}) => {
  let player = null;
  if(song) {
    switch(selectedPlayer) {
      case "spotify":
        player = <div className="music-player spotify-player">
          <SpotifyPlayer uri={songs[song].tracks.spotify} size={{height: 90, width: '100%'}} view={'coverart'} theme={'white'}/>
        </div>;
        break;
      case "apple":
        player = <div className="music-player apple-music-player">
          <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" width="100%" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={songs[song].tracks.appleMusic}></iframe>
        </div>;
        break;
      case "deezer":
        player = <div className="music-player deezer-player">
          <iframe scrolling="no" frameborder="0" allowTransparency="true" src={songs[song].tracks.deezer} width="100%" height="90"></iframe>
        </div>;
        break;
    };
  }
  return (
    <div className="players">
      <div className={'selected--' + selectedPlayer}>
        <div className="players-header">
          <p>Select Player</p>
        </div>
        <div className="players-container">
          <div className="player player-spotify" data-platform-name="spotify" onClick={() => onSelectPlayer('spotify')}>
            <svg preserveAspectRatio="xMidYMid meet" height="48px" width="48px" viewBox="0 0 48 48" className="player-icon">
              <g>
                <path d="M23.992,4C12.969,4,4,12.969,4,23.994C4,35.025,12.969,44,23.992,44C35.025,44,44,35.025,44,23.994C44,12.969,35.025,4,23.992,4z M13.847,31.341c2.317-0.706,4.694-1.063,7.063-1.063c4.023,0,7.994,1.02,11.487,2.949c0.208,0.113,0.396,0.487,0.481,0.953c0.084,0.466,0.051,0.945-0.085,1.194c-0.172,0.32-0.521,0.526-0.888,0.526c-0.183,0-0.342-0.041-0.502-0.127c-3.207-1.763-6.835-2.694-10.494-2.694c-2.211,0-4.381,0.327-6.448,0.972c-0.101,0.03-0.204,0.046-0.308,0.046c-0.453,0-0.846-0.288-0.978-0.716C12.998,32.796,13.366,31.497,13.847,31.341z M12.975,23.975c2.583-0.703,5.253-1.059,7.936-1.059c4.821,0,9.609,1.166,13.85,3.375c0.297,0.151,0.516,0.407,0.616,0.721c0.102,0.317,0.071,0.658-0.088,0.963c-0.378,0.74-0.82,1.238-1.101,1.238c-0.199,0-0.391-0.048-0.581-0.143c-3.937-2.051-8.208-3.09-12.696-3.09c-2.497,0-4.946,0.328-7.277,0.975C13.524,26.984,13.413,27,13.302,27c-0.561,0-1.055-0.379-1.201-0.92C11.913,25.376,12.341,24.146,12.975,23.975z M12.751,19.161c-0.118,0.029-0.239,0.044-0.359,0.044c-0.679,0-1.266-0.458-1.429-1.112c-0.204-0.83,0.314-1.793,1.065-1.982c2.922-0.718,5.91-1.082,8.882-1.082c5.751,0,11.26,1.294,16.373,3.845c0.355,0.175,0.621,0.478,0.746,0.852c0.127,0.374,0.099,0.777-0.077,1.133c-0.239,0.479-0.757,0.996-1.327,0.996c-0.221,0-0.446-0.052-0.646-0.146c-4.697-2.351-9.767-3.543-15.068-3.543C18.186,18.166,15.44,18.501,12.751,19.161z"></path>
              </g>
            </svg>
            <span className="player-name">Spotify</span>
          </div>
          <div className="player player-appleMusic" data-platform-name="appleMusic" onClick={() => onSelectPlayer('apple')}><svg
              preserveAspectRatio="xMidYMid meet" height="48px" width="48px" viewBox="0 0 48 48" className="player-icon">
              <g>
                  <path d="M35.423,24.103c-1.146-5.95,4.331-9.442,4.331-9.442s-2.137-3.185-5.722-4.004c-3.585-0.821-5.378,0.204-7.169,0.974c-1.793,0.77-2.686,0.77-2.686,0.77c-2.586,0-4.477-2.825-9.405-1.54c-3.396,0.885-6.969,4.929-7.616,9.754c-0.646,4.826,0.748,10.986,3.435,15.762c2.686,4.775,5.424,6.574,7.366,6.625c1.942,0.05,3.881-1.436,6.22-1.798c2.336-0.358,3.78,0.875,6.072,1.542c2.288,0.666,3.088,0.047,5.724-2.266C38.609,38.171,41,31.546,41,31.546S36.57,30.063,35.423,24.103z M30.348,6.803C32.887,4.133,32.023,0,32.023,0s-3.566,0.646-5.957,3.211c-2.386,2.566-1.989,6.621-1.989,6.621S27.807,9.472,30.348,6.803z"></path>
              </g>
          </svg><span className="player-name">Apple Music</span></div>
          <div className="player player-deezer" data-platform-name="deezer" onClick={() => onSelectPlayer('deezer')}><svg
              preserveAspectRatio="xMidYMid meet" height="48px" width="48px" viewBox="0 0 48 48" className="player-icon">
              <g>
                  <path d="M0,34.826h8.75V37.5H0V34.826zM0,31.352h8.75v2.674H0V31.352zM0,27.877h8.75v2.674H0V27.877zM0,24.402h8.75v2.672H0V24.402zM0,20.926h8.75v2.673H0V20.926zM9.812,34.826h8.751V37.5H9.812V34.826zM9.812,31.352h8.751v2.674H9.812V31.352zM9.812,27.877h8.751v2.674H9.812V27.877zM19.624,34.826h8.751V37.5h-8.751V34.826zM19.624,31.352h8.751v2.674h-8.751V31.352zM19.624,27.877h8.751v2.674h-8.751V27.877zM19.624,24.402h8.751v2.672h-8.751V24.402zM19.624,20.926h8.751v2.673h-8.751V20.926zM19.624,17.451h8.751v2.673h-8.751V17.451zM19.624,13.976h8.751v2.673h-8.751V13.976zM29.436,34.826h8.752V37.5h-8.752V34.826zM29.436,31.352h8.752v2.674h-8.752V31.352zM29.436,27.877h8.752v2.674h-8.752V27.877zM29.436,24.402h8.752v2.672h-8.752V24.402zM29.436,20.926h8.752v2.673h-8.752V20.926zM39.248,34.826H48V37.5h-8.752V34.826zM39.248,31.352H48v2.674h-8.752V31.352zM39.248,27.875H48v2.674h-8.752V27.875zM39.248,24.402H48v2.672h-8.752V24.402zM39.248,20.925H48v2.674h-8.752V20.925zM39.248,17.451H48v2.673h-8.752V17.451zM39.248,13.975H48v2.672h-8.752V13.975zM39.248,10.5H48v2.673h-8.752V10.5z"></path>
              </g>
          </svg><span className="player-name">Deezer</span></div>
        </div>
      </div>
      {(selectedPlayer && song) ? (
        <div className="music-players-container">
          {player}
        </div>
        ) : (<div>And then select a sticker/song</div>)}
    </div>
  );
}

class Water extends Component {
  constructor() {
    super();
    this.state = {
        selectedPlayer: null,
        song: null,
    }
    this.selectPlayer = this.selectPlayer.bind(this);
  }
  selectPlayer(player) {
    this.setState({
      selectedPlayer: player,
    })
  }   
  selectSong(song) {
    this.setState({
      song: song,
    })
  }
  render() {
    const {song, selectedPlayer} = this.state;
    return (
      <div className="water">
        <style global jsx>{`
            body {
                background-image: url(/static/images/stickers/sea.gif)!important;
            }
            .sticker {
                width: auto;
                height: auto;
                max-height: 20vh;
                max-width: 20vw;
                padding-left: 2vw;
                padding-right: 2vw;
                padding-top: 2vh;
                padding-botom: 2vh;
            }
            .players {
              position: absolute;
              bottom: 0px;
              width: 100%;
              background-color: white;
              padding: 5px;
            }
            .stickers {
              padding-left: 2vw;
              padding-right: 2vw;
              padding-top: 2vh;
              padding-botom: 2vh;
            }
        `}</style>
        <div className="stickers">
          <ClickableImage onClick={() => this.selectSong('letter')} className="sticker" src="/static/images/stickers/ny.webp"/>
          <ClickableImage onClick={() => this.selectSong('other')} className="sticker" src="/static/images/stickers/pelota.webp"/>
          <ClickableImage onClick={() => this.selectSong('another')} className="sticker" src="/static/images/stickers/juan.webp"/>
          <ClickableImage onClick={() => this.selectSong('another')} className="sticker" src="/static/images/stickers/bici.webp"/>
        </div>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={this.selectPlayer} song={song}/>
      </div>
    )
  }
}
export default Water;
