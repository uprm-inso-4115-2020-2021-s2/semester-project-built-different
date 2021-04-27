import React, { useState } from 'react';
import {ImageViewerData} from './ImageViewerData';
import { Button } from 'react-bootstrap';
import styles from '../styles/ImageViewer.module.css';

export default function ImageViewer({slides}){
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    function nextImage(){
        setCurrent(current === length-1? 0: current+1);
    };

    function prevImage(){
        setCurrent(current === 0? length-1: current-1);
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return(
        <section className={styles.imageViewer}>
            <Button className={styles.leftArrow} onClick={prevImage}></Button>

            {ImageViewerData.map((slide, index) =>
                {
                    return(
                        <div
                            className={index===current? styles.activeSlide: styles.slide}
                            key={index}
                        >
                            {index === current && (
                                <img src={slide.image} alt="grilled cheese" className={styles.image}/>
                            )}
                        </div>
                    );
                })
            }

            <Button className={styles.rightArrow} onClick={nextImage}></Button>
        </section>
    );
};

