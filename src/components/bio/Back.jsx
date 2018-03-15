import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const ShowcaseMainDiv = styled.div`
.showcaseContainer {
  padding-top: 1vh;
  text-align: center;
  background-color: ;
  width: 100%
  height: 100%;

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
}

`;



export default class Back extends Component {
  state = {}

  render() {
    
    return (
      
      <ShowcaseMainDiv>
        <div className="showcaseContainer">
        <div className="showcaseButton">
        <Link to='/contact'><button className="button">Book HLE</button></Link>
        </div>
        </div>
      </ShowcaseMainDiv>

    )
  }
}