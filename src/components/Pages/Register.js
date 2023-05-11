// @ts-nocheck
import React, { useReducer, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { errorReducer, formReducer } from 'store/AccountReducer';
import validateInput from 'components/Utils/ValidationLogic';

const Register = () => {
  // const [error, dispatchError] = useReducer(errorReducer, {error:''})
  //[FYI] bday stands for user's birthday
  const [form, dispatchForm] = useReducer(formReducer, {
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
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

  //Fetch api post register user data
  const postRegisterData = async () => {
    //with this useReducer we can map for the data out to be posted in firebase or just send it whole?
    const unNestForm = {
      email: form.email,
    };
    const response = await fetch(
      'https://portfolio-db-8d1f9-default-rtdb.firebaseio.com/users.json',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          username: form.username,
          password: form.password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Somewhere in the code went wrong');
    }
    const data = await response.json();
    console.log(data);
    //[To do] make this funciton post http to firebase properly
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //There is a lot of redundencies think of ways to be more lean
    //Logic is fucked need to think more about this
    console.log(form.email);
    const newErrors = Object.entries(form).reduce((acc, [name, value]) => {
      const errorMessage = validateInput(name, value, form);
      if (errorMessage) {
        acc[name] = errorMessage;
      }
      return acc;
    }, {});

    setError(newErrors);
    console.log(error.confirmPassword);

    if (Object.keys(newErrors).length === 0) {
      console.log('No errors. Proceed with the registration process.');
      postRegisterData();
    }

    //[TO DO] add a password confirmation, names, bday
    //[To do] backend send an api to the request the verification, if good then pass to congratz page
    //[TO do] encrypt your password
    // lets just use a grouping method of if else, instead of just checking with state error(closure issue)
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
