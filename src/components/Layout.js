import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.scss'

const Layout = ({ children, title }) => {
    return (
      <div className="layout">
        <div className="sidebar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="content">
          {children}
        </div>
        <div className="title">
          <span>{title}</span>
          <div className="blinking-box"></div>
        </div>
      </div>
    );
  };
  
  export default Layout;