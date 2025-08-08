// src/components/Alerta.jsx
import { useEffect, useState } from 'react';
import styles from './Alerta.module.css';

function Alerta({ mensaje, tipo, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mensaje) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000); // La alerta desaparece después de 3 segundos
      return () => clearTimeout(timer);
    }
  }, [mensaje, onClose]);

  if (!visible) return null;

  return (
    <div className={`${styles.alerta} ${styles[tipo]}`}>
      <span className={styles.mensaje}>{mensaje}</span>
    </div>
  );
}

export default Alerta;