import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import close from '../../assets/closeIcon.png'
import open from '../../assets/hamburgerIcon.png'

const MainDiv = styled.div`
.modal {
  width: 300px;
  height: ;
  position: absolute;
  top: 0;
  right: 0;    
  z-index: 9998;
  background: ;
  font-family: 'Anton', sans-serif;
  text-align: left;

  a {
    color: black;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 2px;

  li {
    padding: 2px;
  }
}

}

.openModal {
  position: absolute;
  top: 2vh;
  right: 1vw;

}

.closeModal {
  position: absolute;
  top: 2vh;
  right: 1vw;
  z-index: 9999;
}

`;


export default class MenuModal extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {

      const isModalOpen = this.state.isModalOpen

    return (
      <MainDiv>
      <div>
        {isModalOpen ? (
            <div >
            
            <div className="modal">
              <ul>
                <li><Link to='/' onClick={() => this.closeModal()}>Home</Link></li>
                <li><Link to='/bio' onClick={() => this.closeModal()}>About HLE</Link></li>
                <li><Link to='/showcase' onClick={() => this.closeModal()}>Showcase</Link></li>
                <li><Link to='/contact' onClick={() => this.closeModal()}>Contact HLE</Link></li>
              </ul>
            </div>
            <div className="closeModal" onClick={() => this.closeModal()}><img src={close} width="30" height="30" alt="HLE Logo"/></div>
          </div>
        ) : (
          <div className="openModal" onClick={() => this.openModal()}><img src={open} width="30" height="30" alt="HLE Logo"/></div>
        )} 
        
        
      </div>
      </MainDiv>
    )
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}