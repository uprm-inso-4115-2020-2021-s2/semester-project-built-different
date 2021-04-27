import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Details.module.css';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';



export default function Details() {
    const router = useRouter();
    const [food, setFood] = useState('');
    const foodlist = [
        {name: 'Pizza slice', price: 1.50, quantity: 11, image: '/pizza.jpeg' },
        {name: 'Hot dog', price: 2.00 , quantity: 19, image: '/hotdog.jpeg'},
        {name: 'Burrito', price: 3.50 , quantity: 8, image: '/burrito.jpeg'},
        {name: 'Bistec Encebollado', price: 6.00 , quantity: 5, image: '/bistec.jpeg'},
        {name: 'Paella', price: 10.00 , quantity: 18, image: '/paella.jpeg'},
        {name: 'Combi china', price: 9.00 , quantity: 13, image: '/combichina.jpeg'},
    ]

    const { foodid } = router.query;
    if (!foodid) return <div>Loading...</div>
    return (
        <>
            <Head>
                <title>RUM2GO - Inventario</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <img src={foodlist[foodid].image} />
                <h2>{foodlist[foodid].name}</h2>
                <p>${foodlist[foodid].price.toFixed(2)}</p>
                <Button variant="success">Comprar</Button>
            </div>
        </>
    )
}