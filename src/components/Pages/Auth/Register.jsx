// @ts-nocheck
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase';
import React, { useReducer, useState, useContext } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { formReducer } from '../../../store/AccountReducer';
import AuthContext from '../../../store/auth-context';
import validateInput from '../../Utils/ValidationLogic';

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
  const authCtx = useContext(AuthContext);
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
    //need to check if the email exist
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await updateProfile(result.user, {
        displayName: form.username,
      });
      authCtx.setDisplayName(form.username);
      navigate('/success');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // Set an error state here to show a notification
        setError({
          message: 'The email address is already in use by another account.',
        });
      }
      console.log(error);
    }

    //[To do] make this funciton post http to firebase properly
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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

    // lets just use a grouping method of if else, instead of just checking with state error(closure issue)
  };

  return (
    <div className='m-3'>
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
        <Form.Group className='mb-3'>
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
        {error.message && <Alert variant='danger'> {error.message}</Alert>}
        <Button className='me-1' type='submit'>
          Submit
        </Button>
        <Button variant='secondary' onClick={() => navigate('/home')}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default Register;
