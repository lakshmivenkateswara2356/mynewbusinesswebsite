import React, { useState } from 'react';
import image from '../../Assets/company.png';

function Header({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>
        <a href="#about">
          <img src={image} alt="logo" className="image" />
        </a>
      </h1>
      <nav>
        <div className="hamburger" onClick={handleMenuToggle}>
          ☰
        </div>
        <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
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
              {theme === 'light' ? 'Dark' : 'Light'}
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
