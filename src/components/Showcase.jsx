import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MainDiv = styled.div`
.showcaseContainer {
  padding-top: 1vh;
  text-align: center;
  background-color: ;
  width: 100%
  height: 100%;
}

`;



export default class Showcase extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="showcaseContainer">
          <span className="">
          Left
          </span>
          <span className="">
          <Link to='/contact'>Contact HLE</Link>
          </span>
        </div>
      </MainDiv>

    )
  }
}