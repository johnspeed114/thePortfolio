// @ts-nocheck
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from '../Pages/About';
import Games from '../Pages/Games';
import Home from '../Pages/Home';
import Login from 'components/Pages/Login';
import logo from '../../assets/mylogo.png';

const NavBarComp = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar
          bg='light'
          variant='light'
          expand='lg'
          style={{ paddingLeft: '1em' }}>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              width='40'
              height='45'
              className='a-inline-block align-top'
              alt='My Logo'
            />
            {/* need to push the marign more right  */}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            style={{ justifyContent: 'space-between' }}>
            <Nav
              className='mr-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll>
              <Nav.Link href='#action1' as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link href='#action2' as={Link} to={'/about'}>
                About
              </Nav.Link>
              <Nav.Link href='#action3' as={Link} to={'/games'}>
                Games
              </Nav.Link>
              {/* <NavDropdown title='Link' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href='#' disabled>
                Link
              </Nav.Link>
            </Nav>
            <div className='d-flex' style={{ marginRight: '1em' }}>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='mr-2'
                  aria-label='Search'
                />
                <Button variant='success'>Search</Button>
              </Form>
              <div>
                <Button as={Link} to={'/login'} style={{ marginLeft: '2em' }}>
                  Login
                </Button>
                <Button>Register</Button>
              </div>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/games' element={<Games />} />
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default NavBarComp;
