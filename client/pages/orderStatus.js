import React from 'react';
import styles from '../styles/orderStatus.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';


export default function orderStatus() {
  
  return (
    <>
      <Navbar />
        <div className={styles.container}>
            <div className={styles.orden}> 
                <h3>Estado de Orden</h3>
                <h6>Número de Orden #000000000</h6>
                {/* <h6>Número de Orden {user.num}</h6> */}
                <div className={styles.status}>
                    <div className={styles.minicard}>
                        <Image src="/num4.png" height={70} width={70}/>
                        <h4>Listo para recoger </h4>
                    </div>
                    <div className={styles.minicard}>
                    <Image src="/num3.png" height={70} width={70}/>
                        <h4>Orden esta siendo preparada </h4>
                    </div>
                    <div className={styles.minicard}>
                    <Image src="/num2.png" height={70} width={70}/>
                        <h4>Pago ha sido recibido </h4>
                    </div>
                    <div className={styles.minicard}>
                    <Image src="/num1.png" height={70} width={70}/>
                        <h4>Orden recibida</h4>
                    </div>  
                    <div className={styles.minitarzan}>
                    <h6>ANTES AHORA Y SIEMPRE...Recuerde cuidar el colegio</h6>
                    <Image src="/tarzan.png" height={50} width={50}/>
                </div>
                </div>     
            </div>            
        </div>
        <footer className={styles.footer}>
            <h5>RUM2GO</h5>
        </footer>
    </>
  );
}

