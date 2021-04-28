import React from 'react';
import Head from 'next/head';
import styles from '../styles/foodDetails.module.css';
import Navbar from '../components/Navbar';
import ImageViewer from '../components/ImageViewer';
import NutritionBox from '../components/NutritionBox';
import { Button } from 'react-bootstrap';
import {ImageViewerData} from '../components/ImageViewerData'; 
import { useRouter } from 'next/router';


// export async function getStaticProps(){
//     const res = await fetch("http://localhost:5000/api/meals/get?name=Fetuccini");
//     return{
//         props:{meal: res}
//     }
// }


export default function FoodDetails(){
    const router = useRouter();

    return(
        <div>
            <Head>
                <title>RUM2GO</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />

            <main className={styles.container}>
                <div className={styles.visualSide}>
                    <ImageViewer slides={ImageViewerData}/>
                    <div className={styles.buttonContainer}>
                        <button className={styles.favoriteButton}></button>
                        <button className={styles.addToCartButton}></button>
                    </div>
                </div>
                <div className={styles.infoSide}>
                    <div className={styles.foodText}>
                        <h1 className={styles.foodName}>Grilled Cheese</h1>
                        <h3 className={styles.foodPrice}>2.99</h3>
                        <p className={styles.foodDescription}>Two slices of toasts with melted cheese in between.</p>
                    </div>
                    <div className={styles.nutritionContainer}>
                        <NutritionBox name="Calorías" value="100"/>
                        <NutritionBox name="Azucar" value="100g"/>
                        <NutritionBox name="Fibras" value="100g"/>
                    </div>
                    
                </div>
            </main>
        </div>
    )
}