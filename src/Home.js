import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar,Nav,Carousel,Card,Button,Container,Row,Col,Form,} from 'react-bootstrap';
import './Home.css';
import 'react-bootstrap'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // For navigation
  const handleSearch = (e) => {
    e.preventDefault();
    // Pass the search term to the map page
    navigate(`/map?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">Ujamaa Africa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/map">Map</Nav.Link>
            <Nav.Link as={Link} to="/statistics">Statistics</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://via.placeholder.com/800x400.png?text=Empowering+Communities"
            alt="Empowering Communities"
          />
          <Carousel.Caption>
            <h3>Empowering Communities</h3>
            <p>Join us in making a difference.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Add more Carousel items as needed */}
      </Carousel>

      {/* Main Content */}
      <Container className="mt-5">
        {/* Search Bar */}
        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Form onSubmit={handleSearch} className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search for a county..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type="submit" variant="primary" className="ml-2">
                Search
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Features */}
        <h2 className="text-center mb-4">Our Features</h2>
        <Row>
          <Col md={4}>
            <Card className="feature-card">
              <Card.Img variant="top" src="https://via.placeholder.com/150.png?text=Interactive+Map" />
              <Card.Body>
                <Card.Title>Interactive Map</Card.Title>
                <Card.Text>
                  Explore our interactive map to learn about different counties.
                </Card.Text>
                <Button variant="primary" as={Link} to="/map">
                  View Map
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {/* Add more feature cards as needed */}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Ujamaa Africa. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;