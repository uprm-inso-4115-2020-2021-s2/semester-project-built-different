import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/Login.module.css';
import Navbar from '../components/Navbar';
import { authActions } from '../store/actions';
import { authSelectors } from '../store/selectors';

export default function Meals() {
    const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/users/?name=${name}`);

      const parseResponse = await response.json();

      setUsers(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
    return (
        <Fragment>
        <div className="container text-center">
          <h1 className="my-5">Cafetería</h1>
          <form className="d-flex" onSubmit={onSubmitForm}>
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
          <table className="table my-5">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.user_id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {users.length === 0 && <p>No Results Found</p>}
        </div>
      </Fragment>
    );
}