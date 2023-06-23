// @ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import ThreeDLogo from 'components/Utils/ThreeDLogo.js';
import { Button, Card, Container } from 'react-bootstrap';
import profilePic from '../../assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function About() {
  const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    height: 'auto',
  };
  return (
    <section>
      {/* height is too static need to fix it for more responsive */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '110%',
          backgroundColor: 'grey',
          zIndex: '1',
        }}>
        <ThreeDLogo />
      </div>
      <Container style={{ zIndex: '10', position: 'relative' }}>
        <header>
          <motion.h1
            variants={titleVariants}
            style={{
              paddingTop: '10px',
              fontSize: '2.5em',
              fontWeight: 'bold',
              color: '222',
            }}
            initial='hidden'
            animate='visible'
            className='pt-4'>
            About Me
          </motion.h1>
        </header>
        <Card className='bg-transparent border-0'>
          <Card.Img alt='Profile Picture' src={profilePic} style={imageStyle} />
        </Card>
        <Card>
          <Card.Body>
            <div>
              <Button
                className='rounded-0 mb-2'
                style={{ backgroundColor: '#007bff', color: '#fff' }}
                href='https://drive.google.com/uc?export=download&id=1NZShBsJ2Fo5S0lqMBeG91sWdx1MkhlJX'>
                <FontAwesomeIcon icon={faDownload} className='me-4' />
                Download My Resume
              </Button>
            </div>
            <p>
              I'm an ardent Full Stack Developer with a rich background in
              creating innovative and intuitive web applications. My coding
              journey sprang from my deep-seated passion for gaming. During
              college, I started dabbling in programming, a hobby that later
              transformed into a full-blown career in web development.
            </p>{' '}
            <p>
              Over the years, I've developed a strong proficiency in JavaScript,
              HTML, CSS, TypeScript, and React, allowing me to build
              applications that truly resonate with users' needs. The excitement
              of solving complex challenges, coupled with my fascination for
              technology, drives my day-to-day work.
            </p>{' '}
            <p>
              My love for travel and cultural exploration is another dimension
              of my life that fuels my creativity. Having lived in Japan,
              Taiwan, China, and Israel, and traveled across Europe and East
              Asia, I've had the privilege of experiencing a rich tapestry of
              cultures, people, and (not to forget) cuisines! These experiences
              have not only broadened my worldview but also enriched my
              understanding of user perspectives from diverse backgrounds - a
              valuable asset in my field.
            </p>
            <p>
              Given my strong ties with the gaming world and expertise in web
              development, I am especially intrigued by the prospect of
              contributing to a gaming studio's web development team. This would
              bring together my professional skills and personal passion,
              creating a blend that I believe will lead to remarkable outcomes.
            </p>{' '}
            <p>
              Outside the world of code and consoles, I take pride in being a
              thorough communicator and project manager. From inception to
              completion, I ensure every project gets my undivided attention,
              offering clients seamless experiences and results that exceed
              their expectations.
            </p>{' '}
            <p>
              Thank you for visiting my page. Feel free to explore more about my
              work, and do not hesitate to reach out for collaborations,
              queries, or a good old chat about the latest in tech, gaming, or
              the best travel destinations and food spots around the world!
            </p>
          </Card.Body>
        </Card>
        {/* [to do] should add resume and download feature */}
      </Container>
    </section>
  );
}

export default About;
