import styles from '../styles/settings.module.css';
import Navbar from '../components/Navbar';
import Image from 'next/image';


export default function settings(){
    return(
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.profileEdit}>
                    <h2>Bienvenido!</h2>
                    <Image src="/userpic.png" height={211} width={210}/>
                    <div className={styles.camarita}>
                        <Image src="/cameraIcon.png" height={54} width={52}/></div>
                        <h3>Marko Schutz</h3>
                    {/* <h3>{user.name}</h3> */}
                </div>
                <div className={styles.settingsgrid}>
                    <div className={styles.minicard}>
                        <Image src="/userpic.png" height={99} width={98}/>
                        <a href="#">Edite su perfíl </a>
                        <Image src="/green-arrow.png" height={45} width={42}/>
                    </div>
                    <div className={styles.minicard}>
                        <Image src="/moneyIcon.png" height={101} width={98}/>
                        <a href="#">Historial de Ordenes </a>
                        <Image src="/green-arrow.png" height={45} width={42}/>
                    </div>
                    <div className={styles.minicard}>
                        <Image src="/gear.png" height={108} width={98}/>
                        <a href="#">Manejo de Cuenta </a>
                        <Image src="/green-arrow.png" height={45} width={42}/>
                    </div>
                    <div className={styles.minicard}>
                        <Image src="/questionmark.png" height={106} width={98}/>
                        <a href="#">Ayuda</a>
                        <Image src="/green-arrow.png" height={45} width={42}/>
                    </div>  
                    <div className={styles.minicard}>
                        <Image src="/payment.png" height={107} width={98}/>
                        <a href="#">Cambiar Método de Pago </a>
                        <Image src="/green-arrow.png" height={45} width={42}/>
                    </div>  
                </div>
            </div>
            <footer className={styles.footer}>
                <h5>RUM2GO</h5>
            </footer> 
        </>
    )
}