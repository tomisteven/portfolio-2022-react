import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './Pages/AboutMe';
import Navbar from './Pages/Navbar';
import Presentation from './Pages/Presentation';
import TopProyects from './Pages/TopProyects';
import Webs from './Pages/Webs';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Navbar />
    <Presentation />
    <TopProyects />
    <AboutMe />
    <Webs />

  </React.StrictMode>
);

reportWebVitals();
