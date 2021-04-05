import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
          <h2>Iniciar sesión</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Escribe tu correo"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartimos tu informacion con nadie
            </Form.Text>
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
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
          </Form.Group>
          <Link href="/signup">Crear cuenta</Link>
          <br />
          <Button onClick={() => router.push('/menu')}>Entrar</Button>
        </Form>
      </main>

      <footer className={styles.footer}>
        <h5>RUM2GO</h5>
      </footer>
    </div>
  );
}