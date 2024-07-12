import React from 'react';
import Layout from '../Layout';
import './ContactPage.scss'

const ContactPage = () => {
  return (
    <Layout title='CONTACT'>
      <div className='contactpage'>
        <h1>Contact Me</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  );
};

export default ContactPage;
