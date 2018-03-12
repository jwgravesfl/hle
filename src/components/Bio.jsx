import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {Grid} from 'semantic-ui-react'

import img from '../assets/equipmentPic.png'
import imgMobile from '../assets/equipmentPicMobile.png'

import imgLongLogo from '../assets/hleLongLogo.png'

const MainDiv = styled.div`
.homeContainer {
  padding-top: ;
  text-align: right;
  background-color: #d90008;
  width: 100%;
  
  height: 100vh;

    @media only screen and (max-width: 600px) {
      background-image: url(${imgMobile});
      text-align: center;
    }
  }

  .grid {

    .module {
      float: left;
      height: 25vh;
      width: 25vw;
      background-color: ;
    }

    .module1 {
      float: left;
      height: ;
      width: 25vw;
      background-color: ;

      .module1a {
        height: 15vh;
      }

      .module1b {
        height: 10vh;
        text-align: center;
        font-size: 3vh;
        background-color: ;
        padding-top: 7vh;
      }
    }
  }

  .buttonDiv {
    width: ;
    padding-top: 10vh;
    position: absolute;
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

  .card {
    width: 24vw;
    height: 50vh;
    float: left;
    perspective: 500px;
  }
  
  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  
  .card:hover .content {
    transform: rotateY( 180deg ) ;
    transition: transform 0.5s;
  }
  
  .front,
  .back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 24vh;
    color: #03446A;
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    backface-visibility: hidden;
  }
  
  .back {
    background: #03446A;
    color: white;
    transform: rotateY( 180deg );
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
                1a
              </div>
              <div className="module1b">
                Live Music
              </div>
            </div>
            <div className="module1">
             <div className="module1a">
                1a
              </div>
              <div className="module1b">
                Open Mic
              </div>
            </div>
            <div className="module1">
              <div className="module1a">
                1a
              </div>
              <div className="module1b">
                DJ Services
              </div>
            </div>
            <div className="module1">
              <div className="module1a">
                1a
              </div>
              <div className="module1b">
                Karaoke
              </div>
            </div>
            <div className="module">
              <div className="serviceCard">
                <div class="card">
                  <div class="content">
                    <div class="front">
                      Live Music
                    </div>
                    <div class="back">
                      Back!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="module"> <div className="serviceCard">
                <div class="card">
                  <div class="content">
                    <div class="front">
                      Open Mics
                    </div>
                    <div class="back">
                      Back!
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="module"> <div className="serviceCard">
                <div class="card">
                  <div class="content">
                    <div class="front">
                      DJ Services
                    </div>
                    <div class="back">
                      Back!
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="module"> <div className="serviceCard">
                <div class="card">
                  <div class="content">
                    <div class="front">
                      Karaoke
                    </div>
                    <div class="back">
                      Back!
                    </div>
                  </div>
                </div>
              </div></div>

          </div>
          <div className="buttonDiv">
            <Link to='/showcase'><button className="button">Continue the Tour</button></Link>
          </div>
          </div>
        
      </MainDiv>

    )
  }
}