import React, { useState } from 'react';

function ValidarContraseña() {
  const [Contraseña1, setContraseña1] = useState('');
  const [Contraseña2, setContraseña2] = useState('');
  const [mensaje, setMensaje] = useState('');

  const validarContraseñas = (e) => {
    e.preventDefault();

    if (Contraseña1.length < 8) {
      setMensaje('Las contraseñas deben tener una longitud minima de 8 caracteres.');
    } else if (Contraseña1 !== Contraseña2) {
      setMensaje('Las contraseñas deben ser iguales.');
    } else {
      setMensaje('Las contraseñas son iguales.');
    }
  };

  return (
    <div>
    
      <form onSubmit={validarContraseñas}>
        <input
          type="password"
          placeholder="ingresa tu contraseña"
          value={Contraseña1}
          onChange={(e) => setContraseña1(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={Contraseña2}
          onChange={(e) => setContraseña2(e.target.value)}
          required
        />
        <button type="submit">Validar</button>
      </form>
      <div>{mensaje}</div>
    </div>
  );
}

export default ValidarContraseña;