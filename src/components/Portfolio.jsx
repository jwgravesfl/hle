import React, { Component } from 'react'
import { Grid, Image, Divider } from 'semantic-ui-react'
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

 var imgDivOverlayStyle = {
      position: 'absolute', 
      bottom: 0, 
      textAlign: 'center', 
      width: '100%', 
      height: 'auto', 
      opacity: '.5',
 }

const ExampleImgs = styled.div`
            .container {
              position: relative;
            }

            .image {
              display: block;
              width: 100%;
              height: auto;
            }

            .overlay {
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              height: 100%;
              width: 100%;
              opacity: 0;
              transition: .5s ease;
              background-color: #008CBA;
            }

            .container:hover .overlay {
              opacity: 1;
            }

            .text {
              color: white;
              font-size: 20px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              text-align: center;
            }

            .card {
              color: green;
              background-color: yellow;
              border-radius: 15px;
              
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
                            href='https://jwgravesfl.surge.sh'
                            target='_blank'
                          />
                          <div className="overlay">
                            <div className="text">
                             <div className='card'>
                              <div>
                                Information Design is a full stack web app solution provider.  Concentrating on 
                                modern design styles, Information Design offers clients an opening into Web 3.0.
                              </div>
                              <div>
                                <h2>Skills Utlized</h2>
                              </div>
                             </div>
                            </div>
                          </div>
                        </div>
                    </ExampleImgs>
                  </Grid.Column>

                  <Grid.Column
                    mobile={16} tablet={8} computer={8}
                    style={ gridStyle }
                  >
                    <Image
                      src={tms}
                      as='a'
                      href='https://jwgravesfl.github.io/tms-webapp/'
                      target='_blank'
                    />
                    <div 
                      style={ imgDivOverlayStyle }
                    >
                      TEST
                    </div>
                    </Grid.Column>

                </Grid.Row>
                <Grid.Row style={ gridStyle }>

                  <Grid.Column
                    mobile={16} tablet={8} computer={8}
                    style={ gridStyle }
                  >
                    <Image
                      src={cd}
                      as='a'
                      href='https://www.cowboydr.com'
                      target='_blank'
                    />
                    <div 
                      style={ imgDivOverlayStyle }
                    >
                      TEST
                    </div>
                  </Grid.Column>

                  <Grid.Column
                    mobile={16} tablet={8} computer={8}
                    style={ gridStyle }
                  >
                    <Image
                      src={bsb}
                      as='a'
                      href='https://jwgravesfl.surge.sh'
                      target='_blank'
                    />
                    <div 
                      style={ imgDivOverlayStyle }
                    >
                      TEST
                    </div>
                  </Grid.Column>

                </Grid.Row>



              </Grid>

      </div>

    )
  }
}