// @ts-nocheck
import React, { useContext } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AuthContext from 'store/auth-context';
import About from '../Pages/About';
import SketchApp from '../Pages/Projects/SketchApp';
import Home from '../Pages/Home';
import Login from 'components/Pages/Auth/Login';
import logo from '../../assets/mylogo.png';
import Register from 'components/Pages/Auth/Register';
import RegSuccess from 'components/Pages/Auth/RegSuccess';

const NavBarComp = () => {
  const ctx = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Navbar
          bg='light'
          variant='light'
          expand='lg'
          style={{ paddingLeft: '1em' }}>
          <Navbar.Brand href='/home'>
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
              <Nav.Link href='#action1' as={Link} to={'/home'}>
                Home
              </Nav.Link>
              <Nav.Link href='#action2' as={Link} to={'/about'}>
                About
              </Nav.Link>
              <NavDropdown title='Projects' id='navbarScrollingDropdown'>
                <NavDropdown.Item
                  href='#action3'
                  as={Link}
                  to={'projects/randomized_sketch_app'}>
                  Randomized Sketch App
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action5'>
                  Stream Live Rank App
                </NavDropdown.Item>
              </NavDropdown>
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

              {/* [todo]set up my link page */}
              <Nav.Link href='#' disabled>
                Contact Me
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
                <Button style={{ marginRight: '2em' }} variant='success'>
                  Search
                </Button>
              </Form>
              {/* { maybe use react memo since we dont need render this all the time unless logged in */}
              {ctx.isLoggedIn ? (
                <>
                  <div style={{ margin: 'auto' }}>
                    Welcome! {ctx.displayName}
                  </div>
                  <Button onClick={ctx.onLogout} to={'/home'} className='ms-2'>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className='me-2' as={Link} to={'/login'}>
                    Login
                  </Button>
                  <Button as={Link} to={'/register'}>
                    Register
                  </Button>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/projects/randomized_sketch_app' element={<SketchApp />} />
        {/* <Route path='/projects/stream_rank_app' element={<StreamApp />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<RegSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarComp;