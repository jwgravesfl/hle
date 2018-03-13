import React, { Component } from 'react'
import styled from 'styled-components'

const LiveMainDiv = styled.div`
.liveContainer {
  padding-top: 1vh;
  text-align: center;
  background-color: ;
  width: 100%
  height: 10vh;

  .liveHeading {
    font-size: 5vh;
    background-color: ;
    height: 5vh;
    padding-top: 1.5vh;
    font-weight: bold;
  }
 
  .liveImage {
    font-size: 2vh
  }
}
`;



export default class Live extends Component {
  state = {}

  render() {
    
    return (
      
      <LiveMainDiv>
        <div className="liveContainer">
          <div className="liveHeading">
            Live Music
          </div>
        </div>
      </LiveMainDiv>

    )
  }
}