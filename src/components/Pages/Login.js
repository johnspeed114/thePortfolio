// @ts-nocheck
import React, { useState, useContext, useReducer } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import AuthContext from 'store/AuthProvider';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  //for now lets use usestate for pw and email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    //need to figure out where to put the authprovider component!
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      authCtx.onLogin(email, password);
    }
    setFormIsValid(true);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Form noValidate validated={formIsValid} onSubmit={submitHandler}>
      <Row>
        <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Example@email.com'
              required
              onChange={emailChangeHandler}
              value={email}
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter Your Approriate Email
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md>
          {/* md is for viewpoint for mobile screen resizing */}
          <Form.Group controlId='formPassword'>
            {/* saves the password with the control id in browser you can select later! */}
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={passwordChangeHandler}
              value={password}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please Enter Your Correct Password
            </Form.Control.Feedback>
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
