// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import ListaCitas from './components/ListaCitas';
import Alerta from './components/Alerta'; // ✅ Importa el nuevo componente
import './App.css';

function App() {
  const [citas, setCitas] = useState(() => {
    const local = localStorage.getItem('citas');
    return local ? JSON.parse(local) : [];
  });

  // ✅ Nuevo estado para la alerta
  const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    const nuevaCita = {
      ...cita,
      id: Date.now(),
    };
    setCitas([...citas, nuevaCita]);
    setAlerta({ mensaje: 'Paciente registrado', tipo: 'exito' }); // Muestra la alerta de éxito
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter((c) => c.id !== id));
    setAlerta({ mensaje: 'Paciente eliminado', tipo: 'exito' }); // Muestra la alerta de éxito
  };

  const actualizarCita = (id, nuevaCita) => {
    const citasActualizadas = citas.map((cita) =>
      cita.id === id ? { ...cita, ...nuevaCita } : cita
    );
    setCitas(citasActualizadas);
    setAlerta({ mensaje: 'Paciente modificado', tipo: 'exito' }); // Muestra la alerta de éxito
  };
  
  // Función para cerrar la alerta
  const cerrarAlerta = () => {
    setAlerta({ mensaje: '', tipo: '' });
  };

  return (
    <div className="container">
      <Header />
      <main className="main">
        <Formulario agregarCita={agregarCita} />
        <ListaCitas
          citas={citas}
          eliminarCita={eliminarCita}
          actualizarCita={actualizarCita}
        />
      </main>
      <Footer />
      {/* Agrega el componente de alerta al final */}
      <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} onClose={cerrarAlerta} />
    </div>
  );
}

export default App;