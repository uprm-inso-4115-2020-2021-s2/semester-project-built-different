import React, {useState} from 'react';
import styles from '../styles/Home.module.css';
import { Button, Card, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function HomePage() {
    const router = useRouter();
    const [quantity, setQuantity] = useState('');

    const foodlist = [
        {name: 'Pizza slice', price: 1.50, image: '/pizza.jpeg' },
        {name: 'Hot dog', price: 2.00, image: '/hotdog.jpeg'},
        {name: 'Burrito', price: 3.50, image: '/burrito.jpeg'},
        {name: 'Bistec Encebollado', price: 6.00, image: '/bistec.jpeg'},
        {name: 'Paella', price: 10.00, image: '/paella.jpeg'},
        {name: 'Combi china', price: 9.00, image: '/combichina.jpeg'},
    ]

    return (
        <div className={styles.container}>
            <Head>
                <title>RUM2GO</title>
                <link rel="icon" href="/rum2go.ico" />
            </Head>
            <hr/>
            <main className={styles.main}>
                <h2>Bienvenido</h2>
                <Button onClick={() => router.back()} >Volver</Button>
                <div className={styles.foodgrid}>
                {foodlist.map(food => (
                            <Card style={{ width: '18rem', marginTop: '4px', marginBottom: '4px' }}>
                                <Card.Img variant="top" src={food.image} />
                                <Card.Body>
                                    <Card.Title>{food.name}</Card.Title>
                                    <Card.Text>Precio: ${food.price}</Card.Text>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Cantidad</Form.Label>
                                        <Form.Control
                                            type="stock"
                                            placeholder="Cantidad"
                                            value={quantity}
                                            onChange={(event) => setQuantity(event.target.value)}/>
                                    </Form.Group>
                                    <div className={styles.buttons}>
                                        <Button variant="warning">Anadir a la orden</Button>
                                        <Button variant="danger">Eliminar de la orden</Button>
                                        <Button variant="success" onClick={() => router.push('/checkoutpage')}>Procesar orden</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        ))}
                </div>
            </main>
        </div>
    )
}