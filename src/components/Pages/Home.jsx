// @ts-nocheck
import { useState, useEffect } from 'react';

import ThreeDLogo from '../Utils/ThreeDLogo.jsx';
import '../../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Button, Card, Spinner } from 'react-bootstrap';

function Home() {
  const [imgSrc, setImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadImage = () => {
    const image = new Image();
    image.src = `https://picsum.photos/2000/750?random=${Date.now()}`;

    image.onload = () => {
      setImgSrc(image.src);
      setLoading(false);
    };

    image.onerror = () => {
      console.error('Error loading image');
      setLoading(false);
    };
  };

  // Use useEffect to load a new image on the initial render
  useEffect(() => {
    loadImage();
  }, []);

  return (
    <div>
      <div class='position-absolute w-100 h-100'>
        <ThreeDLogo />
      </div>
      <header className='App-header'>
        <Container>
          {/* You can use fluid to make it resize to fit the entire page auto */}

          <Card className='titlewelcome-card bg-transparent mt-1'>
            <Card.Body className='titlewelcome-card-body bg-transparent font-weight-bold text-white'>
              Welcome to John's Portolfio Site
            </Card.Body>
            <Card.Body className='h6 bg-transparent text-white'>
              I'm a Full Stack Developer, passionate about creating innovative
              web applications and enhancing user experience. With my
              proficiency in languages like JavaScript, HTML, CSS, TypeScript,
              and React, I'm ready to tackle challenges and offer you unique
              solutions. <br /> <br />
              PS: (click and drag the sides of this page, and see what happens
              😁)
            </Card.Body>
          </Card>

          <Card className='mb-3 mt-2 text-black'>
            {loading ? (
              <Spinner animation='border' />
            ) : (
              <Card.Img src={imgSrc} />
            )}
            <Card.Body>
              <Button variant='primary' onClick={loadImage}>
                Click! Randomize Pic
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </header>
    </div>
  );
}

export default Home;
