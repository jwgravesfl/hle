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



export default class Live extends Component {
  state = {}

  render() {
    
    return (
      
      <OpenMicMainDiv>
        <div className="openMicContainer">
          <div className="openMicHeading">
            Live Music 
          </div>
          <div className="openMicContentWrapper">
          <div className="openMicContent">
          Cowboy Drive is a unique blend of roots and modern music.  Preferred genre or song list is not an issue.  Country, pop, rock or a mixture of all.  The only prerequisite is that it is a good song.
          </div>
          </div>
        </div>
      </OpenMicMainDiv>

    )
  }
}