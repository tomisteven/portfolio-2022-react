import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './Pages/AboutMe';
import NavbarComponent from './Pages/Navbar';
import Presentation from './Pages/Presentation';
import TopProyects from './Pages/TopProyects';
import Footer from './Pages/Footer';
import Webs from './Pages/Webs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TopProyectsIndivudual from './Pages/TopProyectsIndivudual';
import ContactMe from './Pages/ContactMe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <Router>
      <Routes>
         <Route path='/' element={<Presentation />} /> 
        <Route path='/top-proyects' element={<TopProyects />} />
        <Route path='/webs' element={<Webs />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/proyect/:id' element={<TopProyectsIndivudual />} />
        <Route path='/contactme' element={<ContactMe />} />

        </Routes>
    </Router>
    <Footer />
    
  </React.StrictMode>
);

reportWebVitals();
