import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
// import {Form} from 'react-bootstrap/Form'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Weather from './Weather'
import Movies from './Movies'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //an object 
      cityData: {},
      searchQ: '',
      showMap: false,
      showmovie:false,
      errorMessage: false,
      weatherData: [],
      movieData:[]
    }
  }
  getLocation = async (event) => {
    event.preventDefault();

    await this.setState({
      searchQ: event.target.city.value


    })
    console.log(this.state.searchQ);
    try{
    let url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_lOCATION_KEY}&q=${this.state.searchQ}&format=json`;
    let resData = await axios.get(url);
    console.log(resData);

    this.setState({
      cityData: resData.data[0],
      showMap: true

    })
  }catch{
    this.setState({
      errorMessage:true
    })

  }
    //http://localhost:3002/weather?cityName=Amman&lon=35.91&lat=31.95
    let weatherurl = `${process.env.REACT_APP_P0RT}/weather?cityName=${this.state.searchQ}`

    // 
    let weatherR = await axios.get(weatherurl)
    console.log(this.state.weatherR)
    this.setState({
      weatherData: weatherR.data
    })
    console.log('aaaaaaaaaaaaaaa',this.state.weatherData);

//http://localhost:3002/movies?cityName=Amman

let moviewUrl=`${process.env.REACT_APP_P0RT}/movies?cityName=${this.state.searchQ}`
// let moviewUrl='https://city-explorer-api-wijdan.herokuapp.com/'
let allmovies=await axios.get(moviewUrl)


console.log(this.state.allmovies)
await this.setState({
  movieData:allmovies.data,
  showmovie:true
 
})
console.log(this.state.movieData)
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


        <table className="table table-dark">
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
          {
            this.state.weatherData.map((val,index) => {
              return (
              
                <Weather

                  weatherInfo={val}
                />
              )
            })
          }
        </tr>
        <tr>
          
       
          
        </tr>
            <tr>
              {/* <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p> */}
              {this.state.showMap &&
                <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_lOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} 
                style={{ width: '306+rem' }}/>
              }
            </tr>
           
          </tbody>
        </table>

        {/* <p>City Name:{this.state.cityData.display_name},{this.state.cityData.lat},{this.state.cityData.lon}</p>
        {this.state.showMap &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_lOCATION_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=15`} />
        } */}

       {this.state.errorMessage&&<div style={{color:'orange'}}>Error in getting the data</div>}
      

       
       {this.state.showmovie &&
        <Movies
       result={this.state.movieData} 
        
       />
        }  
       
   
      </div>
      
    )

  }
}

export default App;