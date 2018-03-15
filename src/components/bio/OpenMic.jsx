import React, { Component } from 'react'
import styled from 'styled-components'



const OpenMicMainDiv = styled.div`
.openMicContainer {
  text-align: left;
  background-color: ;
  width: 100%;
  height: 100%;
  

  .openMicHeading {
    font-size: 4vh;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    font-weight: bold;
    color: white;
    position: absolute;
    top: 10vh;
    border: 5px solid white;
    padding-top: 3vh;
    padding-bottom: 2vh;
    padding-right: 2vh;
    padding-left: 2vh;
    font-family: 'Timmana', sans-serif;
    border-radius: 1vh;
  }

  .openMicContent {
    font-size: 2vh;
    background: rgba(0, 0, 0, 0.5);
    padding-top: .5vh;
    font-weight: bold;
    color: white;
    position: fixed;
    bottom: 0;
    padding: 2vh;
    font-family: 'Roboto', sans-serif;
  }

  .openMicContentWrapper {
    background-color: white;
  }
 
}
`;



export default class OpenMic extends Component {
  state = {}

  render() {
    
    return (
      
      <OpenMicMainDiv>
        <div className="openMicContainer">
          <div className="openMicHeading">
            Open Mic 
          </div>
          <div className="openMicContentWrapper">
          <div className="openMicContent">
          Heather Love Entertainment provides a professional, fun and energetic open mic experience.  Friendly young female energy with a professional sound system.
          </div>
          </div>
        </div>
      </OpenMicMainDiv>

    )
  }
}