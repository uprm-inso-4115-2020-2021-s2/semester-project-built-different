import React, { useState } from 'react';
import Head from 'next/head';
import { Button, Card, Jumbotron } from 'react-bootstrap';
import styles from '../styles/settings.module.css';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function settings(){
    const router = useRouter();
    const [name, setName] = useState('')

    return(
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.profileEdit}>
                    <h2>Bienvenido!</h2>
                    <Image src="/userpic.png" height={211} width={210}/>
                    <Image class="imgChange" src="/cameraIcon.png" height={54} width={52}/>
                    <h3>Marko Schutz</h3>
                    {/* <h3>{user.name}</h3> */}
                </div>

                <hr/>
                {/* <div className={styles.settingsRectangle}>
                <div className={styles.settingsgrid}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Edite su perfíl</Card.Title>
                        </Card.Body> 
                        <Card.Body>
                            <Card.Title>Historial de ordenes</Card.Title>
                        </Card.Body> 
                        <Card.Body>
                            <Card.Title>Manejo de cuenta</Card.Title>
                        </Card.Body> 
                        <Card.Body>
                            <Card.Title>Ayuda y soporte</Card.Title>
                        </Card.Body> 
                        <Card.Body>
                            <Card.Title>Cambiar método de pago</Card.Title>
                        </Card.Body> 
                    </Card>            
                </div>
                </div> */}
                {/* <footer className={styles.footer}>
          <h5>RUM2GO</h5>
        </footer> */}
        </div>
        </>
    )
}