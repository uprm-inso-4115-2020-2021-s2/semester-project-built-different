import React from 'react';
import Head from 'next/head';
import { Button } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

export default function Checkout() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>RUM2GO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <h1>Checkout</h1>
        </div>
      </main>
      <footer className={styles.footer}>
        <h5>RUM2GO</h5>
      </footer>
    </div>
  );
}