import React from 'react'
class weather extends React.Component{
    render(){
        return(
            <>
            <ul>
                <li>
                    {this.props.weatherInfo.description}
                </li>
                <li>
                {this.props.weatherInfo.data}
                </li>
            </ul>
            </>
        )
    }
}
export default weather;