// @ts-nocheck
import React, { useState, useContext } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import AuthContext from "store/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  //for now lets use usestate for pw and email
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    //need to figure out where to put the authprovider component!
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      authCtx.onLogin(email, password);
      navigate("/");
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
      <Row style={{ margin: "10px" }}>
        <Col md>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              required
              onChange={emailChangeHandler}
              value={email}
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Approriate Email
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md>
          {/* md is for viewpoint for mobile screen resizing */}
          <Form.Group controlId="formPassword">
            {/* saves the password with the control id in browser you can select later! */}
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={passwordChangeHandler}
              value={password}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Correct Password
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Button
          style={{ marginTop: "1em", width: "10%" }}
          variant="secondary"
          type="submit"
        >
          Login
        </Button>
      </Row>
    </Form>
  );
};

export default Login;
