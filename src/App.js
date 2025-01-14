import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Seccion from './components/Seccion';
import Footer from './components/Footer';
import FirstSection from './components/FirstSection'; // Importa la nueva sección
import './App.css';



function App() {
  const [formData, setFormData] = useState({ name: '', email: '', seccion1: '', seccion2: '', seccion3: '', comentarios: '' });

  // Maneja el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          {/* Página de Inicio */}
          <Route
            path="/"
            element={
              <div>
                <center>
                  <h1>¿QUE ES LA CONTAMINACION?</h1>
                </center>
                {/* Aquí integramos FirstSection */}
                <FirstSection />

                <section className="testimonios-section">
                  <h2>Lo que dicen nuestros clientes</h2>
                  <div className="testimonios-container">
                    {/* Testimonio 1 */}
                    <div className="testimonio">
                      <img
                        src={require('./assets/cliente1.jpg')} // Imagen local
                        alt="Cliente 1"
                        className="testimonio-img"
                      />
                      <blockquote>
                        "El servicio fue excelente y superó mis expectativas. Definitivamente lo recomendaría."
                      </blockquote>
                      <p>- María González</p>
                    </div>
                    {/* Testimonio 2 */}
                    <div className="testimonio">
                      <img
                        src={require('./assets/cliente2.jpg')} // Imagen desde un link externo
                        alt="Cliente 2"
                        className="testimonio-img"
                      />
                      <blockquote>
                        "Una experiencia increíble. Los resultados fueron justo lo que necesitaba."
                      </blockquote>
                      <p>- Carlos López</p>
                    </div>
                    {/* Testimonio 3 */}
                    <div className="testimonio">
                      <img
                        src={require('./assets/cliente3.jpg')} // Imagen local
                        alt="Cliente 3"
                        className="testimonio-img"
                      />
                      <blockquote>
                        "Profesionalismo y atención al detalle. ¡Volveré a trabajar con ellos!"
                      </blockquote>
                      <p>- Ana Torres</p>
                    </div>
                  </div>
                </section>

                <section>
                  {/* Tercera sección: Tabla de contaminantes */}
                  <div className="contaminacion">
                    <center>
                      <h2>¿Qué más contamina en nuestro mundo?</h2>
                      <table className="contaminacion-table">
                        <thead>
                          <tr>
                            <th>Contaminante</th>
                            <th>Fuente Principal</th>
                            <th>Impacto Ambiental</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Plásticos</td>
                            <td>Residuos de consumo, envases</td>
                            <td>Contaminación del agua y la fauna marina</td>
                          </tr>
                          <tr>
                            <td>Emisiones de CO2</td>
                            <td>Transporte, industria</td>
                            <td>Cambio climático y calentamiento global</td>
                          </tr>
                          <tr>
                            <td>Desforestación</td>
                            <td>Agricultura, urbanización</td>
                            <td>Pérdida de biodiversidad y aumento de CO2 en la atmósfera</td>
                          </tr>
                          <tr>
                            <td>Desperdicio de Alimentos</td>
                            <td>Exceso de producción y consumo</td>
                            <td>Generación de residuos orgánicos, emisiones de metano</td>
                          </tr>
                          <tr>
                            <td>Residuos Electrónicos</td>
                            <td>Desecho de dispositivos obsoletos</td>
                            <td>Contaminación del suelo y agua con materiales tóxicos</td>
                          </tr>
                        </tbody>
                      </table>
                    </center>
                  </div>
                </section>
              </div>
            }
          />

          {/* Página "About Us" */}
          <Route
            path="/about"
            element={
              <div>
                <center>
                  <section className="about-section">
                  <h2>Sobre Nosotros</h2>
                  <p>
                    En nuestra empresa, estamos comprometidos con la preservación del medio ambiente y la lucha contra la contaminación
                    en todas sus formas. Sabemos que los problemas ambientales que enfrentamos son cada vez más graves, y es por eso
                    que hemos creado soluciones innovadoras para tratar y reducir la contaminación en los ecosistemas urbanos y rurales.
                  </p>
                  <p>
                    A través de años de investigación y desarrollo, hemos implementado tecnologías avanzadas que nos permiten tratar
                    desechos plásticos, reducir emisiones de CO2, limpiar fuentes de agua contaminadas y restaurar áreas afectadas
                    por la deforestación. Además, trabajamos en estrecha colaboración con gobiernos, empresas y comunidades para promover
                    la sostenibilidad y crear conciencia sobre el impacto de la contaminación en nuestro planeta.
                  </p>
                  <p>
                    Nuestro equipo está compuesto por expertos en diversas áreas, desde biólogos y químicos hasta ingenieros ambientales
                    y activistas. Juntos, buscamos transformar las comunidades mediante programas de reciclaje, educación ambiental y
                    proyectos de restauración ecológica.
                  </p>
                  <p>
                    Creemos firmemente que solo con la cooperación global podremos enfrentar los desafíos que impone la contaminación.
                    Por ello, nuestra misión no es solo tratar los síntomas de la contaminación, sino también abordar las causas fundamentales
                    mediante la innovación y el cambio en las prácticas industriales y de consumo.
                  </p>
                </section>
                </center>
                <section>

                  <form onSubmit={handleSubmit}>
                    <h3>Cuestionario sobre la Contaminación</h3>

                    <div className="form-section">
                      <h4>Sección 1: Fácil</h4>
                      <label htmlFor="seccion1">1. ¿Qué es la contaminación?</label>
                      <input
                        type="text"
                        name="seccion1"
                        id="seccion1"
                        value={formData.seccion1}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                      <label htmlFor="seccion1">2. ¿Cuáles son las fuentes comunes de contaminación del aire?</label>
                      <input
                        type="text"
                        name="seccion1"
                        id="seccion1"
                        value={formData.seccion1}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                    </div>

                    <div className="form-section">
                      <h4>Sección 2: Medio</h4>
                      <label htmlFor="seccion2">3. ¿Cuáles son los efectos principales de la contaminación del agua en los ecosistemas?</label>
                      <input
                        type="text"
                        name="seccion2"
                        id="seccion2"
                        value={formData.seccion2}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                      <label htmlFor="seccion2">4. ¿Qué medidas crees que podrían ayudar a reducir la contaminación en las ciudades?</label>
                      <textarea
                        name="seccion2"
                        id="seccion2"
                        value={formData.seccion2}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                    </div>

                    <div className="form-section">
                      <h4>Sección 3: Difícil</h4>
                      <label htmlFor="seccion3">5. ¿Qué impacto tiene la deforestación en la contaminación global y el cambio climático?</label>
                      <textarea
                        name="seccion3"
                        id="seccion3"
                        value={formData.seccion3}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                      <label htmlFor="seccion3">6. ¿Cómo pueden las políticas gubernamentales y las iniciativas privadas colaborar para frenar la contaminación?</label>
                      <textarea
                        name="seccion3"
                        id="seccion3"
                        value={formData.seccion3}
                        onChange={handleChange}
                        placeholder="Tu respuesta..."
                      />
                    </div>

                    <div className="form-section">
                      <h4>Comentarios adicionales</h4>
                      <textarea
                        name="comentarios"
                        id="comentarios"
                        value={formData.comentarios}
                        onChange={handleChange}
                        placeholder="Si tienes más comentarios, por favor compártelos..."
                      />
                    </div>

                    <button type="submit">Enviar Respuestas</button>
                  </form>
                </section>
              </div>
            }
          />

          {/* Página de Contacto */}
          <Route
            path="/contact"
            element={
              <Seccion
                title="Contacto"
                content={<ContactForm onSubmit={handleSubmit} />}
              />
            }
          />
        </Routes>
      </div>
      <Footer /> {/* Este Footer se mostrará en todas las páginas */}
    </Router>
  );
}

function ContactForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;