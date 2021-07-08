import React from 'react'
import Card from 'react-bootstrap/Card'
// import 'bootstrap/dist/css/bootstrap.min.css'
import ListGroup from 'react-bootstrap/ListGroup'

class Movies extends React.Component{
    render(){
      console.log(this.props.result);
        return(
         <>
           <div>Movies</div>
           { 

             this.props.result.map(val=>{
               return(
   
              // <div>
              //  {/* <imag alt="" src={val.image_url}/> */}
              // <p>{val.overview}</p>
              //     <p>{val.average_votes}</p>
              //     <p>{val.total_votes}</p>
              //     <p>{val.popularity}</p>
              //     <p>{val.released_on}</p>
              //     </div>

//               <Card style={{ width: '18rem' }}>
//   <Card.Img alt="" src={val.image_url} />
//   <Card.Body>
//     <Card.Title>{val.title}</Card.Title>
//     <Card.Text>
//      {/* {val.overview} */}
    
//     </Card.Text>
//     <Card.Text>
//      {val.total_votes}
//     </Card.Text>
//     <Card.Text>
//      {val.popularity}
//     </Card.Text>
//     {/* <Button variant="primary">Go somewhere</Button> */}
//   </Card.Body>
// </Card>

<Card className="displaycard" style={{ width: '18rem' }}>
 
 
  <Card.Body>
  <img variant="top" alt="" src={val.image_url} style={{ width: '15rem' }}/>
    <Card.Title>{val.title}</Card.Title>
    <Card.Text>
    {val.overview} 
    </Card.Text>
    <Card.Text>
    {val.total_votes}
    </Card.Text>
    <Card.Text>
    {val.popularity}
    </Card.Text>
    <Card.Text>
    {val.released_on}
    </Card.Text>
  </Card.Body>
</Card>


               )
             })
          
           }
         </>
        )
    }
}
export default Movies;




      