import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/hleSmallLogo.png'

const MainDiv = styled.div`
.container {
  padding-top: 1vh;
  text-align: center;
  background-color: none;
  height: 5vh;
  position: fixed;
  top: 0;
  width: 100%;
}

.headerLogo {
  float: left;
  padding-top: 0;
  padding-left: 3em;
}

.hamburgerMenu {
  float: right;
}


`;



export default class Header extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="container">
          <span className="headerLogo">
          <Link to='/'><img src={logo} width="45 " height="45" /></Link>
          </span>
          <span className="hamburgerMenu">
            Right
          </span>
        </div>
      </MainDiv>

    )
  }
}