import React from 'react';

function Header({ toggleTheme, theme }) {
  return (
    <header className="header">
      <h1 href="#about"> My Blog</h1>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>

          <input
              type="checkbox"
              id="theme-toggle"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle">
              {theme === 'light'}
            </label>
        </ul>
        
      </nav>

      
    </header>
  );
}

export default Header;

