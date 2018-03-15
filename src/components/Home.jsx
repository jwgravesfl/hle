import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import img from '../assets/heatherRedMic.png'
import imgMobile from '../assets/heatherRedMicMobile.png'

import imgLongLogo from '../assets/hleLongLogo.png'

const MainDiv = styled.div`
.homeContainer {
  padding-top: 1vh;
  text-align: right;
  background-color: ;
  width: 100%
  height: 100%;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;

    @media only screen and (max-width: 600px) {
      background-image: url(${imgMobile});
      text-align: center;
    }
  }

  .longLogo {
    width: ;
    padding-top: 20vh;
    padding-right: 5vw;
    

    img {
      width: 45vw;
      
    }
    
    @media only screen and (max-width: 600px) {
      padding-top: 35vh;
      padding-right: 0;

      img {
        width: 85vw;
        background-color: white;
        background-color:rgba(255, 255, 255, 0.2);
        border-radius: 1vh;
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
  
  .button:hover  {
    background: white;
    color: red;
    border: 2px dashed black;
    box-shadow: 0 0 0 4px white, 2px 1px 6px 4px rgba(10, 10, 0, 0.5);
  }


  
`;



export default class Home extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="homeContainer">
              <div className="longLogo">
               <img src={imgLongLogo} width="" height="" alt="HLE Logo"/>
              </div>
              <div className="buttonDiv">
                <Link to='/bio'><button className="button">Take the Tour</button></Link>
              </div>

        </div>
      </MainDiv>

    )
  }
}