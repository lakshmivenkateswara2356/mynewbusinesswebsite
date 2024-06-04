import React from 'react';


function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1><a href="#about">My Blog</a></h1>
      <nav>
        <ul>
        <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          <li className="theme-toggle-container">
            <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="theme-toggle-label">
              {theme === 'light' ? '☀️' : '🌙'}
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
