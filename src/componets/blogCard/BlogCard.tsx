import React from 'react';
import styles from './blogCard.module.scss'
import img from '../../icons/whybuildemaillist.png'

export const BlogCard = () => {
    return (
        <div className={styles.card}>
            <img className={styles.card__img} src={img} alt="image"/>
            <h3 className={styles.card__title}>
                How to Own Your Audience by Creating an Email List
            </h3>
            <p className={styles.card__text}>
                Tomfoolery crikey bits and bobs brilliant bamboozled down the pub amongst brolly hanky panky, cack b
            </p>
        </div>
    )
}
