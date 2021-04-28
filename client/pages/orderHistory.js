import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Details.module.css';
import { Button, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';



export default function OrderHistory() {
    const router = useRouter();
    //const userID = router.query;
    const userID = 5;
    
    const [orderHistory, setOrdersHistory] = useState([]);

    React.useEffect(() => async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/orders/getordered/?cid=${userID}`);
      
            const parseResponse = await response.json();
            //console.log(parseResponse);
            setOrdersHistory(parseResponse);
          } catch (err) {
            console.error(err.message);
          }
    });
    // const onOrderHistory = async e => {
    //     e.preventDefault();
    //     try {
    //       const response = await fetch(`http://localhost:5000/api/orders/get/?cid=${userID}`);
    
    //       const parseResponse = await response.json();
    //       console.log(parseResponse);
    //       setOrderHistory(parseResponse);
    //     } catch (err) {
    //       console.error(err.message);
    //     }
    //   };
    return (
        <>
            <Head>
                <title>RUM2GO: Historial de Ordenes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.searchgrid}>
                            {orderHistory.map((orders) => {
                                 return (
                                    <Card style={{ width: '19rem', marginTop: '4px', marginBottom: '4px' }}>
                                        <Card.Body>
                                            <Card.Title>Fecha de orden: {orders.timestamp.substring(0, 10)}</Card.Title>
                                            <Card.Text>Estatus de orden: {orders.status}</Card.Text>
                                            <Card.Text>Comentario: {orders.comment}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                    )
                    })}
            </div>
        </>
    )
}