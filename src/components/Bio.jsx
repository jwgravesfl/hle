import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const MainDiv = styled.div`
.bioContainer {
  padding-top: 1vh;
  text-align: center;
  background-color: ;
  width: 100%
  height: 100%;
  height: 100vh;
 

}

`;



export default class Bio extends Component {
  state = {}

  render() {
    
    return (
      
      <MainDiv>
        <div className="bioContainer">
          <span className="">
          Left
          </span>
          <span className="">
          <Link to='/showcase'>Showcase</Link>
          </span>
        </div>
      </MainDiv>

    )
  }
}