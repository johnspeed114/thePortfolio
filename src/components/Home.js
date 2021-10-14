import React from 'react'

import ThreeDLogo from 'components/ThreeDLogo.js'
import '../App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from 'react-bootstrap'

function Home() {
  return (
    <div>
      <header className='App-header'>
        <Container>
          {/* You can use fluid to make it resize to fit the entire page auto */}
          <Card className='titlewelcome-card'>
            <Card.Body className='titlewelcome-card-body'>
              Welcome to John's Free Masonary. Enjoy Your Stay!
            </Card.Body>
          </Card>
          <ThreeDLogo />
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
            <Button variant='secondary' type='submit'>
              Login
            </Button>
          </Form>
          <Card className='mb-3' style={{ color: '#000' }}>
            <Card.Img src='https://picsum.photos/200/50' />
            <Card.Body>
              <Card.Title>Card Test</Card.Title>
              <Card.Text>This is an example of react bootstrap cards</Card.Text>
              <Button variant='primary'>ButtonTest</Button>
            </Card.Body>
          </Card>
          <Breadcrumb>
            <Breadcrumb.Item>Test</Breadcrumb.Item>
            <Breadcrumb.Item>Test2</Breadcrumb.Item>
            <Breadcrumb.Item>Test3</Breadcrumb.Item>
          </Breadcrumb>
          <Alert variant='success'>Will this work?</Alert>
          <Button>Text button</Button>
        </Container>
      </header>
    </div>
  )
}

export default Home
