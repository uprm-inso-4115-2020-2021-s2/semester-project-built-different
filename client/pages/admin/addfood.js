import React from 'react';
import Navbar from '../../components/Navbar';
import styles from '../../styles/admin/AddFood.module.css';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AddFood() {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>RUM2GO - Añadir comida</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}>
                <h2>Bienvenido, Usuario</h2>
                <p>Acciones: Añadir comida</p>
                <Button onClick={() => router.back()}>Volver</Button>
                <hr/>
                <div className={styles.form}>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Comida" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Precio ($)</Form.Label>
                        <Form.Control type="number" placeholder="$0.00" />
                      </Form.Group>
                      
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" placeholder="0" />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select">
                          <option>Criollo</option>
                          <option>Italian</option>
                          <option>American</option>
                          <option>Soup</option>
                          <option>Chinese</option>
                        </Form.Control>
                      </Form.Group>
                      <Button variant="success">Añadir comida</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}