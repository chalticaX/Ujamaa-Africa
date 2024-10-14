import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar,Nav,Carousel,Card,Button,Container,Row,Col,Form, Image, CardBody,} from 'react-bootstrap';
import './Home.css';
import 'react-bootstrap'


const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      alert('Please enter a county name.');
      return;
    }
    navigate(`/map?search=${encodeURIComponent(searchTerm)}`);
  };
  

  return (
    <div>
    
      <Navbar id='nav1'>
        <Navbar.Brand as={Link} to="/">
        <img src="ujamaa-africa\src\logo-1-Ujamaa-Africa.png" style={{width: '30px', height: '30px', marginRight: '10px'}}></img>
        UJAMAA AFRICA</Navbar.Brand>
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
              <Card.Img variant="top" src="https://via.placeholder.com/150.png?text=scale+up" />
              <Card.Body>
               <Card.Title>Our Country-Wide Scale Up program</Card.Title>
                <Card.Text>
                  We can and will reach every school age youth in every society.
                </Card.Text>
                <Button variant="primary" as={Link} to="/">
                  Home
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Add more feature cards as needed */}

          <Col md={4}>
          <Card className="feature-card2">
          <Card.Img variant="top" src="https://via.placeholder.com/150.png?text=Interactive+Map" />
          <Card.Title>Interactive Map</Card.Title>
          <CardBody>
                <Card.Text>
                  Explore our interactive map , where you can see our progress for the outreach
                </Card.Text>
                <Button variant="primary" as={Link} to="/map">
                  View Map
                </Button>
                </CardBody>
                </Card>
          </Col>
        
          <Col md={4}>
          <Card className="feature-card3">
          <Card.Img variant="top" src="https://via.placeholder.com/150.png?text=impact+society" />
          <Card.Title>Explore our Programmes </Card.Title>
          <CardBody>
                <Card.Text>
                  Here you can find about our impact on Society.
                </Card.Text>
                <Button variant="primary" as={Link} to="/statistics">
                  Our statistics
                </Button>
                </CardBody>
                </Card>
          </Col>

        </Row>
        
      </Container>

   
      <footer className="bg-dark text-white text-center py-3">
        &copy; {new Date().getFullYear()} Ujamaa Africa. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;