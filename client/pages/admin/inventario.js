import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/admin/Inventario.module.css';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import { mealActions } from '../../store/actions';


export default function Inventario() {
    const dispatch = useDispatch();
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

    useEffect(async () => {
        await dispatch(mealActions.getMeals())
            .then(res => setFood(res.data))
            .catch(err => console.log(err));
    }, [router])

    console.log(food)
    return (
        <>
            <Head>
                <title>RUM2GO - Inventario</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h2>Bienvenido, Usuario</h2>
                <p>Acciones</p>
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