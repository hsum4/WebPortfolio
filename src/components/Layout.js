import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.scss';

const Layout = ({ children, title }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  let typingInterval;

  useEffect(() => {
    const newTitle = title;

    let timerId = setTimeout(() => {
      setTypedTitle('');
      let i = 0;
      const typingInterval = setInterval(() => {
        setTypedTitle(newTitle.substring(0, i + 1));
        i++;
        if (i > newTitle.length) {
          clearInterval(typingInterval);
        }
      }, 100);
    }, 500);

    return () => {
      clearTimeout(timerId);
      clearInterval(typingInterval);
    };
  }, [title, location, typingInterval]);

  // Close sidebar on location change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout">
      <div className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          &#9776;
        </button>
        <div className="title">
          <span>{typedTitle}</span>
          <div className="blinking-box"></div>
        </div>
      </div>
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
            <li><Link to="/about" onClick={toggleSidebar}>About</Link></li>
            <li><Link to="/projects" onClick={toggleSidebar}>Projects</Link></li>
            <li><Link to="/contact" onClick={toggleSidebar}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
