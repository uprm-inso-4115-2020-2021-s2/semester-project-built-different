import React from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>RUM2GO</title>
        <link rel="icon" href="/rum2go.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <h1>Ordena tu comida y recogela</h1>
        </div>
        <div className={styles.info_box}>
          <h2>La cafeteria del RUM en un click.</h2>
          <p>
            Ya no tendras que hacer mas filas cuando vuelvan las
            clases. Con RUM2GO, puedes ordenar y pagar tu comida desde
            tu telefono. Solo tienes que pasar a recogerla cuando
            recibas la alerta.
          </p>
        </div>
        <div className={styles.how_it_works}>
          <h2>¿Como funciona?</h2>
          <h3>1. Registrate</h3>
          <p>Crea una cuenta para poder usar la aplicacion.</p>
          <h3>2. Busca comida</h3>
          <p>Busca lo que te quieras comer en la cafeteria.</p>
          <h3>3. Añade al carro</h3>
          <p>Añade al carrito de compras lo que quieras comer.</p>
          <h3>4. Paga tu comida</h3>
          <p>Paga tu comida antes o al recoger tu comida.</p>
          <h3>5. Recoge tu comida</h3>
          <p>
            Recoge tu comida en el area indicado enseñando el codigo
            de entrega.
          </p>
        </div>
        <div className={styles.register_box}>
          <div className={styles.register_box_content}>
            <h2>No vuelvas a hacer otra fila mas!</h2>
            <p>Crea tu cuenta y ordena ya</p>
            <Button onClick={() => router.push('/signup')}>Registrate</Button>
          </div>
          <img src="/tipo_paquete.png" alt="paquete" />
        </div>
      </main>

      <footer className={styles.footer}>
        <h5>RUM2GO</h5>
      </footer>
    </div>
  );
}
