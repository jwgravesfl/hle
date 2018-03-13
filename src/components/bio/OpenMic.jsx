import React, { Component } from 'react'
import styled from 'styled-components'



const OpenMicMainDiv = styled.div`
.openMicContainer {
  text-align: center;
  background-color: ;
  width: 100%;
  height: 100%;
  

  .openMicHeading {
    font-size: 5vh;
    background-color: ;
    height: 5vh;
    padding-top: .5vh;
    font-weight: bold;
    color: white;
    position: fixed;
    bottom: 0;
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
          
        </div>
      </OpenMicMainDiv>

    )
  }
}