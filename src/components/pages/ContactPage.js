import React from 'react';

const ContactPage = () => {
  return (
    <main>
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
    </main>
  );
};

export default ContactPage;
