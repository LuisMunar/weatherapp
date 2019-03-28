// Importacion de dependencias.
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Containers components.
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

// Importacion de estilos.
import './App.scss';

class App extends Component {
  render() {
    const cities = [
      'Armenia,col',
      'Lima,pe',
      'Washington,us',
      'Buenos Aires,ar'
    ]

    return (
      <Grid className='container-weather'>
        <Row className='row-header'>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row className='row-body'>
          <Col xs={12} md={6} className='colum-uno'>
            <LocationListContainer
              cities={cities}
            />
          </Col>
          <Col xs={12} md={6} className='colum-dos'>
            <Paper elevation={4} className='details-super'>
              <div className='details'>
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;