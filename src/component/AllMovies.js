import React from 'react'
import Movies from './Movies';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
class AllMovies extends React.Component{
    render(){
        
        return(
            <>
            
            {/* {this.state.showmovie && */}
        <Movies
       movieData={this.state.movieData}
 
        
       />
        {/* }   */}
            </>
        )
    }
}
export default AllMovies;