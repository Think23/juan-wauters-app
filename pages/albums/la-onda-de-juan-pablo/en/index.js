import React, { Component } from 'react';
import posed from 'react-pose'
import SpotifyPlayer from 'react-spotify-player';

const ClickableImage = posed.img({
  hoverable: true,
  init: { scale: 1 },
  hover: { scale: 1.2 },
})

const Players = ({selectedPlayer, onSelectPlayer, country}) => {
  let player = null;
  switch(selectedPlayer) {
    case "spotify":
      player = <div className="music-player spotify-player">
        <SpotifyPlayer uri={countries[country].tracks.spotify} size={{height: 90, width: '100%'}} view={'coverart'} theme={'white'}/>
      </div>;
      break;
    case "apple":
      player = <div className="music-player apple-music-player">
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="150" width="100%" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={countries[country].tracks.appleMusic}></iframe>
      </div>;
      break;
    case "deezer":
      player = <div className="music-player deezer-player">
        <iframe scrolling="no" frameborder="0" allowTransparency="true" src={countries[country].tracks.deezer} width="100%" height="90"></iframe>
      </div>;
      break;
  };
  return (
    <div className="players">
      <div className={'selected--' + selectedPlayer}>
        <div className="players-header">
          <p>Play on:</p>
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
      {selectedPlayer ? (
        <div className="music-players-container">
          {player}
        </div>
        ) : (null)}
    </div>
  );
}

const CountryContent = posed.div({
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  shown: {
    opacity: 1,
    x: '0',
  },
  initialPose: 'hidden'
})

const ComingSoon = posed.div({
  hidden: {
    opacity: 0,
    y: '-100%',
  },
  shown: {
    opacity: 1,
    y: '0',
  },
  initialPose: 'hidden'
})

const IntroContent = posed.div({
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  shown: {
    opacity: 1,
    y: '0',
  },
  initialPose: 'shown'
})


const Map = posed.div({
  initialPose: 'main',
  main: {
    scale: '1',
    x: '0vw',
    y: '0vh',
    opacity: 1,
    height: '100vh',
    rotate: 0,
  },
  mx: {
    scale: '4',
    x: '3vw',
    y: '120vh',
    opacity: 0.2,
    rotate: 0,
  },
  mx2: {
    scale: '4',
    x: '3vw',
    y: '120vh',
    opacity: 0.2,
    rotate: 0,
  },
  mx3: {
    scale: '4',
    x: '3vw',
    y: '120vh',
    opacity: 0.2,
    rotate: 0,
  },
  pe: {
    scale: '4',
    x: '-20vw',
    y: '-10vh',
    opacity: 0.2,
    rotate: 0,
  },
  ar: {
    scale: '3.5',
    x: '-50vw',
    y: '-115%',
    opacity: 0.2,
    rotate: 0,
  },
  ur: {
    scale: '6',
    x: '-85vw',
    y: '-90vh',
    opacity: 0.2,
    rotate: -15,
  },
  pr: {
    scale: '4',
    x: '-35vw',
    y: '120vh',
    opacity: 0.2,
    rotate: 0,
  },
  cl: {
    scale: '4',
    x: '-15vw',
    y: '-90%',
    opacity: 0.2,
    rotate: 10,
  },
});

import YouTube from 'react-youtube';
const opts = {
  width: "100%",
  hegith: "100%",
  playerVars: {
    autoplay: 0
  }
};

const SvgComponent = ({onCountryClick, showStartHere}) => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 312.738 481.013"
    className="mapSvg"
    width="100vw"
  >
    <style>{`
      .mapSvg path {
        opacity: 0;
      }
      .mapSvg path:hover {
        opacity: 0.2;
        cursor: pointer;
      }
    `}</style>
    <g transform="translate(-51.638 245.012)">
      <image
        xlinkHref={require('../../../../static/images/map.png')}
        y={-244.692}
        x={52.005}
        preserveAspectRatio="none"
        height={481.013}
        width={312.737}
        imageRendering="optimizeQuality"
      />
      {showStartHere ? (
        <image
          xlinkHref={require('../../../../static/images/start-here-2.png')}
          y={-123}
          x={63}
          preserveAspectRatio="none"
          height={88}
          width={87}
          imageRendering="optimizeQuality"
          onClick={(e) => { e.stopPropagation(); onCountryClick('mx')}}
        />
      ) : (null)}
      
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('ar')}}
        d="M290.9 62.112c-2.389.047-4.813 1.621-5.356 4.048-2.342 1.659-4.528-3.126-7.73-2.258-2.27-1-4.542 1.413-7.347 1.235-1.89.977-4.397 1.075-6.358 2.222-1.618.465-4.088 1.476-6.42-.062-2.995-.867-4.082-1.903-5.68-5.432-3.345-1.98-5.817 1.045-10.14-4.392-2.37-.714-6.116-1.41-8.133.256-2.431 1.591-3.557 3.011-5.062 3.518-2.004 1.313-4.092 3.456-6.988 1.914-3.768-3.654-5.521-.7-7.457.74-1.693.733-4.82 3.044-2.963 5.804.79 2.38 3.022 5.192 3.765 7.654 1.31 3.063 1.895 4.96 2.47 7.779 1.31 2.453.162 4.657.431 8.148.994 2.829-.04 5.534-.247 8.766-.354 2.677.08 5.14.741 7.779.899 3.807 1.145 7.192 1.729 10.618.34 3.494-.429 5.63-.186 8.396-.357 2.55-.932 5.5-1.79 7.963-1.68 2.53-.14 4.322.062 6.635.26 2.985.872 5.084.926 8.057-.648 3.586-1.097 6.382-2.655 9.322-.616 2.553-1.81 3.621-3.395 6.481-.795 1.533-2.94 4.411-3.025 6.544-.272 2.76.32 3.979 1.173 6.853 1.029 2.174 1.55 3.5 2.963 5.432 1.078 2.594 3.138 6.047 5 8.272 2.242 3.126 4.314 5.029 5.371 9.013.477 2.426 1.637 4.234 1.79 6.662-.248 3.376.524 6.655.186 10.068.165 1.896 3.588 1.21 6.773 1.173 3.17-.338 4.546 1.564 6.808 3.333 2.319.951 5.899 1.666 8.334 1.975 2.819 1.682 1.034-1.316.926-3.704.906-2.985-.204-4.442-.309-7.037-1.37-2.992-1.461-6.585-1.543-9.198-.469-2.605.981-3.85 1.728-5.741.794-.824 2.52-3.247 3.087-4.877 2.047-2.387 2.878-4.5 4.526-6.92.61-2.364-2.205-3.346-1.748-5.92-1.428-2.706-1.427-7.326.74-8.952 2.674-.144 7.092-1.915 6.236-5.37-2.65-7.58 1.01-6.097.942-9.125 1.092-3.82.708-6.375-.202-9.519-.201-2.792-.18-5.862 1.235-8.828.768-2.17 3.544-5.481 5.09-6.927 1.302-1.568 2.03-1.913 2.999-4.255 1.386-1.368 3.642-6.243-.187-6.596-4.287-1.044-7.01-3.289-6.05-7.19.756-4.335.922-7.043 1.728-11.083.748-3.908 1.034-4.994-.246-8.766 3.089-4.008 5.684-7.997 8.272-11.976 3.747-3.72 7.753-5.439 11.605-7.84 1.704-1.01 7.113.274 6.359-2.067 1.336-1.164-.884-3.07.802-3.921 2.315-2.65 7.522-6.26 5-7.47-1.923-1.052-4.944-2.263-8.58-1.234z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.827}
      />
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('cl')}}
        d="M205.847 56.119c3.247 6.12 3.562 10.826 5.419 13.586.79 2.38 3.022 5.192 3.765 7.654 1.31 3.063 1.895 4.96 2.47 7.779 1.31 2.453.162 4.657.431 8.148.994 2.829-.04 5.534-.247 8.766-.354 2.677.08 5.14.741 7.779.899 3.807 1.145 7.192 1.729 10.618.34 3.494-.429 5.63-.186 8.396-.357 2.55-.932 5.5-1.79 7.963-1.68 2.53-.14 4.322.062 6.635.26 2.985.872 5.084.926 8.057-.648 3.586-1.097 6.382-2.655 9.322-.616 2.553-1.81 3.621-3.395 6.481-.795 1.533-2.865 4.411-2.95 6.544-.272 2.76.246 3.979 1.098 6.853 1.029 2.174 1.55 3.5 2.963 5.432 1.078 2.594 3.138 6.047 5 8.272 2.242 3.126 4.314 5.029 5.371 9.013.477 2.426 1.637 4.234 1.79 6.662-.248 3.376.524 6.655.186 10.068.165 1.896-21.855-20.94-18.67-20.978.766-2.102.098-5.947-.516-11.947-.615-6.012-6.79-8.049-7.905-16.698-1.028-7.975-1.527-6.53-1.284-16.242.131-5.243 2.989-10.411 3.428-17.738.267-4.466 6.576-13.976 6.618-18.78.101-11.695-9.787-15.284-8.73-22.445.224-1.516-2.2-5.1-2.663-9.723-.418-4.171 1.233-9.23-.49-13.642-2.619-6.705-7.76-11.164-8.08-14.512-.471-4.914-1.048-11.338.984-15.035.941-1.713-1.605-2.635-.072-3.273 1.053-.438 6.298-.834 13.653 6.312 3.114 3.026 2.938 6.376 2.999 10.673z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.827}
      />
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('ur')}}
        d="M312.172 70.578c1.223 2.492-1.362 4.502-2.774 8.332-1.592 4.313-2.158 10.474-2.947 13.408-1.765 6.572-3.088 7.38-8.916 11.668-3.787 2.786-8.125 3.518-11.952 5.115-2.825 2.242-3.11 3.441-5.132 6.656-4.645 8.685-4.612 8.255-8.441 7.902-4.287-1.044-7.01-3.289-6.05-7.19.756-4.335.922-7.043 1.728-11.083.748-3.908 1.034-4.994-.246-8.766 3.089-4.008 5.684-7.997 8.272-11.976 3.747-3.72 7.753-5.439 11.605-7.84 1.704-1.01 7.113.274 6.359-2.067 1.336-1.164-.884-3.07.802-3.921 2.315-2.65 7.522-6.26 5-7.47-1.923-1.052 4.157 2.5 8.565 4.48z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.827}
      />
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('pe')}}
        d="M165.935-78.951c-2.78 4.503-6.354 7.465-8.318 13.5-1.336 4.833-1.267 11.36-5.595 14.617-4.818 5.097 4.99 7.372-.725 16.158-3.436 2.952-7.685 4.218-7.774 6.345 1.876 4.334.226 12.395 6.104 18.862 3.247 3.755 3.416 11.325 9.543 12.551 8.045.287 7.839.698 11.61 4.647 1.656 5.127 5.015 9.531 7.373 14.306 2.675 4.221 5.17 8.573 7.935 12.656 1.299 5.918 8.985 3.625 12.654 7.439 2.446 1.877 6.992 4.413 6.057-.924 1.605-5.292-.857-10.183-.222-15.717-2.72-4.12-3.482-8.495-3.83-13.21-.05-4.656-.996-10.576 2.26-14.504 1.343-5.937-.683-12.795-3.21-17.478-1.083-6.223-2.134-8.708-3.545-14.013-.275-4.627 3.706-9.553 1.668-14.222-4.42-2.926-7.987.771-12.832.25-5.886-.662-8.441 5.064-12.094-.4-4.327-.974-7.642-1.03-7.061-8.29 2.792-7.625 1.94-8.192 1.794-13.322-.019-2.773 1.08-9.733-1.792-9.251z"
        style={{ fontVariantEast_asian: 'normal' }}
        fill="#fff"
        stroke="#000"
        strokeWidth={0.827}
      />
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('mx')}}
        d="M60.618-224.675c-4.695 4.794 5.657 10.806.501 16.723-4.525 4.75.924 9.9.995 15.007 3.84 4.187 2.69 13.037 10.206 12.252-2.513-4.154 3.664-11.015-1.564-15.413-1.957-3.684-3.322-16.997 2.675-9.007 2.288 5.672 1.002 12.372 4.376 17.853 2.72 5.493 10.262 14.391 10.51 21.512 4.785 7.832 7.456 9.65 9.731 16.639 3.512 5.85.633 16.073 3.85 22.316 3.5 6.457 10.937 2.173 13.209 16.414 1.948 8.346 12.086 7.881 18.75 10.161 7.505-4.736 11.681 6.382 19.555 2.386 6.297-.506 11.276-3.915 13.9-8.99 5.455-1.98 13.764-3.57 15.932-9.313-3.625-3.493-8.285-3.206-12.059-5.706-5.095-1.848-10.555.66-15.678-1.06-8.01-3.69-11.177-10.927-12.134-19.253-2.446-7.362-3.18-15.371-7.808-21.86-4.327-6.887-10.048-12.84-14.456-19.648-3.368-8.687-.58-18.347-3.02-27.244 1.865-7.708-2.418-13.379-9.441-15.974-7.089-3.027-12.302-11.263-20.593-10.562-5.974.879-11.194 4.993-17.229 2.556-1.12 4.405-7.55 2.23-7.538 7.297-1.122.71-2.828 1.225-2.67 2.914z"
        fill="#fff"
        stroke="#000"
        strokeWidth={0.827}
      />
      <path
        onClick={(e) => { e.stopPropagation(); onCountryClick('pr')}}
        d="M263.934-196c-.282.07-.564.14-.847.212-.07.07-.117.18-.211.211-.134.045-.285-.028-.424 0-.218.044-.415.175-.635.212-.208.035-.426-.035-.635 0-2.108.351 1.144.095-1.481.423-.28.035-.573-.068-.847 0-2.765.691 1.551.268-2.117.635-2.003.2.446-.31-1.904.212-.284.063-.567.132-.847.211-.215.062-.415.175-.635.212-.209.035-.434-.067-.635 0-.241.08-.417.293-.635.423a2.964 2.964 0 0 1-.423.212c-.208.083-.428.129-.635.212-.293.117-.565.282-.847.423-.141.07-.297.117-.423.212-.24.18-.386.469-.635.635-.132.087-.297.117-.424.211-.399.3-.668.747-1.058 1.059-.123.098-.292.124-.423.211-.294.196-.56.43-.847.635-.207.148-.436.265-.635.424-.156.124-.252.32-.423.423-.192.115-.461.072-.635.212-.199.159-.244.455-.424.635s-.423.282-.635.423c-1.547 1.031.399-.228-1.481.847-.221.126-.414.297-.635.423-.274.156-.573.267-.847.423-.22.126-.401.323-.635.424-.267.114-.567.131-.846.211-.993.284-.353.151-1.482.635-1.194.512-.05-.114-1.482.424-.295.11-.564.282-.846.423-.283.141-.573.267-.847.423-.22.126-.417.293-.635.423-.135.082-.297.117-.423.212-.16.12-.264.304-.424.423-.126.095-.282.142-.423.212l-.423.212-.424.211c-.14.071-.27.174-.423.212-.137.034-.29-.044-.423 0-.3.1-.557.3-.847.423-.205.088-.428.13-.635.212-.146.059-.27.174-.423.212-.137.034-.297-.063-.423 0-.179.089-.258.312-.424.423-.059.04-.143-.017-.211 0-1.762.44.255-.015-1.059.423-.067.023-.145-.022-.211 0-1.534.511.333-.06-.635.424-.2.1-.428.129-.635.211-.147.059-.27.174-.424.212-.137.034-.286-.034-.423 0-.24.06-.955.552-1.058.635-.234.187-.386.469-.635.635-.132.088-.312.1-.424.212-.794.794-.134.39-.635 1.058-.12.16-.298.267-.423.423-.624.78-.24.4-.635 1.059-.13.218-.343.393-.423.635-.067.2.035.426 0 .635-.037.22-.141.423-.212.635-.07.211-.124.43-.212.635-.124.29-.323.547-.423.846-.045.134.052.293 0 .424-.094.236-.292.416-.423.635-.081.135-.117.297-.212.423-.12.16-.299.267-.423.423-.16.199-.244.455-.424.635-.111.112-.335.08-.423.212-.078.117.045.29 0 .423-.031.095-.141.141-.212.212 0 .14.035.286 0 .423-.038.153-.161.274-.211.423-.022.067.031.149 0 .212-.045.09-.188.115-.212.212-.051.205.042.427 0 .635-.03.154-.162.273-.212.423-.044.134 0 .282 0 .423v.635c0 .07.023.145 0 .212-.05.15-.161.274-.211.423-.022.067.031.149 0 .212-.045.09-.156.129-.212.212-.205.308-.132.44-.423.635-.469.312-.48.085-.847.635-.039.058 0 .14 0 .211-.14.212-.264.437-.423.635-.187.234-.47.386-.635.635-.304.456-.354 1.013-.635 1.482-.262.436-.62.815-.847 1.27-.031.063 0 .141 0 .212 0 .211.067.434 0 .635-.08.24-.329.398-.423.635-.052.13.052.292 0 .423-.095.236-.329.399-.423.635-.053.13.052.292 0 .423-.095.236-.33.399-.424.635-.105.262.09.579 0 .847-.031.094-.14.14-.211.211-.071.142-.174.27-.212.424-.069.274.055.57 0 .846-.044.22-.168.417-.212.635-.027.139 0 .283 0 .424v1.693c0 .212.035.426 0 .635-.036.22-.157.419-.211.635-.017.068 0 .141 0 .212v.846c0 .141-.035.287 0 .424.038.153.173.27.211.423.034.137 0 .282 0 .423 0 .07-.031.149 0 .212.045.09.167.122.212.212.063.126-.063.297 0 .423.045.09.167.122.212.212.031.063-.05.161 0 .211.05.05.18-.063.211 0 .063.126-.034.287 0 .424.039.153.162.273.212.423.022.067-.04.153 0 .212.11.166.304.263.423.423.095.126.141.282.212.423.141.141.299.268.423.423.384.248.388.73.635 1.059.24.32.598.535.847.846.988 1.235-.212.106 1.058 1.059.395.296.663.762 1.058 1.058.127.095.283.141.424.212.14.07.273.161.423.211.067.023.149-.031.212 0 .089.045.122.167.211.212.2.1.444.097.635.212.172.102.258.312.424.423.058.04.148-.031.211 0 .1.05.698.412.847.635.312.468.086.48.635.847.059.039.149-.032.212 0 .455.227.815.619 1.27.846.063.032.143-.017.211 0 .217.054.424.141.635.212.212.07.428.129.635.212.792.316.065.138 1.059.635.063.031.148-.032.211 0 1.228.614-.003.29 1.482.846.545.205 1.141.24 1.693.424.36.12.695.314 1.059.423.344.103.717.098 1.058.212.3.1.551.312.846.423.273.102.565.141.847.212.282.07.559.17.847.211.21.03.431-.058.635 0 .303.087.537.362.846.424.415.083.85-.047 1.27 0 .988.11.513.524 1.694.846.408.112.846 0 1.27 0h1.27c.352 0 .707-.032 1.058 0 .427.039.843.164 1.27.212.42.047.847 0 1.27 0h1.693c.226 0 1.253.046 1.482 0 .437-.088.83-.35 1.27-.424.417-.07.852.07 1.27 0 .22-.036.414-.18.635-.211.279-.04.564 0 .846 0 1.102 0 .704-.055 1.905.211.284.064.558.18.847.212.35.04.705 0 1.058 0h2.117c.211 0 .427.042.635 0 .155-.03.27-.173.423-.212.137-.034.287.035.423 0 .307-.076.541-.346.847-.423.137-.034.29.045.423 0 .095-.031.13-.156.212-.211.131-.088.277-.154.423-.212.635-.254.78-.223 1.482-.423.43-.123.847-.283 1.27-.424.212-.07.435-.112.635-.211.228-.114.417-.293.635-.424.27-.162.584-.248.847-.423.083-.055.128-.156.211-.212.132-.087.292-.124.424-.211.083-.056.122-.167.211-.212.2-.1.428-.129.635-.212.293-.117.565-.282.847-.423.423-.212.864-.392 1.27-.635.218-.13.436-.264.635-.423.156-.125.282-.283.423-.424.07-.07.126-.16.212-.211.27-.163.564-.283.846-.424l.424-.211c.14-.07.27-.174.423-.212.137-.034.297.063.423 0 .179-.09.258-.313.424-.423.058-.04.148.031.211 0 .228-.114.408-.31.635-.424.256-.51.737-.05 1.059-.211.178-.09.245-.334.423-.424.126-.063.292.053.423 0 .237-.094.394-.343.635-.423.201-.067.435.067.635 0 .242-.08.417-.292.635-.423.925-.555-.153.182 1.059-.424.663-.331 1.241-.938 1.905-1.27.2-.1.435-.111.635-.211.227-.114.416-.293.635-.424.405-.243.859-.4 1.27-.635.022-.012 1.26-.842 1.27-.846.267-.115.574-.11.846-.212 1.484-.556.254-.232 1.482-.846.2-.1.426-.134.635-.212.355-.134.702-.29 1.058-.423.209-.079.435-.112.635-.212.368-.184.682-.468 1.058-.635l1.694-.423c.429-.123.83-.35 1.27-.424.417-.07.854.083 1.27 0 .154-.03.273-.162.423-.211.276-.092.561-.155.847-.212.211-.042.423.085.635 0 .236-.095.393-.343.635-.423 2.072-.691-1.228 1.124 1.481-.424.442-.252.815-.619 1.27-.846.2-.1.436-.112.635-.212.228-.114.408-.31.635-.423.2-.1.444-.097.635-.212.171-.103.27-.296.423-.423.494-.412.887-.58 1.27-1.059.16-.198.265-.436.424-.635.311-.39.746-.668 1.058-1.058.098-.123.124-.292.212-.423 1.128-1.693.174-.21 1.058-1.27.226-.271.43-.56.635-.847.148-.207.256-.443.423-.635.329-.375.723-.689 1.059-1.058.37-.408.692-.858 1.058-1.27.199-.224.44-.408.635-.635.23-.268.4-.583.635-.847.331-.373.781-.643 1.058-1.058.162-.242.05-.605.212-.847.14-.211.455-.243.635-.423.05-.05-.023-.145 0-.212.05-.15.117-.297.211-.423.12-.16.9-.939 1.059-1.058.126-.095.336-.08.423-.212.078-.117-.034-.286 0-.423.038-.153.18-.269.212-.424.041-.207 0-.423 0-.635 0-.07-.032-.148 0-.211.987-1.975.052.587.423-1.27.031-.155.153-.277.212-.424.852-2.13-.166.45.211-1.058.346-1.382.114.8.424-1.058.035-.209-.035-.426 0-.635.036-.22.175-.415.211-.635.058-.348-.069-.713 0-1.058.044-.22.168-.417.212-.635.028-.139-.034-.287 0-.424.038-.153.173-.27.212-.423.034-.137 0-.282 0-.423v-.635-1.905-1.482c0-.212.041-.427 0-.635-.031-.155-.153-.277-.212-.423-.702-2.106.2.499-.423-1.059-.083-.207-.168-.416-.212-.635-.028-.138.063-.297 0-.423-.09-.178-.304-.264-.423-.423-.19-.253-.249-.584-.424-.847-.11-.166-.282-.282-.423-.423-.212-.212-.401-.448-.635-.635-.275-.22-.576-.41-.847-.635-.153-.128-.26-.307-.423-.423-1.916-1.369-.185.014-2.116-1.059-.309-.171-.548-.448-.847-.635-.268-.167-.565-.282-.847-.423l-2.116-1.058-.847-.424c-.141-.07-.292-.124-.423-.211-.083-.056-.129-.157-.212-.212-.131-.088-.288-.13-.423-.212-.218-.13-.408-.31-.635-.423-.2-.1-.43-.124-.635-.212-1.864-.798.26-.059-1.905-.846-.42-.153-.858-.254-1.27-.424-.789-.324-1.535-.747-2.329-1.058-.83-.325-1.696-.555-2.54-.847-.99-.343-1.975-.705-2.963-1.058-.987-.353-1.972-.715-2.963-1.058-.843-.292-1.704-.534-2.54-.847-.859-.322-1.69-.71-2.54-1.058-.703-.288-1.423-.535-2.116-.847-1.372-.617-3.028-1.62-4.445-2.116-.614-.215-1.27-.283-1.905-.424-4.331-.962.221-.095-3.387-.423-.29-.026-.56-.164-.847-.212-.139-.023-.282 0-.423 0H266.686c-.096 0-.571-.032-.635 0-.09.045-.123.167-.212.212-.063.032-.149-.032-.212 0-.089.045-.122.167-.211.212-.064.031-.149-.032-.212 0-.09.044-.141.14-.212.211-.07.07-.167.123-.211.212-.032.063.031.148 0 .212-.44.88.014-.227-.424.211-.05.05.032.149 0 .212-.075.15-.348.273-.423.423-.032.063 0 .141 0 .212v1.27z"
        fill="#fff"
        strokeWidth={0.265}
      />
    </g>
  </svg>
)

const MainContent = ({onCountryClick}) => (
  <div>

  </div>
)

const ArContent = ({selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>El señor</h1>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/el-señor-bn.png')}/>
    </div>
    <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="ar"/>
    <YouTube
      videoId='1O_ITAk65Nw'
      opts={opts}
    />
    <p>This song came about after Dan Rubenstein asked me to write a song that talks about “Family Relations” for the movie I would be acting in. Dan was the director of “Noemi Gold” and I was to sing this song in the movie.</p>
    <img src={require('../../../../static/images/argentina-2.jpg')} style={{width: '100%'}}/>
    <p>It came about very easily and naturally. I improvised the lyrics on a repetitive beat I had going on my headphones.</p>
    <p>The final arrangement came later as I was playing what I thought sounded like folklore guitar from La Cuenca del Plata (area that takes eastern Argentina and Uruguay).</p>
    <p>In Buenos Aires I met Alejandro Domiguez, Juan Cruz Zaballa’s (Tall Juan) uncle, who is very good at this music style.</p>
    <p>I traveled from Buenos Aires, Capital Federal to San Antonio de Padua, in Buenos Aires Province, where Alejandro lives. There Duilio De Buono assisted the session and lent us his studio to set up the equipment and record. It took us a lot of work to find a way to add his guitar style to the song but we did.</p>
    <img src={require('../../../../static/images/argentina-1.jpg')} style={{width: '100%'}}/>
    <h3>Musicians:</h3>
    <ul>
      <li>Alejandro Dominguez: Guitarra</li>
    </ul>
  </div>
)

const UrContent = ({selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>Candombe instrumental</h1>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="ur"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/candombe-instrumental.png')}/>
    </div>
    <YouTube
      videoId='tNu7iu85tmE'
      opts={opts}
    />
    <p>This melody came to me while walking with my guitar in Buenos Aires a couple of days before going to Montevideo.</p>
    <img src={require('../../../../static/images/uruguay-1.jpg')} style={{width: '100%'}}/>
    <p>When I got to the city that saw me be born I thought of different ways of capturing this melody on a candombe (traditional Afro-Uruguayan drum rhythm). Initially I wanted to record the drums in their natural environment, the street. After many failed attempts, I decided to record just three people in a room. We recorded the drums in Federico Graña’s studio and that’s all I took from Montevideo. The rest of the instruments were recorded in NY during the summer of 2018.</p>
    <p>One day, after watching Uruguay get disqualified from the World Cup, in tears, on a bus on my way home I wrote a poem. In the poem I imagined being a little child who in dreams saw himself as a professional soccer player. I thought of that and how a game among friends and game in the World Cup is essentially the same, 22 people playing soccer.</p>
    <img src={require('../../../../static/images/uruguay-2.jpg')} style={{width: '100%'}}/>
    <p>Once I had the poem, I thought of adding it to Candombe Instrumental. I invited my dad to recite it because I wanted to share this with him and also because he is from Montevideo and I knew he would get the right feeling.</p>
    <h3>Musicians:</h3>
    <ul>
      <li>Nicolás Roman: Tambor piano</li>
      <li>Gonzalo Redin: Tambor chico</li>
      <li>Federico "Fefo" Baraldo: Tambor repique</li>
      <li>Juan Cruz Zaballa: Bajo, guitarras</li>
      <li>Amanda Rodi: Flauta</li>
      <li>Ben Trimble: Piano</li>
      <li>Alberto Wauters: Voz recitada</li>
    </ul>
  </div>
)

const ClContent = ({selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>Mi vida</h1>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="cl"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/mi-vida.png')}/>
    </div>
    <YouTube
      videoId='425MWR5ruHs'
      opts={opts}
    />
    <p>One night I ended up at a <em>peña</em> in Santiago. There I saw payadores play and sing to each other. I left thinking about how good they were with their music. As the night continued I met Manuela. She said she was related to one of the guys that had just played. I asked her if she thought he would record with me. She said to call him and ask. I did.</p>
    <img src={require('../../../../static/images/chile-1.jpg')} style={{width: '100%'}}/>
    <p>His name was Luciano. He plays guitarrón chileno, a traditional string instrument from Chile that has twenty-five strings and its origins are unknown. I talked to him on the phone and told him about the project. He said he was happy to participate. We met one night at a plaza in Barrio Independencia. We practiced the song many times trying to find the right arrangement.</p>
    <p>A couple of days after we arranged to meet and record the song. We did it at his house. We shared food and juice as we stopped for a little break.</p>
    <p>We played it many times until we got to have it sound distressed and natural.</p>
    <img src={require('../../../../static/images/chile-3.jpg')} style={{width: '100%'}}/>
    <p>After that we packed the studio and talked for some time under a grape vine in the patio.</p>
    <p>The flutes were recorded later by Pedro “Piter” Davila in my room in Tlatelolco, Mexico City.</p>
    <img src={require('../../../../static/images/chile-4.jpg')} style={{width: '100%'}}/>
  </div>
)

const PeContent = ({selectedPlayer, onSelectPlayer}) => (
  <div>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/un-buen-dia-hoy-sera-bn.png')}/>
    </div>
    <h1>Un buen día hoy será</h1>
    <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="pe"/>
    <YouTube
      videoId='DSXajN4_vwI'
      opts={opts}
    />
    <p>I met Walter at Plaza 2 de Mayo in Lima. There are many music stores around there and it's where musicians gather. I would hang out around that area because I thought it would be a good place to meet people to play with.</p>
    <img src={require('../../../../static/images/harpa.jpg')} style={{width: '100%'}}/>
    <p>One day walking through the stores with my friend Humberto, I saw Walter holding the harp while talking to a friend. I said hello and asked him if he would play a bit. I was very impressed by the size of the instrument and its presence. He played for about five seconds and stopped. In that little time I was able to see his fingers so stylized stroke the strings. It sounded beautiful. I was too intimidated by him to ask him anything else so I said thanks and left.</p>
    <p>I kept thinking of him and his harp. One day I gathered courage and went back to talk to him. I asked him if he would play on a recording with me and he said he would. Then I had to think what song would go well with such instrument. Un Buen Día Hoy Será was not part of the initial selection of songs I had when I started the trip. I had written it in NY as a “workers chant”, as a march song. I only had the repetitive melody and the words but because of its nature, it felt that it could work.</p>
    <p>Walter and I had daily meetings to hang out and practice. We worked the arrangement together playing in his store while he sold harps. The recording was done at Humberto’s home the day before I left Lima.</p>
    <h3>Musicians:</h3>
    <ul>
      <li>Walter Edwin Cornelio Cancha: Arpa</li>
    </ul>
  </div>
)

const MxContent = ({onCountryClick, selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>Blues chilango</h1>
    <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="mx"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/blues-chilango.png')}/>
    </div>
    <YouTube
      videoId='6IhBlBhoOU0'
      opts={opts}
    />
    <p>This is the first song I wrote during the time I lived in Mexico. When listening to it, I clearly see how the lyrics describe the first impressions the city made on me. There are two parts to it: one mentions snippets of my daily living in my neighborhood (Santa Maria la Ribera) and the other part is three observations on their subways system.</p>
    <p>When it came time to record this song, I knew I wanted to do it in Mexico. I recorded the guitars and the vocals in my room in Tlatelolco. After that I invited Izakúm to do the percussions. Once the song had an structure I started to look for a saxophone player. I looked endlessly and asked everyone I knew but could not find one in Mexico. At the end, this worked in my favor. My next destination was San Juan, PR and there I came across Juan Botta. He came an afternoon to where I was staying and we worked the arrangement together. He did a beautiful job at doubling the saxophone solo to get that bigger, richer sound.</p>
    <img src={require('../../../../static/images/mexico-blues-chilango.jpg')} style={{width: '100%'}}/>
    <h3>Musicians:</h3>
    <ul>
      <li>Izakúm Vazquez: Bongo</li>
      <li>Juan Botta: Saxo</li>
    </ul>

    <div className="pagination">
      <a className="pagination--item pagination--item-next" onClick={(e) => { e.stopPropagation(); onCountryClick('mx2')}}></a>
    </div>
    
  </div>
)

const Mx2Content = ({onCountryClick, selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>A Volar</h1>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="mx2"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/a-volar.png')}/>
    </div>
    <YouTube
      videoId='11mEEvCd614'
      opts={opts}
    />
    <p><em>A Volar</em> is one of the many songs that came up during my stay in Mexico City. There I was fascinated and very inspired by the strength of their local culture. I saw tradition reign over all the different aspects of society.</p>
    <p>The song came up as a chant to myself from the "fantasy me" that helps me through during difficult times in my life. This "fantasy me" is an alter ego created in my expression that sets the path for me to follow. In this song, this character invites me to live an adventurous life and face it by fighting back the adversities of this modern life.</p>
    <img src={require('../../../../static/images/mexico-a-volar.jpg')} style={{width: '100%'}}/>
    <p>The arrangement came after a conversation I had with my friend David. He lives in a smaller town outside Mexico city and we met during one of my visits. He likes all different types of music and we often have conversations about this. When he heard the demo I had recorded for <em>A Volar</em> he thought it sounded like a Bolero Ranchero, a Mexican genre. From that conversation, I dug into this music style and designed the arrangement for the final version.</p>
    <p>I met René and Yonathan through Pati, she had played marimba on <em>Disfruta la Fruta</em>. They both work at Garibaldi (popular square in Mexico City where musicians for hire gather to be picked up). They came to Tlatelolco where I had my recording equipment and we recorded there. The accordion was recorded in Oswaldo’s studio. He improvised the arrangement. Following Juan’s idea of recording the accordion twice, Oswaldo did a extraordinary job at having them both compliment each other.</p>
    <h3>Musicians:</h3>
    <ul>
      <li>René Martínez Ramírez: Vihuela</li>
      <li>Yonathan Alvarez: Guitarrón</li>
      <li>Oswaldo Polikarpo: Acordeón</li>
    </ul>
    <div className="pagination">
      <a className="pagination--item pagination--item-prev" onClick={(e) => { e.stopPropagation(); onCountryClick('mx')}}></a>
      <a className="pagination--item pagination--item-next" onClick={(e) => { e.stopPropagation(); onCountryClick('mx3')}}></a>
    </div>
  </div>
)

const Mx3Content = ({onCountryClick, selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>Disfruta la fruta</h1>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="mx3"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/disfruta-la-fruta.png')}/>
    </div>
    <YouTube
      videoId='tbcr1-V9l7g'
      opts={opts}
    />
    <p>This song came about after hearing the phrase “Disfruta la Fruta” and having noticed how good the fruit was in Mexico. I wanted it to be like a fruit seller's chant, something similar to what I would hear at the different fruit markets around the city.</p>
    <p>For this song both musicians were asked to play along an improvisation on the key of G major. The backing vocals were added in NY during a summer evening with Laura and Joana.</p>
    <img src={require('../../../../static/images/mexico-disfruta-la-fruta.jpg')} style={{width: '100%'}}/>
    <h3>Musicians:</h3>
    <ul>
      <li>Pedro Davila: Flute</li>
      <li>Pati Vazquez Ortega: Mexican Marimba</li>
      <li>Laura Pereira: Coro</li>
      <li>Joana Bem-Haja: Coro</li>
    </ul>
    <div className="pagination">
      <a className="pagination--item pagination--item-prev" onClick={(e) => { e.stopPropagation(); onCountryClick('mx2')}}></a>
    </div>
  </div>
)



const PrContent = ({selectedPlayer, onSelectPlayer}) => (
  <div>
    <h1>Guapa</h1>
        <Players selectedPlayer={selectedPlayer} onSelectPlayer={onSelectPlayer} country="pr"/>
    <div className="song-image-container">
      <img className="song-image" src={require('../../../../static/images/guapa.png')}/>
    </div>
    <YouTube
      videoId='qisi0PsDTI8'
      opts={opts}
    />
    <p>Puerto Rico was one of the first destinations I visited on my early trips to Latin America. Puerto Ricans are great hosts on their island. They like to show their culture to visitors. One day I was out with friends and they took me to Charco Azul in Guavate. On our way up we stopped to eat lechón (grilled pork). At the restaurant there was a duo playing boleros. I had heard this music since my childhood, but I had never seen it in its original context. That music then made a great impact on me.</p>
    <img src={require('../../../../static/images/puerto-rico-1.jpg')} style={{width: '100%'}}/>
    <p>A couple of days after, out in NY, I came up with the repetitive melody that ended up being the main refrain in Guapa. I thought of that melody as the guitar accompaniment in between verses in a bolero song. That melody kept swinging in my head. I was thinking of different ideas for the verses until one day the final melody and lyrics came to me as I rode the subway.</p>
    <p>Once I had the song, I started playing it live and trying out different ways to have it exist.</p>
    <img src={require('../../../../static/images/puerto-rico-2.jpg')} style={{width: '100%'}}/>
    <p>The length of the song is naturally short and in concerts, based on how well received it was, I would sing it indeterminately, for as long as the song and the audience asked for it to be sang. There were times when the song was played for 20/30 minutes within the concert.</p>
    <p>When it came time to record it, I knew I had to do it in Puerto Rico. It took time to come up with an arrangement and get the crew together, but it finally happened. We got together at my friend, Monica’s, apartment in Santurce one afternoon and among sweat, food, and drinks we recorded the song.</p>
    <h3>Musicians:</h3>
    <ul>
      <li>Andrés Fontánez (Los Nervios): Cuatro</li>
      <li>Braulio Salvá: Cuatro</li>
      <li>Ángel "Papo" del Valle: Congas, clave</li>
      <li>Javier Alayón: Bongó, maracas</li>
      <li>Laura Ferreira: Vocals</li>
      <li>Ben Trimble: Bass</li>
    </ul>
  </div>
)

const countries = {
  main: {
    content: MainContent,
    published: true
  },
  ar: {
    // el señor
    content: ArContent,
    published: true,
    tracks: {
      spotify: "spotify:track:3lPLuRKS51Pd8upmkcg76q",
      appleMusic: "https://embed.music.apple.com/us/album/el-se%C3%B1or/1440522694?i=1440522697",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343442&app_id=1",
    }
  },
  ur: {
    // candombe
    content: UrContent,
    published: true,
    tracks: {
      spotify: "spotify:track:0DTMZwvMOLaKbYaJUzHovk",
      appleMusic: "https://embed.music.apple.com/us/album/camdombe/1440522694?i=1440522700",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343472&app_id=1",
    }
  },
  cl: {
    // mi vida
    content: ClContent,
    published: true,
    tracks: {
      spotify: "spotify:track:5q6Zmyz6auO3L6OpEBbbuU",
      appleMusic: "https://embed.music.apple.com/us/album/mi-vida/1440522694?i=1440522942",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343492&app_id=1",
    }
  },
  mx: {
    // blues chilango
    content: MxContent,
    published: true,
    tracks: {
      spotify: "spotify:track:5WkeBLyYW4eIhYsHZKUxTh",
      appleMusic: "https://embed.music.apple.com/us/album/blues-chilango/1440522694?i=1440522698",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=album&id=81142092&app_id=1",
    }
  },
  mx2: {
    // a volar
    content: Mx2Content,
    published: true,
    tracks: {
      spotify: "spotify:track:6lxmCMwdTHpwTRKSYdTLVe",
      appleMusic: "https://embed.music.apple.com/us/album/a-volar/1440522694?i=1440522943",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=album&id=79384542&app_id=1",
    }
  },
  mx3: {
    // disfruta la fruta
    content: Mx3Content,
    published: true,
    tracks: {
      spotify: "spotify:track:33IIElpih88iQA8chj62gU",
      appleMusic: "https://embed.music.apple.com/us/album/disfruta-la-fruta/1440522694?i=1440522696",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343432&app_id=1",
    }
  },
  pr: {
    // guapa
    content: PrContent,
    published: true,
    tracks: {
      spotify: "spotify:track:1CApXq6kUijOio6jWvdDGF",
      appleMusic: "https://embed.music.apple.com/us/album/guapa/1440522694?i=1440522699",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=576449622&app_id=1",
    }
  },
  pe: {
    // un buen día hoy será
    content: PeContent,
    published: true,
    tracks: {
      spotify: "spotify:track:6PmoQsUujiJZtqPGxXiYIM",
      appleMusic: "https://embed.music.apple.com/us/album/un-buen-d%C3%ADa-hoy-s%C3%A9ra/1440522694?i=1440522941",
      deezer: "https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=603343482&app_id=1",
    }
  }
}

class Index extends Component {
  constructor() {
    super();
    this.state = {
      country: countries.main,
      countryId: 'main',
      showIntro: true,
      selectedPlayer: null,
      showComingSoon: false,
      showStartHere: true,
      showVideo: true,
    }
    this.changeCountry = this.changeCountry.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);
    this.hideIntro = this.hideIntro.bind(this);
    this.showVideo = this.showVideo.bind(this);
    this.hideVideo = this.hideVideo.bind(this);

  }
  componentDidMount() {
    window.onhashchange = (e) => {
      const hash = e.newURL.split("#")[1] || 'main';
      this.changeCountry(hash);
    }    
  }
  selectPlayer(player) {
    this.setState({
      selectedPlayer: player,
    })
  }
  changeCountry(country) {
    const countryData = countries[country];
    if (countryData && countryData.published) {
      this.setState({
        country: countryData,
        countryId: country,
      });
      // if (country === 'main') {
      //   this.props.closeMenu();
      // } else {
      //   this.setState({
      //     showStartHere: false,
      //   });
      //   this.props.hideMenu();
      //   this.forceUpdate();
      // }
      this.hideComingSoon();
      this.hideIntro(); 
      window.history.pushState( { title: country }, country, '#' + country );
    } else {
      this.setState({
        showComingSoon: true,
      });
      // this.props.hideMenu();
      this.hideIntro();
      window.history.pushState( { title: "Coming Soon" }, "coming-soon", '#coming-soon');
    }
  }
  hideIntro() {
    this.setState({
      showIntro: false,
    })
    // this.props.closeMenu();
  }
  showIntro() {
    this.setState({
      showIntro: true,
    })
    // this.props.hideMenu();
  }
  hideComingSoon() {
    this.setState({
      showComingSoon: false,
    })
    window.history.pushState( { title: "main" }, "main", '#main');
  }

  showVideo() {
    this.setState({
      showVideo: true,
    })
  }

  hideVideo() {
    this.setState({
      showVideo: false,
    })
    //this.refs.vidRef.resetPlayer();
    window.scrollTo(0, 0);
  }

  render() {
    const {country, countryId, showIntro, selectedPlayer, showComingSoon, showStartHere, showVideo} = this.state;
    return (
      <div className="page">
        <div className="content">
          <div className="map-container">
            <div className="map-container-inner">
              <Map className="map" pose={countryId}>
                <SvgComponent onCountryClick={this.changeCountry} showStartHere={showStartHere}/>
              </Map>
            </div>
          </div>
          
          <IntroContent  pose={showIntro?'shown':'hidden'} className="intro-content">
            <div className="intro-content-inner">
              {showVideo ? (<div>
                <h1>Welcome to: “La Onda de Juan Pablo”</h1>
                <p>“La Onda de Juan Pablo” is a collection of songs recorded with local musicians during a trip across Latin America.</p>
                <p>Juan has set up an interactive map that journals his travels and experiences during the creative process of this album, but first here’s a message from Juan himself:</p>
                <br/>
                <YouTube
                  videoId='XOTv1AQtZ4E'
                  opts={opts}
                  ref="vidRef"
                />
                <br/>
                <ClickableImage className="skip-video-link" width="300" onClick={this.hideVideo} src={require('../../../../static/images/continue.png')}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>) : (<div>
                <p>Click through the map to learn more about the trip and listen to the music that was made there!</p>
                <p>As more music is released, more of the map will be interactive so make sure to check back for updates or subscribe to know the moment they go live!</p>
                <img width="240" border="3" onClick={this.hideIntro} src={require('../../../../static/images/instructions.png')}/>
                <ClickableImage className="vamos-link" width="300" onClick={this.hideIntro} src={require('../../../../static/images/lets-go.png')}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>)}
            </div>
          </IntroContent>

          <CountryContent pose={countryId==='main'?'hidden':'shown'} className="country-content-container" onClick={() => this.changeCountry('main')}>
            <div className="country-content">
              <div className="country-content-inner" onClick={(e) => e.stopPropagation()}>
                <country.content onCountryClick={this.changeCountry} onSelectPlayer={this.selectPlayer} selectedPlayer={selectedPlayer}/>
              </div>
              <div className="close" onClick={() => this.changeCountry('main')}></div>
            </div>
          </CountryContent>

          <ComingSoon pose={showComingSoon?'shown':'hidden'} className="coming-soon-container" onClick={() => this.hideComingSoon()}>
            <div className="coming-soon">
              <div className="coming-soon-inner" onClick={(e) => e.stopPropagation()}>
                <img className="coming-soon-image" src={require('../../../../static/images/coming-soon.png')} />
                <p>These songs will be released soon. Subscribe to receive updates as they come out.</p>
                <script type="text/javascript" src="/static.klaviyo.com/onsite/js/klaviyo.js?company_id=CgmLs9"></script>
                <div className="klaviyo-form-LbkF4Z"></div>
              </div>
              <div className="close" onClick={() => this.changeCountry('main')}></div>
            </div>
          </ComingSoon>
        </div>
      </div>
    )
  }
}
export default Index;
