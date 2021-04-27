import styles from '../styles/NutritionBox.module.css';
export default function NutritionBox(props){
    return(
        <div className={styles.container}>
            <p className={styles.nutritionName}>{props.name}</p>
            <p className={styles.nutritionValue}>{props.value}</p>
        </div>
    )
}
