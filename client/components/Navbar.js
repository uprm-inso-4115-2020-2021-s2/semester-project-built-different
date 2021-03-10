import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';


export default function Navbar () {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className={styles.navbar}>
            <h2>RUM2GO</h2>
            <div 
                className={styles.menu_icon}
                onClick={() => setShowMenu(true)}
            >
                <div className={styles.menu_line}></div>
                <div className={styles.menu_line}></div>
                <div className={styles.menu_line}></div>
            </div>
            {showMenu ? (
                <div className={styles.navbar_items}>
                    <span 
                        className={styles.cerrar} 
                        onClick={() => setShowMenu(false)}
                    >
                        <strong>Cerrar</strong>
                    </span>
                    <span>Inicio</span>
                    <span>Favoritos</span>
                    <span>Iniciar sesion</span>
                </div>
            ) : null}
        </div>
    )
} 