import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MainDiv = styled.div`
.container {
  padding-top: 1vh;
  text-align: center;
  background-color: none;
  height: 5vh;
  position: fixed;
  bottom: 0;
  width: 100%;  
}

.footerLeft {
  float: left;
}

.footerRight {
  float: right;
}


`;



export default class Footer extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="container">
          <span className="footerLeft">
            Left
          </span>
          <span className="footerRight">
            Right
          </span>
        </div>
      </MainDiv>

    )
  }
}