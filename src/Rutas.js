import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../componentes/Home';
import About from '../componentes/About';
import Contact from '../componentes/Contact';
import Dashboard from '../componentes/Dashboard';
import Rutaprivada from './Rutaprivada';
import './App.css'; 

const Rutas = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="container">
        <h1>Aplicación React</h1>

     
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        
        <div>
          <button onClick={() => setIsAuthenticated(true)}>Iniciar Sesión</button>
          <button onClick={() => setIsAuthenticated(false)}>Cerrar Sesión</button>
          <p>{isAuthenticated ? 'Autenticado' : 'No Autenticado'}</p>
        </div>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/dashboard"
            element={
              <Rutaprivada isAuthenticated={isAuthenticated}>
                <Dashboard />
              </Rutaprivada>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Rutas;