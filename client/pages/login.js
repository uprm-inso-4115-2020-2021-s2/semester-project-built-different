import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';
import { authActions } from '../store/actions';
import { authSelectors } from '../store/selectors';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const token = useSelector(authSelectors.selectToken);
  const error = useSelector(authSelectors.selectError);

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();

      await dispatch(
        authActions.initSession({ email, password }, 'login'),
      );
    },
    [dispatch, email, password],
  );

  React.useEffect(() => {
    if (token) router.push('/');
  }, [token, router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>RUM2GO: Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.jumbotron}>
      <div className={styles.main}>
        <Form onSubmit={handleSubmit}>
          <h2>Iniciar sesión</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              No compartimos tu correo con nadie.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Recuerdame" />
            <p>{error || ''}</p>
          </Form.Group>
          <Link href="/signup">Crear cuenta</Link>
          <br />

          <Button variant="primary" type="submit">
            Entrar
          </Button>
        </Form>
        </div>
      </main>

      <footer className={styles.footer}>
        <h5>RUM2GO</h5>
      </footer>
    </div>
  );
}