// @ts-nocheck
import React, { useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { errorReducer, formReducer } from "store/AccountReducer";

const Register = () => {
  // const [error, dispatchError] = useReducer(errorReducer, {error:''})
  //[FYI] bday stands for user's birthday
  const [form, dispatchForm] = useReducer(formReducer, {
    email: "",
    password: "",
    username: "",
    bday: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const emailChangeHandler = (event) => {
    dispatchForm({ type: "EMAIL", value: event.target.value });
    // if (event.target.value === '') {
    //     setFormIsValid(true)
    //     dispatchEmail({type: 'EMPTY', value: event.target.value})
    // }
    // dispatchEmail({type:'', value: event.target.value})
    // setFormIsValid(true)
    //onchange might have some limitations due to feedback triggering for all inputs
    //lets just use handlesubmit with usestate
    //[to do tomorrow] create handlesubmit with error checks if state the email, password length(with number and capital), and no empty inputs
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ type: "PASSWORD", value: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //[TO Do] Switch to switch conditonal
    //There is a lot of redundencies think of ways to be more lean
    //Logic is fucked need to think more about this
    if (!form.email) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter your email",
      }));
      // setFormIsValid(true);
    }
    if (form.email.length > 0) {
      if (!form.email.includes("@")) {
        setError((prevError) => ({
          ...prevError,
          email: 'Email is missing "@". Please input the correct format',
        }));
      } else {
        setError((prevError) => ({ ...prevError, email: "" }));
      }
    }

    if (!form.password) {
      setError((prevError) => ({
        ...prevError,
        password: "Please enter your password",
      }));
      // setFormIsValid(true);
    }

    if (form.password.length > 0) {
      if (form.password.length < 7) {
        setError((prevError) => ({
          ...prevError,
          password:
            "Password too short! Please enter a password longer than 6 characters",
        }));
      } else {
        const pwRegEx = /(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
        if (!pwRegEx.test(form.password)) {
          setError((prevError) => ({
            ...prevError,
            password:
              "You are missing a special character, number, and/or uppercase letter. Please include it in your password.",
          }));
        } else {
          setError((prevError) => ({
            ...prevError,
            password: "",
          }));
        }
      }
    }
    //[TO DO] add a password confirmation, names, bday
    //[To do] redirect url for both cancel (to home) and submit(to a new congratz registration page)
  };

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Example@email.com"
            onChange={emailChangeHandler}
            value={form.email}
            required
            isInvalid={!!error.email}
          />
          <Form.Control.Feedback type="invalid">
            {error.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Password (Must be greater than 6 characters, have one upper case
            letter, have a number, have a special character)
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={form.password}
            required
            onChange={passwordChangeHandler}
            isInvalid={!!error.password}
          />
          <Form.Control.Feedback type="invalid">
            {error.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button>Cancel</Button>
      </Form>
    </div>
  );
};

export default Register;
