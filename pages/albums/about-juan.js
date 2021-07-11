import React, { Component } from 'react';

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
                  <h1>About Juan</h1>

                  <p>Over the last few years, Latin American artist Juan Wauters has covered a lot of ground, both artistically and geographically. In 2016, Wauters directed the film <em>Romane en Juin</em> in the Southwest of France and in 2017 he performed for the first time in his birthplace of Uruguay. He’s also been traveling Latin America extensively, taking time to pause and rethink his life, his art and his career after releasing two critically acclaimed albums on Captured Tracks, 2014’s <em>N.A.P.: North American Poetry</em> and 2015’s <em>Who Me?</em>.</p>
                  <p>As both time and place often have a unique influence on music, Wauters originally planned to record his next album while traveling, seeking a break from his life in New York City, the city he has called home since moving from Montevideo in 2002. He settled in Mexico City in 2017 to focus on writing. However, shortly after, he was offered a role in an independent film being shot in Argentina. Never one to turn down a creative opportunity, Wauters packed up his 100 pound mobile recording studio into two suitcases and took off to Buenos Aires. When filming was complete, Wauters wound up writing and recording all over Latin America — from Argentina, Uruguay, Peru, and Chile to Mexico and Puerto Rico — seeking collaboration at every stop with local musicians who embody the traditions and energies specific to each region.</p>
                  <p>Puerto Rico was one of his first destinations. At a restaurant on the way to Charco Azul in Guavate – a natural swimming hole – Wauters heard a duo playing boleros, music he has been familiar with since his early childhood, but had never experienced in its original context. Those boleros would inspire the repeating melody that makes up the infectious love song, “Guapa.” Later, Mexico City was to become the home of “A Volar,” a beautiful, buoyant track about dreaming wildly that features multiple musicians that Wauters met in Garibaldi, a popular square in Mexico City where musicians for hire gather. Later, he would trek to Buenos Aires, Santiago and Montevideo, creating music and incorporating local traditions into his idiosyncratic, captivating yarns.</p>
                  <p>Until this point in his career, most of his songs had been sung in English, but revisiting his Latin roots inspired him to record songs in his native tongue. Thus, Wauters gives us the wonderful La Onda de Juan Pablo, the world of Juan Pablo Wauters.</p>
                  <p><img src={require('../../static/images/about.jpg')} width="100%"/></p>
                  <h2>Management</h2>
                  <p><a href="mailto:gustavo@juanwauters.com">gustavo@juanwauters.com</a></p>
                  <h2>Press</h2>
                  <p>North America<br/>
                  <a href="mailto:baileys@grandstandhq.com">baileys@grandstandhq.com</a></p>
                  <p>UK and EU<br/>
                  <a href="mailto:chris.cuff@goodmachinepr.com">chris.cuff@goodmachinepr.com</a></p>
                  <h2>Booking</h2>
                  <p>North America<br/>
                  <a href="mailto:gustavo@juanwauters.com">gustavo@juanwauters.com</a></p>
                  <p>UK and EU<br/>
                  <a href="mailto:niall@pitchandsmith.com">niall@pitchandsmith.com </a></p>
                  <h2>Label and Rights</h2>
                  <p><a href="mailto:pam@capturedtracks.com">pam@capturedtracks.com</a></p>
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