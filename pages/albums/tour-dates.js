import React, { Component } from 'react';

class Tour extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }
  render() {
    return (
      <div className="page">
          <div className="content">   
              <script charSet="utf-8" 
                  src="https://widget.bandsintown.com/main.min.js"></script>
              <div className="tour-content">
                <div className="tour-content-inner">
                  <h1>Tour Dates</h1>
                  <a className="bit-widget-initializer" 
                      data-artist-name="juan wauters"
                      data-display-local-dates="false"
                      data-display-past-dates="false"
                      data-auto-style="false"
                      data-text-color="#000000"
                      data-link-color="#00b4b3"
                      data-popup-background-color="#FFFFFF"
                      data-background-color="rgba(0,0,0,0)"
                      data-display-limit="15"
                      data-link-text-color="#FFFFFF"
                      data-display-lineup="false"
                      data-separator-color=""></a>
                </div>
              </div>
          </div>
          <style global jsx>{`
            /* .tour-content {
              position: absolute;
              left:0;
              top:0;
              width: 100%;
              height: 100%;
              padding: 60px;
              box-sizing: border-box;
              display: flex;
              justify-content: center;
            }
            .tour-content-inner {
              background-color: white;
              text-align: center;
              border: 3px solid #000;
              padding: 20px;
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              max-width: 760px;
              overflow-y: scroll;
            } */


            .tour-content {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              overflow-y: scroll;
              -webkit-overflow-scrolling: touch;
              padding: 120px 263px 0 240px;
              box-sizing: border-box;
              background-color: white;
            }
            .tour-content-inner {
              width: 477px;
              padding-bottom: 240px;
            }
            @media (max-width: 980px) {
              .tour-content {
                display: flex;
                justify-content: center;
                padding: 40px 20px 0 20px;
              }
            }

            .bit-upcoming-events {
              margin: 0!important;
            }
            
            .bit-nav-bar-container,
            .bit-top-track-button {
              padding: 0!important;
            }


          `}</style>
      </div>
    );
  }
}
export default Tour;
