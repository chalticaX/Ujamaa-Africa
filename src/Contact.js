import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="mt-5">
      <h1>Contact Us</h1>
      <Form>
        {/* Name */}
        <Form.Group controlId="contactForm.Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="contactForm.Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        {/* Message */}
        <Form.Group controlId="contactForm.Message">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit" className="mt-3">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
