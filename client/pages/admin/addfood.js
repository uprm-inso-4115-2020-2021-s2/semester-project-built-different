import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/admin/AddFood.module.css';
import Navbar from '../../components/Navbar';
import { mealActions } from '../../store/actions';
import { mealSelectors } from '../../store/selectors';

export default function AddFood() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [comments, setComments] = useState('');

  const meals = useSelector(mealSelectors.selectMeals);
  const error = useSelector(mealSelectors.selectError);

  const handleSubmit = React.useCallback(
    async (e) => {
      e.preventDefault();

      await dispatch(
        mealActions.addMeal({
          name,
          price,
          comments,
          available: true,
        }),
      );

      setName('');
      setPrice('');
      setComments('');
    },
    [dispatch, name, price, comments],
  );
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
        <hr />
        <div className={styles.form}>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Comida"
                onChange={(value) => setName(value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Precio ($)</Form.Label>
              <Form.Control
                type="number"
                placeholder="$0.00"
                onChange={(value) => setPrice(value)}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(value) => setComments(value)}
              />
            </Form.Group>

            {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Control as="select">
                          <option>Criollo</option>
                          <option>Italian</option>
                          <option>American</option>
                          <option>Soup</option>
                          <option>Chinese</option>
                        </Form.Control>
                      </Form.Group> */}
            <div onClick={() => handleSubmit}>
              <Button variant="success">Añadir comida</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
