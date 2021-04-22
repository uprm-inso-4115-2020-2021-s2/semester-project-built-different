import React, { useState } from 'react';
import styles from '../styles/checkout.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { func } from 'prop-types';
import { Card, Form, Button } from 'react-bootstrap';


export default function checkout(){
    const [payment, setPayment] = useState('')
    const [name, setName] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [expDate, setExpDate] = useState('')
    const [cvv, setCvv] = useState('')
    const handleChange=(e)=>{
        setVal(e.target.value);
    }

    const foodlistDUMMY = [
        {name: 'Pizza slice', price: 1.50, quantity: 2, image: '/pizza.jpeg' },
        {name: 'Hot dog', price: 2.00 , quantity: 2, image: '/hotdog.jpeg'},
        {name: 'Bistec Encebollado', price: 6.00 , quantity: 1, image: '/bistec.jpeg'},
    ]
    return(
    <>
    <Navbar/>
    <div className={styles.container}>
    <h3>Mi Orden</h3>
    <div className={styles.megaFlexbox}>
    <div className={styles.ordenminicard}>
            {foodlistDUMMY.map(food => (
                <div>
                    <Card style={{ width: '600px', marginTop: '4px', marginBottom: '100px' }}>
                        <Card.Img variant="bottom" src={food.image} />
                        <Card.Body>
                            <Card.Title>{food.name}</Card.Title>
                            <Card.Text>{(food.price).toFixed(2)}</Card.Text>
                        </Card.Body>
                        <h5>Instrucciones Especiales</h5>
                        <p>AHHHHHHHHH!!!!!!</p>
                    </Card>
                </div>
            ))}
        </div>
        <div className={styles.pagogrid}>
            <h2>Manera de pago</h2>
            <Form>
                <Form.Group controlId="payment">
                <Form.Check type="radio" name="payment" label=" Efectivo al recoger"
                onChange={(event) => setPayment(event.target.value)}></Form.Check>
                <Form.Check type="radio" name="payment" label=" Crédito"
                onChange={(event) => setPayment(event.target.value)}></Form.Check>
                <Form.Check type="radio" name="payment" label=" Débito-ATH"
                onChange={(event) => setPayment(event.target.value)}></Form.Check>
                </Form.Group>

                <Form.Group controlId="cardName">
                <Form.Control type="name" placeholder="Nombre en la tarjeta" value={name}
                    onChange={(event) => setName(event.target.value)}/>
              </Form.Group>
              <Form.Group controlId="cardNum">
                <Form.Control type="int" placeholder="Número de tarjeta" value={cardNum}
                    onChange={(event) => setCardNum(event.target.value)}/>
              </Form.Group>

              <Form.Group controlId="expDate">
                <Form.Control type="date" placeholder="Fecha de Exp" value={expDate}
                    onChange={(event) => setExpDate(event.target.value)}/>
              </Form.Group>

              <Form.Group controlId="cvv">
                <Form.Control type="string" placeholder="CVV" value={cvv}
                    onChange={(event) => setCvv(event.target.value)}/>
              </Form.Group>
              <Button variant="primary" type="submit">Pagar</Button>
            </Form>
        </div>
    </div>
        
    </div>

    <footer className={styles.footer}>
          <h5>RUM2GO</h5>
    </footer> 
    </>
    )
}