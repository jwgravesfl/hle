import React, { Component } from 'react'
import { Grid, Card, Divider } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import tms from '../assets/tms.JPG'
import cd from '../assets/CowboyDr.comFrontPage.JPG'
import bsb from '../assets/portfolioBrainstromBreweryCover.JPG'
 


 var enclosingDivSytle = {
  paddingTop: '5em',
  backgroundColor: "none",
  paddingLeft: '2em',
  paddingRight: '2em',
  paddingBottom: '5em'
 }

 var gridRow1_1Style = {
   backgroundColor: 'none',
   padding: '0',
   width: '100%'
 }

 var gridColumn1_1Style = {
   backgroundColor: 'none',
   padding: '0',   
   height: '40vh',
}

 var card1_2Style = {
   backgroundColor: '#23ADE2',
   padding: '0',
   height: '100%',
   width: 'auto',
   boxShadow: '2px 2px'
 }

 var gridColumn1_2Style = {
   backgroundColor: 'none',
   padding: '2em',
   height: '40vh',
 }

 var imgStyle = {
   backgroundColor: 'none',
   height: '40vh',
   width: '100%'
 }

 var h2Style ={
   padding: '1em'
 }

 var cardHeaderStyle = {
   padding: '3em'
 }

export default class Portfolio extends Component {
  render() {
    return (
 

        <div style={ enclosingDivSytle }>

{/* Row 1  */}
        <Grid>
          <Grid.Row
            style={gridRow1_1Style}
          >
            
            <Grid.Column
              style={ gridColumn1_1Style }
              mobile={16} tablet={6} computer={6}
            >

            <Link target='_blank' to="https://jwgravesfl.github.io/tms-webapp/">
             <img src={tms} alt="Logo" style={ imgStyle }/>
             </Link>
              
            </Grid.Column>

            <Grid.Column 
              style={gridColumn1_2Style}
              mobile={16} tablet={10} computer={10}
            >
              <Card
                style={ card1_2Style }
                raised
                
              >
                <Card.Header
                  style = { cardHeaderStyle }
                >
                  <h1>The Mad Scientist Entertainment</h1>
                </Card.Header>
                
                  <Card.Content
                  >
                    <h2 style={ h2Style }>
                      Offering Live Band and Open Mic services, The Mad Scientist, Dale Johnston, has muliple music entertainment
                      shows playing daily throughout the Tampa Bay area.  
                    </h2>
                    <h5>Desgined and Created by J. Graves December 2017</h5>
                  </Card.Content>
              </Card>          
            </Grid.Column>

          </Grid.Row>
        </Grid>
{/* Row 2  */}
        <Grid>
          <Grid.Row
            style={gridRow1_1Style}
          >
            
            <Grid.Column 
              style={gridColumn1_2Style}
              mobile={16} tablet={10} computer={10}
            >
              <Card
                style={ card1_2Style }
                raised
              >

              </Card>          
            </Grid.Column>

            <Grid.Column
              style={ gridColumn1_1Style }
              mobile={16} tablet={6} computer={6}
            >
              <Link target='_blank' to="https://www.cowboydr.com">
                <img src={cd} alt="CowboyDr.com Website" style={ imgStyle }/>
              </Link>
            </Grid.Column>

          </Grid.Row>
        </Grid>
{/* Row 3  */}
        <Grid>
          <Grid.Row
            style={gridRow1_1Style}
          >
            
            <Grid.Column
              style={ gridColumn1_1Style }
              mobile={16} tablet={6} computer={6}
            >
              <Link target='_blank' to="https://jwgravesfl.github.com">
                  <img src={bsb} alt="Brainstorm Brewery" style={ imgStyle }/>
              </Link>
            </Grid.Column>

            <Grid.Column 
              style={gridColumn1_2Style}
              mobile={16} tablet={10} computer={10}
            >
              <Card
                style={ card1_2Style }
                raised
              >

              </Card>          
            </Grid.Column>

          </Grid.Row>
        </Grid>

      </div>

    )
  }
}