// Importacion de dependencias.
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

// Impotacion de componentes.
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

// Importancion del store redux.
import { store } from './sotore';

// Importacion de acciones para el store redux.
import { setCity } from './actions';

// Importacion de estilos.
import './App.scss';

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

    // Con esta liena estamo enviando la action importada desde el archivo que contiene las actions al store. Lo podemos evidenciar en la pestaña de la herramienta devtool redux chroome.
    store.dispatch(setCity(city));
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