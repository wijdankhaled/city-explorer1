import React from 'react'
import WeatherDay from './WeatherDay';
class weather extends React.Component{
    render(){
        
        return(
           
     
                <WeatherDay

                weatherData={this.props.weatherData}
                />
              
        )
          
           
        
    }
}
export default weather;