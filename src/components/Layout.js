import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss'

const Layout = ({ children, title }) => {
    const [typedTitle, setTypedTitle] = useState('');
    const location = useLocation(); //get current url
    let typingInterval;

    useEffect(() => {
        const newTitle = title; //get title from prop

        let timerId = setTimeout(() => {
            setTypedTitle('');  //clear prev title
            let i = 0;
            const typingInterval = setInterval(() => {
                setTypedTitle(newTitle.substring(0, i+1));
                i++;
                if (i > newTitle.length) {
                  clearInterval(typingInterval);
                }
              }, 100); //adjust typing speed
          }, 500); //adjust delay before typing starts

          //cleanup func
          return () => {
            clearTimeout(timerId);
            clearInterval(typingInterval);
          };
      }, [title, location, typingInterval]);

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
          <span>{typedTitle}</span>
          <div className="blinking-box"></div>
        </div>
      </div>
    );
  };
  
  export default Layout;