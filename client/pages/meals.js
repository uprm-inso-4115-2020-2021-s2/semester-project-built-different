import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form, Card } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Meals.module.css';
import Navbar from '../components/Navbar';
import { authActions } from '../store/actions';
import { authSelectors } from '../store/selectors';

export default function Meals() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);
    const router = useRouter();
  // const onSubmitForm = async e => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:5000/api/meals/search/?name=${name}`);

  //     const parseResponse = await response.json();
  //     //console.log(parseResponse);
  //     setUsers(parseResponse);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

    const foodlist = [
      {name: 'Pizza slice', price: 1.50, quantity: 11, image: '/pizza.jpeg' },
      {name: 'Hot dog', price: 2.00 , quantity: 19, image: '/hotdog.jpeg'},
      {name: 'Burrito', price: 3.50 , quantity: 8, image: '/burrito.jpeg'},
      {name: 'Bistec Encebollado', price: 6.00 , quantity: 5, image: '/bistec.jpeg'},
      {name: 'Paella', price: 10.00 , quantity: 18, image: '/paella.jpeg'},
      {name: 'Combi china', price: 9.00 , quantity: 13, image: '/combichina.jpeg'},
    ]
    return (
        <Fragment>
        <div className="container text-center">
          <h1 className="my-5">Cafetería</h1>
          <form className="d-flex" >
            <input
              type="text"
              name="name"
              placeholder="Buscar comida..."
              className="form-control"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button className="btn btn-success">Submit</button>
          </form>
          <div className={styles.searchgrid}>
            {foodlist.map((food, index) => {
              if (food['name'].toLowerCase().includes(name)) {
                return (
                  <Card style={{ width: '18rem', marginTop: '4px', marginBottom: '4px' }}>
                    <Card.Img variant="top" src={food.image} />
                    <Card.Body>
                      <Card.Title>{food.name}</Card.Title>
                      <Card.Text>Precio: ${food.price.toFixed(2)}</Card.Text>
                      <div className={styles.buttons}>
                          <div onClick={() => router.push(`/details?foodid=${index}`)}>
                            <Button variant="primary">Más información</Button>
                          </div>
                          <Button variant="success">Añadir al carrito</Button>
                      </div>            
                    </Card.Body>
                  </Card>
                )
              }
            })}
          </div>
          
        </div>
      </Fragment>
    );
}