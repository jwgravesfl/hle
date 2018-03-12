import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/hleSmallLogo.png'
import MenuModal from './MenuModal'

const HeaderDiv = styled.div`
.headerContainer {
  padding-top: 0;
  text-align: ;
  background-color: none;
  height: 5vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.headerLogo {
  float: left;
  padding-top: 2vh;
  padding-left: 2vw;

  img {
    width: 15vh;
  }
}

.hamburgerMenu {
}


`;



export default class Header extends Component {
  state = {}

  render() {
    
    return (
      
      <HeaderDiv>
        <div className="headerContainer">
          <span className="headerLogo">
          <Link to='/'><img src={logo} alt="HLE Logo"/></Link>
          </span>
          <span className="hamburgerMenu">
            <MenuModal />
          </span>
          </div>
      </HeaderDiv>

    )
  }
}