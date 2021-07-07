import React from 'react'
import Card from 'react-bootstrap/Card'
class Movies extends React.Component{
    render(){
        return(
            <>
            {/* <ul>
                <li>
                    {this.props.weatherInfo.description}
                </li>
                <li>
                {this.props.weatherInfo.data}
                </li>
            </ul> */}

{/* this.title=item.title;
        this.overview=item.overview;
        this.average_votes=item.vote_average;
        this.image_url=`https://image.tmdb.org/t/p/w500/${item.poster_path}`;
        this.total_votes=item.vote_count;
        this.image_url=item.image_url;
        this.popularity=item.popularity;
        this.released_on=item.release_date; */}

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{this.props.overview}</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
            </>
        )
    }
}
export default Movies;