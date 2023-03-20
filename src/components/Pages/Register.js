// @ts-nocheck
import React, { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { errorReducer, formReducer } from 'store/AccountReducer';

const Register = () => {
  // const [error, dispatchError] = useReducer(errorReducer, {error:''})
  //[FYI] bday stands for user's birthday
  const [form, dispatchForm] = useReducer(formReducer, {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    bday: '',
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  //instead of multiple changers we can just use one with a dyncamic dispatchForm
  const usernameChangeHandler = (event) => {
    dispatchForm({ type: 'USERNAME', value: event.target.value });
  };

  const emailChangeHandler = (event) => {
    dispatchForm({ type: 'EMAIL', value: event.target.value });

    //onchange might have some limitations due to feedback triggering for all inputs
    //lets just use handlesubmit with usestate
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: 'PASSWORD', value: event.target.value });
  };

  const confPasswordChangeHandler = (event) => {
    dispatchForm({ type: 'CONFIRM_PASSWORD', value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //Lets separate the error handling logic with client input side and database backend logic error handling
    //[To Do] handlesubmit should check username and email has been used or not
    //[To Do] client input error handling below should be handled like my react course
    if (!form.username) {
      setError((prevError) => ({
        ...prevError,
        username: 'Please enter your username',
      }));
    }

    if (form.username) {
      //[To do] need to add verficiation conditional if the username has been used
      setError((prevError) => ({
        ...prevError,
        username: '',
      }));
    }

    if (!form.email) {
      setError((prevError) => ({
        ...prevError,
        email: 'Please enter your email',
      }));
    }
    if (form.email.length > 0) {
      if (!form.email.includes('@')) {
        setError((prevError) => ({
          ...prevError,
          email: 'Email is missing "@". Please input the correct format',
        }));
      } else {
        setError((prevError) => ({ ...prevError, email: '' }));
      }
    }
    //[TO Do]all these null/undefined checkers are redundant we should just combine them into one
    if (!form.password) {
      setError((prevError) => ({
        ...prevError,
        password: 'Please enter your password',
      }));
    }

    if (form.password.length > 0) {
      if (form.password.length < 7) {
        setError((prevError) => ({
          ...prevError,
          password:
            'Password too short! Please enter a password longer than 6 characters',
        }));
      } else {
        const pwRegEx = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        if (!pwRegEx.test(form.password)) {
          setError((prevError) => ({
            ...prevError,
            password:
              'You are missing a special character, number, and/or uppercase letter. Please include it in your password.',
          }));
        } else {
          setError((prevError) => ({
            ...prevError,
            password: '',
          }));
        }
      }
    }

    if (!form.confirmPassword) {
      setError((prevError) => ({
        ...prevError,
        confirmPassword: 'Please confirm your password',
      }));
    }

    if (form.confirmPassword) {
      if (form.confirmPassword !== form.password)
        setError((prevError) => ({
          ...prevError,
          confirmPassword:
            'The confirmed password is not same as the password. Please correct that',
        }));
      else {
        setError((prevError) => ({
          ...prevError,
          confirmPassword: '',
        }));
      }
    }
    //[TO DO] add a password confirmation, names, bday
    //[To do] backend send an api to the request the verification, if good then pass to congratz page
    //[TO do] encrypt your password
    //[TO do] ref to line 75 of this component,
    // lets just use a grouping method of if else, instead of just checking with state error(closure issue)
    if (Object.keys(error).length === 0) {
      console.log(error);
      // navigate('/success');
    }
  };

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type=''
            placeholder='Username'
            onChange={usernameChangeHandler}
            value={form.username}
            required
            isInvalid={!!error.username}
          />
          <Form.Control.Feedback type='invalid'>
            {error.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Example@email.com'
            onChange={emailChangeHandler}
            value={form.email}
            required
            isInvalid={!!error.email}
          />
          <Form.Control.Feedback type='invalid'>
            {error.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Password (Must be greater than 6 characters, have one upper case
            letter, have a number, have a special character)
          </Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={form.password}
            required
            onChange={passwordChangeHandler}
            isInvalid={!!error.password}
          />
          <Form.Control.Feedback type='invalid'>
            {error.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={form.confirmPassword}
            required
            onChange={confPasswordChangeHandler}
            isInvalid={!!error.confirmPassword}
          />
          <Form.Control.Feedback type='invalid'>
            {error.confirmPassword}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type='submit'>Submit</Button>
        <Button onClick={() => navigate('/')}>Cancel</Button>
      </Form>
    </div>
  );
};

export default Register;
