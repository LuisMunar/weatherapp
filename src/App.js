import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { createStore } from 'redux';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.scss';

const store = createStore(
  () => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = (city) => {
    this.setState({
      city
    });
    console.log(`handleSelectedLocation ${city}`);

    const action = {
      type : 'setCity',
      value : city
    };
    store.dispatch(action);
  }

  render() {
    const cities = [
      'Armenia,col',
      'Lima,pe',
      'Washington,us',
      'Buenos Aires,ar'
    ]

    const { city } = this.state;

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
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6} className='colum-dos'>
            <Paper elevation={4} className='details-super'>
              <div className='details'>
                {city && <ForecastExtended city={city} />}
                {
                  /*el "&&" indicar null, osea que si la constante "city", definida previamente en el render, no esta contiene ningun valor, entonces
                  nada se va a mostra en el componente "ForecastExtended", de lo contrario se va a mostrar el contenido de al constante "city"*/
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;