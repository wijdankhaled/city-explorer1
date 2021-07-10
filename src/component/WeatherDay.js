import React from 'react'
class WeatherDay extends React.Component{
    render(){
        // console.log(this.props);

        return(
            
            this.props.weatherData.map(val=>{
                <ul>
                <li>
                    {val.description}
                </li>
                <li>
                {val.data}
                </li>
            </ul>
            })
            
    
    
        )

    }
}
export default WeatherDay;