import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router'


export default function Navbar () {
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()

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
                    <span onClick={() => router.push('/')}>
                        Inicio
                    </span>
                    <span>Favoritos</span>
                    <span onClick={() => router.push('/login')}>
                        Iniciar sesión
                    </span>
                </div>
            ) : null}
        </div>
    )
} 