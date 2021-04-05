import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/SignUp.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    return (
      <div className={styles.container}>
        <Head>
          <title>RUM2GO</title>
          <link rel="icon" href="/rum2go.ico" />
        </Head>
        <Navbar />
        <main className={styles.main}>
          <Form>
              <h2>Crear cuenta</h2>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="name" 
                    placeholder="Nombre" 
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Escribe tu correo" 
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Contrasena" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Button onClick={() => router.push('/menu')}>Registrarse</Button>
          </Form>
        </main>

        <footer className={styles.footer}>
          <h5>RUM2GO</h5>
        </footer>
      </div>
    );
}