import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/checkout.module.css';
import Navbar from '../components/Navbar';
import { authActions } from '../store/actions';
import { authSelectors } from '../store/selectors';

export default function Checkout() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const router = useRouter();

    const foodlist = [
      {name: 'Pizza slice', price: 1.50, quantity: 1, image: '/pizza.jpeg' },
      {name: 'Hot dog', price: 2.00 , quantity: 1, image: '/hotdog.jpeg'},
      {name: 'Burrito', price: 3.50 , quantity: 1, image: '/burrito.jpeg'},
      {name: 'Bistec Encebollado', price: 6.00 , quantity: 1, image: '/bistec.jpeg'},
      {name: 'Paella', price: 10.00 , quantity: 1, image: '/paella.jpeg'},
      {name: 'Combi china', price: 9.00 , quantity: 1, image: '/combichina.jpeg'},
    ]
    return (
        <Fragment>
        <Head>
        <title>RUM2GO: Carrito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <div className="container text-center">
          <h1 className="my-5">Mi orden</h1>
          <p>Para confirmar su orden haga click en el boton de confirmar. Una vez su orden este lista se le notificara para que pase a recogerla.</p>
          <p><b>Su total es de $26.00</b></p>
          <Button >
            Confirmar
          </Button>
          <div className={styles.searchgrid}>
          {foodlist.map(food => (
            <div>
                <Card style={{ width: '250px', marginTop: '4px', marginBottom: '100px' }}>
                <Card.Img variant="bottom" src={food.image} style={{ height: '150px'}} />
                <Card.Body>
                    <Card.Title>Nombre: {food.name}</Card.Title>
                    <Card.Text>Precio: ${(food.price).toFixed(2)}</Card.Text>
                    <Card.Text>Cantidad: {(food.quantity)}</Card.Text>
                </Card.Body>
                </Card>
            </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
}