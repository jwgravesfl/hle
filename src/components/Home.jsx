import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MainDiv = styled.div`
.container {
  padding-top: 1vh;
  text-align: center;
  background-color: yellow;
  width: 100%
  height: 100%;

}

`;



export default class Home extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="container">
          <span className="">
          Left
          </span>
          <span className="">
            Right
          </span>
        </div>
      </MainDiv>

    )
  }
}