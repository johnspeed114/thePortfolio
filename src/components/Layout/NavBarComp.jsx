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
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthContext from '../../store/auth-context';
import logo from '../../assets/mylogo.png';
import ValorantMapApp from '../Pages/Projects/ValorantMapApp/ValorantMapApp';
const Home = lazy(() => import('../Pages/Home'));
const About = lazy(() => import('../Pages/About'));
const SketchApp = lazy(() => import('../Pages/Projects/SketchApp/SketchApp'));
const LeaderboardApp = lazy(() =>
  import('../Pages/Projects/LeaderboardApp/LeaderboardApp')
);
const Contact = lazy(() => import('../Pages/Contact'));
const Login = lazy(() => import('../Pages/Auth/Login'));
const Register = lazy(() => import('../Pages/Auth/Register'));
const RegSuccess = lazy(() => import('../Pages/Auth/RegSuccess'));

const NavBarComp = () => {
  const ctx = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div>
        <Navbar bg='light' variant='light' expand='lg' className='ps-3'>
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
            className='justify-content-between'>
            <Nav className='mr-auto my-2 my-lg-0 mh-100' navbarScroll>
              <Nav.Link href='#action1' as={Link} to={'/'}>
                Home
              </Nav.Link>
              <Nav.Link href='#action2' as={Link} to={'/about'}>
                About
              </Nav.Link>
              <NavDropdown title='Projects' id='navbarScrollingDropdown'>
                <NavDropdown.Item
                  href='#action3'
                  as={Link}
                  to={'/projects/randomized_sketch_app'}>
                  Randomized Sketch App
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href='#action5'
                  as={Link}
                  to={'/projects/leaderboard_app'}>
                  Streamer Leaderboard App
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href='#action6'
                  as={Link}
                  to={'/projects/valorant_map_app'}>
                  Valorant Map App
                </NavDropdown.Item>
              </NavDropdown>

              {/* [todo]set up my link page */}
              <Nav.Link href='#action6' as={Link} to={'/contact'}>
                Contact Me
              </Nav.Link>
            </Nav>
            <div className='d-flex me-3'>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Coming Soon'
                  className='rounded-1'
                  aria-label='Search'
                />
                <Button className='me-5 rounded-1' variant='secondary'>
                  Search
                </Button>
              </Form>
              {ctx.isLoggedIn ? (
                <>
                  <div className='mx-auto'>Welcome! {ctx.displayName}</div>
                  <Button
                    onClick={ctx.onLogout}
                    to={'/thePortfolio'}
                    className='ms-2'>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button className='me-2 rounded-1' as={Link} to={'/login'}>
                    Login
                  </Button>
                  <Button as={Link} to={'/register'} className='rounded-1'>
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
          path='/'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='/about'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <About />
            </Suspense>
          }
        />
        <Route
          path='/contact'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path='/projects/randomized_sketch_app'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <SketchApp />
            </Suspense>
          }
        />
        <Route
          path='/projects/leaderboard_app'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <LeaderboardApp />
            </Suspense>
          }
        />
        <Route
          path='/projects/valorant_map_app'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <ValorantMapApp />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <Login />
            </Suspense>
          }
        />
        <Route
          path='/register'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <Register />
            </Suspense>
          }
        />
        <Route
          path='/success'
          element={
            <Suspense
              fallback={
                <div className='spinner-border text-primary' role='status'>
                  <span className='visually-hidden'>Loading...</span>
                </div>
              }>
              <RegSuccess />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default NavBarComp;
