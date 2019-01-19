import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import './App.scss';
import LocationList from './components/LocationList';

class App extends Component {

  handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const cities = [
      'Armenia,col',
      'Lima,pe',
      'Washington,us',
      'Buenos Aires,ar'
    ]

    return (
      <Grid>

        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4} className='details-super'>
              <div className='details'>
                dsdsd
            </div>
            </Paper>
          </Col>
        </Row>

      </Grid>
    );
  }
}

export default App;