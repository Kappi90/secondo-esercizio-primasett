import { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";

class LatestRelease extends Component {
  render() {
    return (
      <Container className='my-4'>
        <Row className='justify-content-center'>
          {fantasy.map((book) => {
            return (
              <Card
                key={book.asin}
                style={{ width: "18rem" }}
                className='m-4 text-center'
              >
                <Card.Img
                  style={{ height: "24rem" }}
                  variant='top'
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Price: {book.price}€</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
