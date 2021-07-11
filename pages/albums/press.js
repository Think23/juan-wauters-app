import React, { Component } from 'react';
import YouTube from 'react-youtube';
const opts = {
  width: "100%",
  playerVars: {
    autoplay: 0
  }
};
class About extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }
  render() {
    return (
      <div className="page">
          <div className="content">   
              <div className="about-content">
                <div className="about-content-inner">
                  <h1>Press</h1>
                  <YouTube
                    videoId='LLxln5qA2Cw'
                    opts={opts}
                    ref="vidRef"
                  />
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>
              </div>
          </div>
          <style global jsx>{`
            .about-content h2 {
              margin-top: 2em;
              margin-bottom: 0;
            }
            .about-content {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              padding: 120px 263px 0 200px;
              box-sizing: border-box;
              background-color: white;
              line-height: 1.58;

            }
            .about-content-inner {
              width: 740px;
              padding-bottom: 240px;
              font-size: 21px;
            }
            @media (max-width: 980px) {
              .about-content {
                display: flex;
                justify-content: center;
                padding: 40px 20px 0 20px;
              }
              .about-content-inner {
                width: 477px;
                font-size: 16px;
              }
            }
            
          `}</style>
      </div>
    );
  }
}
export default About;