import React from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/admin/Home.module.css';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>RUM2GO</title>
                <link rel="icon" href="/rum2go.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h2>Bienvenido, Usuario</h2>
                <p>Acciones</p>
                <hr/>
                <div className={styles.buttonbox}>
                    <Button variant="success" onClick={() => router.push('./admin/inventario')}>Ver inventario</Button>
                    <Button variant="success" onClick={() => router.push('./admin/addfood')}>Añadir comida</Button>
                    <Button variant="success">Editar comida</Button>
                    <Button variant="success">Eliminar comida</Button>
                </div>
            </div>
        </>
    )
}