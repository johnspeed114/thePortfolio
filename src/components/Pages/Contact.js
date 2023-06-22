import React from "react";
import { motion } from "framer-motion";


const ContactForm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="contact-form text-center mt-5"
    >
      <motion.h2
        className="contact-me__title"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        Contact Me
      </motion.h2>

      <div>
        <h3>Let's Connect!</h3>
        <p>You can reach out to me via the following platforms:</p>

        <a href="mailto:johnlaw114@gmail.com">Email</a>
        <br/>
        <a
          href="https://github.com/johnspeed114"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <br/>
        <a
          href="https://www.facebook.com/johnspeed114/"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>
        <br/>
        <a
          href="https://www.linkedin.com/in/john-law-a348a2b3/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        
      </div>
    </motion.div>
</>
  );
};

export default ContactForm;
