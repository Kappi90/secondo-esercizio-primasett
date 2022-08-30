import { Jumbotron, Container } from "react-bootstrap";

const Welcome = () => {
  return (
    <Jumbotron fluid className='text-center p-4'>
      <Container>
        <h1>Fantasy Books</h1>
        <p>
          Find your favorite fantasy book and start traveling with your mind!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Welcome;
