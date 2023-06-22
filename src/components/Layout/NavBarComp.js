// @ts-nocheck
import React, { lazy, Suspense, useContext } from 'react';
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
import logo from '../../assets/mylogo.png';
const About = lazy(() => import('../Pages/About'));
const SketchApp = lazy(() => import('../Pages/Projects/SketchApp/SketchApp'));
const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('components/Pages/Auth/Login'));
const Register = lazy(() => import('components/Pages/Auth/Register'));
const RegSuccess = lazy(() => import('components/Pages/Auth/RegSuccess'));
const LeaderboardApp = lazy(() =>
  import('components/Pages/Projects/LeaderboardApp/LeaderboardApp')
);

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
          <Navbar.Brand href='/thePortfolio'>
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
              <Nav.Link href='#action1' as={Link} to={'/thePortfolio'}>
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
                <NavDropdown.Item
                  href='#action5'
                  as={Link}
                  to={'/projects/leaderboard_app'}>
                  Streamer Leaderboard App
                </NavDropdown.Item>
              </NavDropdown>

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
        <Route
          path='/about'
          element={
            <Suspense fallback={<>Loading...</>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/thePortfolio'
          element={
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/projects/randomized_sketch_app'
          element={
            <Suspense fallback={<>Loading...</>}>
              <SketchApp />
            </Suspense>
          }
        />
        <Route
          path='/projects/leaderboard_app'
          element={
            <Suspense fallback={<>Loading...</>}>
              <LeaderboardApp />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<>Loading...</>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/register'
          element={
            <Suspense fallback={<>Loading...</>}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path='/success'
          element={
            <Suspense fallback={<>Loading...</>}>
              <RegSuccess />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarComp;
