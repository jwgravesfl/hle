import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Showcase from './Showcase'
import Contact from './Contact'
import ThankYou from './ThankYou'
import styled from 'styled-components' 
import img from '../assets/heatherRedMic.jpg';



  const MainDiv = styled.div`
    .container {
      height: 100vh;
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: 100% 100%;

    }
`;

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <MainDiv>
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/bio' component={Bio} />
      <Route path='/showcase' component={Showcase} />
      <Route path='/contact' component={Contact} />
      <Route path='/thankyou' component={ThankYou} />
    </Switch>
  </main>
  </MainDiv>
)

export default Main