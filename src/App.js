import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import {Form} from 'react-bootstrap/Form'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //an object 
      cityData: {},
      searchQ: '',
      showMap: false
    }
  }
  getLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      searchQ: event.target.city.value

    })
    console.log(this.state.searchQ);

    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_lOCATION_KEY}&q=${this.state.searchQ}&format=json`;
    let resData = await axios.get(url);
    console.log(resData);

    this.setState({
      cityData: resData.data[0],
      showMap: true

    })
  }

  render() {

    return (

      <div className='rend'>
        <h1>city-explorer</h1>


        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='city name' name='city' />
          <Button variant="outline-success" type="submit">Explore</Button>{' '}
          {/* <input type='submit' value='get City data' /> */}
        </form>
        

<table class="table table-dark">
  <thead>
    <tr>
      
      <th scope="col">City</th>
      <th scope="col">latitude</th>
      <th scope="col">longitude</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{this.state.cityData.display_name}</td>
      <td>{this.state.cityData.lat}</td>
      <td>{this.state.cityData.lon}</td>
    </tr>
    <tr>
    {/* <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p> */}
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_lOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        }
    </tr>
  </tbody>
</table>
    
{/* <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_lOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        } */}
        
        </div>
            )

  }
}

            export default App;