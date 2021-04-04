import React from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/admin/Inventario.module.css';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Inventario() {
    const router = useRouter();
    const foodlist = [
        {name: 'Pizza slice', price: 1.50, quantity: 11, image: '/pizza.jpeg' },
        {name: 'Hot dog', price: 2.00 , quantity: 19, image: '/hotdog.jpeg'},
        {name: 'Burrito', price: 3.50 , quantity: 8, image: '/burrito.jpeg'},
        {name: 'Bistec Encebollado', price: 6.00 , quantity: 5, image: '/bistec.jpeg'},
        {name: 'Paella', price: 10.00 , quantity: 18, image: '/paella.jpeg'},
        {name: 'Combi china', price: 9.00 , quantity: 13, image: '/combichina.jpeg'},
    ]
    return (
        <>
            <Head>
                <title>RUM2GO - Inventario</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h2>Bienvenido</h2>
                <Button onClick={() => router.back()}>Volver</Button>
                <hr/>
                <div className={styles.foodgrid}>
                    {foodlist.map(food => (
                        <Card style={{ width: '18rem', marginTop: '4px', marginBottom: '4px' }}>
                            <Card.Img variant="top" src={food.image} />
                            <Card.Body>
                                <Card.Title>{food.name}</Card.Title>
                                <Card.Text>Precio: ${food.price}</Card.Text>
                                <Card.Text>Cantidad: {food.quantity}</Card.Text>
                                <div className={styles.buttons}>
                                    <Button variant="warning">Editar comida</Button>
                                    <Button variant="danger">Borrar comida</Button>
                                </div>    
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}


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
        <link rel="icon" href="/favicon.ico" />
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