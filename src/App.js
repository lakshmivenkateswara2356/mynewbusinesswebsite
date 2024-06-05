import React, { useState, useEffect } from 'react';
import Preloader from "../src/components/pre";
import Header from './components/Header';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}></div>
      
      <Header toggleTheme={toggleTheme} theme={theme} />zs
      <main>
      
      <About />
      <Services />
      <Portfolio />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

