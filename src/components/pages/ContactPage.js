import React from 'react';
import Layout from '../Layout';
import './ContactPage.scss';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <Layout title='CONTACT'>
      <div className='contactpage'>
        <div className='content-box'>
          <h1>Contacts</h1>
          <p>Call me!</p>
          <div className='contact-links'>
            <a href='mailto:lancelav1@gmail.com' target='_blank' rel='noopener noreferrer'>
              <FaEnvelope className='contact-icon' /> Email: lancelav1@gmail.com
            </a>
            <a href='tel:+63 919 488 7035' target='_blank' rel='noopener noreferrer'>
              <FaPhone className='contact-icon' /> Phone: +63 919 488 7035
            </a>
            <a href='https://github.com/hsum4' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='contact-icon' /> GitHub: github.com/hsum4
            </a>
            <a href='https://linkedin.com/in/lance-lavador-b43819276' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='contact-icon' /> LinkedIn: linkedin.com/in/lance-lavador-b43819276
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
