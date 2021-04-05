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
                    <Image src="/cameraIcon.png" height={54} width={52}/>
                    <h3>Marko Schutz</h3>
                    {/* <h3>{user.name}</h3> */}
                </div>
                <hr/>
                {/* <div className={styles.settingsRectangle}> */}
                <ul className={styles.settingsgrid}>
                        <Image src="/userpic.png" height={99} width={98}/>
                            <li><a href="#">Edite su perfíl </a></li>

                        <Image src="/moneyIcon.png" height={101} width={98}/>
                        <li><a href="#">Historial de Ordenes </a></li>

                        <Image src="/gear.png" height={108} width={98}/>
                        <li><a href="#">Manejo de Cuenta </a></li>
 
                        <Image src="/questionmark.png" height={106} width={98}/>
                        <li><a href="#">Ayuda  </a></li>
                     
                        <Image src="/payment.png" height={107} width={98}/>
                        <li><a href="#">Cambiar Método de Pago </a></li>
                                    
                </ul>
                {/* </div> */}
                {/* <footer className={styles.footer}>
          <h5>RUM2GO</h5>
        </footer> */}
        </div>
        </>
    )
}