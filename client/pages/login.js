import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'http://localhost:5000/api/users/login',
      {
        email,
        password,
      },
    );

    if (res.data.error) {
      // error handling here
    } else {
      router.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>RUM2GO: Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              We&apposll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
          </Form.Group>
          <Link href="/signup">Crear cuenta</Link>
          <br />

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
      </main>

      <footer className={styles.footer}>
        <h5>RUM2GO</h5>
      </footer>
    </div>
  );
}
