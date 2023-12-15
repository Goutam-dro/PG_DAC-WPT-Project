import { Button, Card } from "react-bootstrap";

export function Aircrafts(){
    return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.app.goo.gl/oKkyC1S6J8QVj1A76" class="card-img-top"/>
      <Card.Body>
        <Card.Title>Falcon</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}