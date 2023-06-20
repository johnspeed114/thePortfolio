// @ts-nocheck
import React, { useState, useContext } from 'react';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';
import AuthContext from 'store/auth-context';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  //for now lets use usestate for pw and email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
          //FYI to make sure that login state is sync with local
          authCtx.onLogin();
          navigate('/home');
        })
        .catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            setError('Wrong Email or Password');
          } else if (errorCode === 'auth/user-not-found') {
            setError('No user with this email.');
          } else {
            setError(errorMessage); // For other errors
          }
          console.log(error);
        });
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
      {error && <Alert variant='danger'>{error}</Alert>}
      <Row style={{ margin: '10px' }}>
        <Col md>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your Email'
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
      <div className='d-flex justify-content-md-center'>
        <Button
          style={{ marginTop: '1em', width: '10%' }}
          variant='secondary'
          type='submit'>
          Login
        </Button>
      </div>
    </Form>
  );
};

export default Login;
