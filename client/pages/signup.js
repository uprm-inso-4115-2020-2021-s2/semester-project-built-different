import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/SignUp.module.css';
import Navbar from '../components/Navbar';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      'http://localhost:5000/api/users/signup',
      {
        email,
        password,
        name,
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
        <title>RUM2GO: Sign up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <Form onSubmit={handleSubmit}>
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
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
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
