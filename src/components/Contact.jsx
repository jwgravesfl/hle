import React, { Component } from 'react'
import { Button, Form, Grid, Card, Icon, Popup, Divider } from 'semantic-ui-react'
import firebase from '../Firebase'
import { Link } from 'react-router-dom'

var sectionStyle = {
    paddingTop: '5em',
    paddingBottom: '5em'
};

var cardFormStyle = {
  padding: '2em',
}

var cardInfoStyle = {
  paddingTop: '2em',
  paddingRight: '0',
  backgroundColor: '#ff4d4d',
  width: '300px',
  height: '200px'
}

var containerGridColumn1Style = {
  textAlign: 'center',
  paddingBottom: '2em',
  paddingRight: '1em',
};

var containerGridColumn2Style = {
  paddingLeft: '3em',
  paddingRight: '3em',
  paddingBottom: '5em',

};

var cardHeaderStyle = {
  textAlign: 'center',
  fontSize: '32px',
  fontFamily: 'Anton, sans-serif',
  fontVariant: "small-caps"
}

var iconStyle = {
  textAlign: "center",
  color: '#000',
  fontSize: '4vh',
}

var nameInfoCardStyle = {
  fontSize: '24px',
  fontFamily: 'Anton, sans-serif',
  fontVariant: "small-caps", 
  color: 'black'
}

var descriptionInfoCardStyle = {
  fontSize: '18px',
  fontFamily: 'Anton, sans-serif',
  fontVariant: "small-caps"
}

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      message: '',
      items: [],
      hasBeenClicked: false
    }
    this.change = this.change.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    change = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onSubmit = (e) => {
      e.preventDefault();
      const itemsRef = firebase.database().ref('items');
      const item = {
        fName: this.state.fName,
        lName: this.state.lName,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message
      }
      itemsRef.push(item);
      this.setState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
        message: '',
        hasBeenClicked: true
      });
    };

componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].fName,
          user: items[item].lName,
          email: items[item].email,
          phone: items[item].phone,
          message: items[item].message
        });
      }
      this.setState({
        items: newState
      });
    });
  }




  render() {
        const { hasBeenClicked } = this.state

    return (
      <div style={ sectionStyle }>

          <Grid>
          <Grid.Row>
            <Grid.Column 
            mobile={16} tablet={6} computer={6}
            style={containerGridColumn1Style}
            verticalAlign='middle'
            >
               <Card
                  style={cardInfoStyle}
                  raised
                  color='red'
                  fluid
                  centered
                >
                <Card.Header
                  textAlign='center'
                  style = {nameInfoCardStyle}
                  >
                  Heather Love Entertainment
                </Card.Header>
                <Divider horizontal>***</Divider>
                <Card.Description style = {descriptionInfoCardStyle}>
                  Phone: 813 454-4495
                </Card.Description>
                <Card.Description style = {descriptionInfoCardStyle}>
                  email: heatherloveentertainment@gmail.com
                </Card.Description>
                <Card.Content
                  textAlign='center'
                >
                <Card.Description>
            
                </Card.Description>
                  <Popup
                      trigger={<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/heatherloveentertainment/">Facebook&nbsp;&nbsp;<Icon name='Facebook' style={ iconStyle } /></a>}
                  />&nbsp;&nbsp;
                  <Popup
                      trigger={<a target="_blank" rel="noopener noreferrer" href="https://youtube.com/heatherloveentertainment"><Icon name='youtube' style={ iconStyle } />&nbsp;&nbsp; Youtube</a>}
                  />&nbsp;&nbsp;
                </Card.Content
                >
                </Card>
            </Grid.Column>
            <Grid.Column 
            mobile={16} tablet={9} computer={9}
            style={containerGridColumn2Style}
            >
                <Card
                  style={cardFormStyle}
                  fluid
                  raised
                  color='red'
                >
                <Card.Header style={ cardHeaderStyle }>
                  Contact Heather Love Entertainment
                </Card.Header>
                <Form id=''>
                  <Form.Field>
                    <label>First Name</label>
                    <input
                    name='fName' 
                    type='text' 
                    placeholder='First Name' 
                    value = {this.state.fName} 
                    onChange={e => this.change(e)}                    
                    />
                  </Form.Field>
                 
                  <Form.Field>
                    <label>Last Name</label>
                    <input
                    name='lName' 
                    type='text' 
                    placeholder='Last Name' 
                    value = {this.state.lName} 
                    onChange={e => this.change(e)} 
                    />
                  </Form.Field>

                  <Form.Field>
                    <label>Email Address</label>
                    <input
                    name='email' 
                    type='email' 
                    placeholder='you@youremail.com' 
                    value = {this.state.email} 
                    onChange={e => this.change(e)}
                    required 
                    />
                  </Form.Field>
   
                  <Form.Field>
                    <label>Phone</label>
                    <input
                    name='phone' 
                    type='text' 
                    placeholder='Phone Number' 
                    value = {this.state.phone} 
                    onChange={e => this.change(e)}
                    />
                  </Form.Field>

                  <Form.TextArea 
                  label='Additional Information' 
                  placeholder='Add additional information here...' 
                  name='message'
                  type='textarea'
                  value = {this.state.message}
                  onChange={e => this.change(e)}
                  />
                  
                  <Button type='submit' onClick={e => this.onSubmit(e)}>Submit</Button>
                </Form>
                {hasBeenClicked && (
                 <div> 
                  <div>
                    Thank You for contacting Leather & Lace.
                  </div>
                  <div>
                    I will get back to you as soon as poosible.
                  </div>
                  <div>
                    Listen to some tunes from <Link to='/portfolio'>the Showcase</Link>!
                  </div>
                 </div>
                )}
                </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              
            </Grid.Column>
          </Grid.Row>
          </Grid>



      </div>

    )
  }
}