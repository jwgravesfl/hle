import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



import imgOpenMic from '../assets/openMic.jpg'
import imgKaraoke from '../assets/karaoke.jpg'
import imgLive from '../assets/live.jpg'
import imgDJ from '../assets/dJ.jpg'

import Live from './bio/Live'
import OpenMic from './bio/OpenMic'
import Karaoke from './bio/Karaoke'
import DJ from './bio/Dj'
import Back from './bio/Back'

const MainDiv = styled.div`
.homeContainer {
  padding-top: ;
  text-align: right;
  background-color: #d90008;
  width: 100%;
  
  height: 100vh;
   
  }
  .grid {
    .module {
      float: left;
      height: 25vh;
      width: 25vw;
      background-color: ;

      @media only screen and (max-width: 600px) {
        width: 99vw;
        height: 50vh;
      }


    }
    .module1 {
      float: left;
      height: ;
      width: 25vw;
      background-color: ;
      .module1a {
        height: 15vh;

        @media only screen and (max-width: 600px) {
          height: 8vh;
        }
      }
      .module1b {
        height: 2vh;
        text-align: center;
        font-size: 3vh;
        background-color: ;
      }
    }
  }
  .buttonDiv {
    width: ;
    padding-top: 10vh;
    position: fixed;
    bottom: 5vh;
    right: 5vw;
    
    @media only screen and (max-width: 600px) {
      padding-right: 0;
    }
  }
  .button {
    width: 20vw;
    padding: 10px;
    margin: 10px;
    background: black;
    color: #fff;
    font-size: 2vw;
    font-weight: bold;
    line-height: 1.3em;
    border: 2px dashed #fff;
    border-radius: 10px;
    box-shadow: 0 0 0 4px black, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
    text-shadow: -1px -1px #aa3030;
    font-weight: normal;

    @media only screen and (max-width: 600px) {
      width: 50vw;
      font-size: 5vw;
    }
 }
  
  .button:hover {
    background: white;
    color: red;
    border: 2px dashed black;
    box-shadow: 0 0 0 4px white, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
  }
  .cardBio {
    width: 24vw;
    height: 50vh;
    float: left;
    perspective: 500px;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }

  }
  
  .contentBio {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
  
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  
  .cardBio:hover .contentBio {
    transform: rotateY( 180deg ) ;
    transition: transform 0.5s;
  }
  
  .frontBio {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgOpenMic});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }

  .backBio {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgOpenMic});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }

  }
  
  .backBio {
    background: ;
    color: ;
    transform: rotateY( 180deg );
  }

  .frontBioOpenMic {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgOpenMic});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }

  .backBioOpenMic {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }

  }
  
  .backBioOpenMic {
    background: ;
    color: ;
    transform: rotateY( 180deg );
  }

  .frontBioKaraoke {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgKaraoke});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }

  .backBioKaraoke {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }
  
  .backBioKaraoke {
    background: ;
    color: ;
    transform: rotateY( 180deg );
  }

  .frontBioLive {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgLive});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }

  .backBioLive {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }
  
  .backBioLive {
    background: ;
    color: ;
    transform: rotateY( 180deg );
  }

  .frontBio {
    position: absolute;
    height: 100%;
    width: 100%;
    background: ;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: url(${imgDJ});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }

  .backBio {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    color: ;
    text-align: center;
    font-size: 5vh;
    border-radius: 5px;
    backface-visibility: hidden;
    background-image: ;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 24vw;
    height: 50vh;

    @media only screen and (max-width: 600px) {
      width: 99vw;
      height: 50vh;
    }
  }
  
  .backBio {
    background: ;
    color: ;
    transform: rotateY( 180deg );
  }

  .serviceCardOpenMic {
    
  }
  
`;



export default class Bio extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="homeContainer">
          <div className="grid">
            <div className="module1">
              <div className="module1a">
              </div>
              <div className="module1b">
              </div>
            </div>
            <div className="module1">
             <div className="module1a">
                
              </div>
              <div className="module1b">
                 
              </div>
            </div>
            <div className="module1">
              <div className="module1a">
                
              </div>
              <div className="module1b">
              </div>
            </div>
            <div className="module1">
              <div className="module1a">
                
              </div>
              <div className="module1b">
                
              </div>
            </div>
            <div className="module">
              
                <div className="cardBio" onClick="">
                  <div className="contentBio">
                    <div className="frontBioLive">
                      <Live />
                    </div>
                    <div className="backBioLive">
                    <Back />
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="module"> <div className="serviceCardOpenMic">
                <div className="cardBio" onClick="">
                  <div className="contentBio">
                    <div className="frontBioOpenMic">
                      <OpenMic />
                    </div>
                    <div className="backBioOpenMic">
                    <Back />
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="module"> <div className="serviceCard">
                <div className="cardBio" onClick="">
                  <div className="contentBio">
                    <div className="frontBio">
                      <DJ />
                    </div>
                    <div className="backBio">
                    <Back />
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="module"> <div className="serviceCard">
                <div className="cardBio" onClick="">
                  <div className="contentBio">
                    <div className="frontBioKaraoke">
                      <Karaoke />
                    </div>
                    <div className="backBioKaraoke">
                      <Back />
                    </div>
                  </div>
                </div>
              </div></div>

          </div>
          <div className="buttonDiv">
            <Link to='/contact'><button className="button">Book HLE</button></Link>
          </div>
          </div>
        
      </MainDiv>

    )
  }
}