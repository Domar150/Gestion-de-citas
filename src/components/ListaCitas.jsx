import styles from './ListaCita.module.css';
import Cita from './Cita'; // Asegúrate de que el componente Cita esté importado

function ListaCitas({ citas, eliminarCita, actualizarCita }) {
  return (
    <div className={styles.container}>
      {/* ✅ Título condicional: "Pacientes Registrados" */}
      {citas.length > 0 && (
        <h2 className={styles.titulo}>Pacientes Registrados</h2>
      )}
      <div className={styles.grid}>
        {citas.map((cita) => (
          <Cita
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
            actualizarCita={actualizarCita}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCitas;