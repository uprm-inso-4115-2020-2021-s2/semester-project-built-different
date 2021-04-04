import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <h2>RUM2GO</h2>
      <div
        tabIndex="0"
        role="button"
        onKeyDown={() => setShowMenu(true)}
        className={styles.menu_icon}
        onClick={() => setShowMenu(true)}
      >
        <div className={styles.menu_line} />
        <div className={styles.menu_line} />
        <div className={styles.menu_line} />
      </div>
      {showMenu ? (
        <div className={styles.navbar_items}>
          <span
            tabIndex="0"
            role="button"
            onKeyDown={() => setShowMenu(false)}
            className={styles.cerrar}
            onClick={() => setShowMenu(false)}
          >
            <strong>Cerrar</strong>
          </span>
          <span
            tabIndex="0"
            role="button"
            onKeyDown={() => router.push('/')}
            onClick={() => router.push('/')}
          >
            Inicio
          </span>
          <span
            tabIndex="0"
            role="button"
            onKeyDown={() => router.push('/settingpage')}
            onClick={() => router.push('/settingpage')}
          >
            Ajustes
          </span>
          <span
            tabIndex="0"
            role="button"
            onKeyDown={() => router.push('/login')}
            onClick={() => router.push('/login')}
          >
            Iniciar sesión
          </span>
        </div>
      ) : null}
    </div>
  );
}