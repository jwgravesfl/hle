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
      background-color: purple;
    }

    .module1 {
      float: left;
      height: 25vh;
      width: 25vw;
      background-color: ;
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


  
`;



export default class Bio extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="homeContainer">
        <div class="grid">
          <div class="module1"></div>
          <div class="module">2</div>
          <div class="module">3</div>
          <div class="module">4</div>
          <div class="module">5</div>
          <div class="module">6</div>
          <div class="module">7</div>
          <div class="module">8</div>
          <div class="module">9</div>
          <div class="module">10</div>
          <div class="module">11</div>
          <div class="module">12</div>
          <div class="module">13</div>
          <div class="module">14</div>
          <div class="module">15</div>
          <div class="module">16</div>
        </div>
        <div className="buttonDiv">
          <Link to='/showcase'><button className="button">Continue the Tour</button></Link>
        </div>

        </div>
      </MainDiv>

    )
  }
}