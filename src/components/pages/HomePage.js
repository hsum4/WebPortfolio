import React from 'react';
import Layout from '../Layout';
import './HomePage.scss';

const HomePage = () => {
  
  return (
    <Layout title="HOME">
      <div className="homepage">
        <div className='profile'>
          <div className='info'>
            <h1>Lance Lavador</h1>
            <p>Web Developer</p>
          </div>
          <img src={process.env.PUBLIC_URL + 'pic.png'} alt = "Lance Lavador" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
