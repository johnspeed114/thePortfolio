// @ts-nocheck
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Form>
      <Row>
        <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Example@email.com' />
          </Form.Group>
        </Col>
        <Col md>
          {/* md is for viewpoint for mobile screen resizing */}
          <Form.Group controlId='formPassword'>
            {/* saves the password with the control id in browser you can select later! */}
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Col>
      </Row>
      <Button style={{ marginTop: '1em' }} variant='secondary' type='submit'>
        Login
      </Button>
    </Form>
  );
};

export default Login;
