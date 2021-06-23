import React from 'react'
import styles from './Quote.module.css'

const Quote = () => {
    return (
        <div className={styles.quote}>
            <div className={styles.imageContainer}>
                <div className={styles.image}></div>
                <div className={styles.background}></div>
            </div>
        </div>
    )
}

export default Quote
