import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import img from '../assets/heatherRedMic.jpg'
import {Grid} from 'semantic-ui-react'

const MainDiv = styled.div`
.homeContainer {
  padding-top: 1vh;
  text-align: center;
  background-color: ;
  width: 100%
  height: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  }

  .homeContent {
      text-align: center;
  }

  .button {
    background-color: black;
    border: 1px solid white;
    color: red;
    padding: 16px 32px;
    text-align: center;
    font-size: 16px;
    margin: 4px 2px;
    opacity: 0.6;
    transition: 0.3s;
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
  }
  
  .button:hover {opacity: 1}
  }
  
`;



export default class Home extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="homeContainer">
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} computer={8}>
                Empty
              </Grid.Column>
              <Grid.Column mobile={16} computer={8} className="homeContent">
              <Link to='/bio'><button className="button">Take the Tour</button></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </MainDiv>

    )
  }
}