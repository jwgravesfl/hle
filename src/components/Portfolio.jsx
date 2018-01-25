import React, { Component } from 'react'
import { Grid, Image, Divider, Popup } from 'semantic-ui-react'
import styled from 'styled-components' 

import id from '../assets/idLandingPage.JPG'
import tms from '../assets/tms.JPG'
import cd from '../assets/CowboyDr.comFrontPage.JPG'
import bsb from '../assets/portfolioBrainstromBreweryCover.JPG'

var enclosingDivSytle = {
paddingTop: '5em',
backgroundColor: "none",
paddingLeft: '0',
paddingRight: '0',
paddingBottom: '5em'
}

var gridStyle = {
padding: '0',
}

const ExampleImgs = styled.div`
.container {
  position: relative;
  text-align: left;
}

.image {
  display: block;
  width: 100%;
  height: auto;
  text-align: left;
}

.overlay {
  position: absolute;
  left: 10%;
  bottom: 2vw;

  height: 100%;
  width: 80%;
  opacity: 1;
  transition: .5s ease;
  background-color: none;
  text-align: left;
}

.text {
  color: black;
  position: absolute;
  bottom: 0;
  text-align: ;
  background: rgba(192, 192, 192, 0.8);

}

.h3 {
  font-size: 2vw;
  font-family: 'Roboto', sans-serif;
  padding: 1vw;
  text-align: justify;
  color: white;

  @media (max-width: 768px) {
    font-size: 4vw;

  }
}

.skills {
  font-size: 3vw;
  font-family: 'Anton', sans-serif;
  padding-left: 1vw;
  padding-bottom: 2vw;
  -webkit-text-stroke: .15vw black;
  color: white;


  @media (max-width: 768px) {
    font-size: 6.0vw;
    -webkit-text-stroke: .3vw black;

  }
}

.devIcons {
  font-size: 2.5vw;
  margin-left: 1vw;
  padding-left: 3vw;
  padding-bottom: 1vw;
  -webkit-text-stroke: .05vw black;
  color: black;

  @media (max-width: 768px) {
    font-size: 5vw;
    -webkit-text-stroke: .1vw black;

  }
}

`;




export default class Portfolio extends Component {
render() {
return (


<div style={ enclosingDivSytle }>

  <Grid
    style={ gridStyle }
  >
      <Divider horizontal>Click to Navigate to:</Divider>
    <Grid.Row style={ gridStyle }>

      <Grid.Column
        mobile={16} tablet={8} computer={8}
        style={ gridStyle }
      >
                            
        <ExampleImgs>
            <div className="container">
              <Image
                src={id}
                as='a'
                href='https://informationdesignus.surge.sh'
                target='_blank'
              />
              <a href='https://informationdesignus.surge.sh' target='_blank' rel="noopener noreferrer">
              <div className="overlay">
                <div className="text">
                    <h3 className="h3">Information Design is a ReactJS and Firebase full stack responsive web app.</h3>

                    
                      <div className="skills">Technologies</div>
                        <div className="devIcons">
                        <Popup
                        trigger={<i class="devicon-illustrator-plain colored"></i>}
                            content='Adobe Illustrator'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-chrome-plain colored"></i>}
                            content='Chrome Dev Tools'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-github-plain colored"></i>}
                            content='Github version control'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-visualstudio-plain colored"></i>}
                            content='Visual Studio'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-html5-plain colored"></i>}
                            content='HTML5'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-css3-plain colored"></i>}
                            content='CSS'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-javascript-plain colored"></i>}
                            content='JavaScript'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-react-plain colored"></i>}
                            content='ReactJS Frontend'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-nodejs-plain colored"></i>}
                            content='NodeJS Web App Framework'
                        />&nbsp;&nbsp;
                      </div>

                

                </div>
              </div>
              </a>
            </div>
        </ExampleImgs>
      </Grid.Column>

      <Grid.Column
        mobile={16} tablet={8} computer={8}
        style={ gridStyle }
      >
      <ExampleImgs>
            <div className="container">
              <Image
                src={tms}
                as='a'
                href='https://jwgravesfl.github.io/tms-webapp/'
                target='_blank'
              />
              <a href='https://jwgravesfl.github.io/tms-webapp/' target='_blank' rel="noopener noreferrer">
              <div className="overlay">
                <div className="text">
                    <h3 className="h3">The Mad Scientist Entertainment is a ReactJS web app utilizing GatsbyJS.</h3>

                    
                      <div className="skills">Technologies</div>
                        <div className="devIcons">
                        <Popup
                        trigger={<i class="devicon-photoshop-plain colored"></i>}
                            content='Adobe Photoshop'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-chrome-plain colored"></i>}
                            content='Chrome Dev Tools'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-github-plain colored"></i>}
                            content='Github version control'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-visualstudio-plain colored"></i>}
                            content='Visual Studio'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-html5-plain colored"></i>}
                            content='HTML5'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-css3-plain colored"></i>}
                            content='CSS'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-javascript-plain colored"></i>}
                            content='JavaScript'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-react-plain colored"></i>}
                            content='ReactJS Frontend'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-nodejs-plain colored"></i>}
                            content='NodeJS Web App Framework'
                        />&nbsp;&nbsp;
                      </div>

                

                </div>
              </div>
              </a>
            </div>
        </ExampleImgs>
        
        </Grid.Column>

    </Grid.Row>
    <Grid.Row style={ gridStyle }>

      <Grid.Column
        mobile={16} tablet={8} computer={8}
        style={ gridStyle }
      >
        <ExampleImgs>
            <div className="container">
              <Image
                src={cd}
                as='a'
                href='https://www.cowboydr.com'
                target='_blank'
              />
              <a href='https://www.cowboydr.com' target='_blank' rel="noopener noreferrer">
              <div className="overlay">
                <div className="text">
                    <h3 className="h3">Cowboydr.com is a static Live Band responsive press kit web app.</h3>

                    
                      <div className="skills">Technologies</div>
                        <div className="devIcons">
                        <Popup
                        trigger={<i class="devicon-photoshop-plain colored"></i>}
                            content='Adobe CC'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-chrome-plain colored"></i>}
                            content='Chrome Dev Tools'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-github-plain colored"></i>}
                            content='Github version control'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-visualstudio-plain colored"></i>}
                            content='Visual Studio'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-html5-plain colored"></i>}
                            content='HTML5'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-css3-plain colored"></i>}
                            content='CSS3'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-javascript-plain colored"></i>}
                            content='JavaScript'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-jquery-plain colored"></i>}
                            content='JQuery Frontend'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-php-plain colored"></i>}
                            content='PhP Backend'
                        />&nbsp;&nbsp;
                      </div>

                

                </div>
              </div>
              </a>
            </div>
        </ExampleImgs>
        
      </Grid.Column>

      <Grid.Column
        mobile={16} tablet={8} computer={8}
        style={ gridStyle }
      >

        <ExampleImgs>
            <div className="container">
              <Image
                src={bsb}
                as='a'
                href='https://informationdesignus.surge.sh'
                target='_blank'
              />
              <a href='https://informationdesignus.surge.sh' target='_blank' rel="noopener noreferrer">
              <div className="overlay">
                <div className="text">
                    <h3 className="h3">Writer and Style guru for Brainstrom Brewery web blog.</h3>

                    
                      <div className="skills">Technologies</div>
                        <div className="devIcons">
                        <Popup
                        trigger={<i class="devicon-illustrator-plain colored"></i>}
                            content='Adobe Illustrator'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-photoshop-plain colored"></i>}
                            content='Adobe Photoshop'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-wordpress-plain colored"></i>}
                            content='WordPress'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-chrome-plain colored"></i>}
                            content='Chrome Dev Tools'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-github-plain colored"></i>}
                            content='Github version control'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-visualstudio-plain colored"></i>}
                            content='Visual Studio'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-html5-plain colored"></i>}
                            content='HTML5'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-css3-plain colored"></i>}
                            content='CSS'
                        />&nbsp;&nbsp;
                        <Popup
                        trigger={<i class="devicon-javascript-plain colored"></i>}
                            content='JavaScript'
                        />&nbsp;&nbsp;
                      </div>

                

                </div>
              </div>
              </a>
            </div>
        </ExampleImgs>
        
      </Grid.Column>

    </Grid.Row>



  </Grid>

</div>

)
}
}