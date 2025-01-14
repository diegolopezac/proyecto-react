import React from 'react';
import './FirstSection.css';

const FirstSection = () => {
  return (
    <section className="first-section">
     
     
      {/* Aire Contaminado */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAubx_K-pplf4sxAIkS7xKmkVufmBit6HH4QKT8mXq0xRQisS7dvTMjuzpPLnqScuWOkyQhJJJQ_qGjivqd8o8s-dByDoBT0Z24_1pR0ItyUdTCBw1uvjASPuLlpPJI12mAPLBU7hpvxo/s1600/nios+aire.jpg')",
          }}
        ></div>
        <h3>Contaminación del Aire</h3>
        <p>
          La contaminación del aire afecta gravemente la salud humana, causando
          enfermedades respiratorias y cardiovasculares.
        </p>
      </div>

      {/* Contaminación del Agua */}
      <div class="d">
      <div className="feature" >
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80')",
          }}
        ></div>
        <h3>Contaminación del Agua</h3>
        <p>
          Los residuos tóxicos y plásticos contaminan ríos y mares, amenazando
          la vida acuática y el suministro de agua potable.
        </p>
      </div>
      </div>

      {/* Contaminación del Suelo */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzWs-MBQyV4YV9bsptH9d83VT2jiPng1qcQ&s')",
            
            }}
        ></div>
        <h3>Contaminación del Suelo</h3>
        <p>
          El uso excesivo de químicos y la mala gestión de residuos dañan los
          suelos, reduciendo su fertilidad.
        </p>
      </div>

      {/* Contaminación Acústica */}
      <div className="feature">
        <div
          className="image"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPj15mlJiBwOuIG498A-nI5ISJfps0QFzwTQ&s)",
          }}
        ></div>
        <h3>Contaminación Acústica</h3>
        <p>
          El ruido constante en entornos urbanos afecta la salud mental y causa
          estrés y problemas auditivos.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;