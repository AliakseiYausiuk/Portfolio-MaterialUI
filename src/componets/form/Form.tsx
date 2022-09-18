import React from 'react';
import styles from './form.module.scss';

export const Form = () => {
    return (
        <form className={styles.form}>
            <input className={styles.form__input} type="text" placeholder='YOUR NAME'/>
            <input className={styles.form__input} type="text" placeholder='YOUR EMAIL'/>
            <input className={styles.form__input} type="text" placeholder='YOUR SUBJECT'/>
            <textarea className={styles.form__textarea} placeholder='YOUR MESSAGE'></textarea>
        </form>
    )
}