import React from 'react';
import styles from './blogCard.module.scss'
import {myBlog} from '../../models/models';


type blogCardType = {
    data: myBlog
}

export const BlogCard = ({data}: blogCardType) => {
    return (
        <a href={data.link} className={styles.card}>
            <img className={styles.card__img} src={data.img} alt={data.alt}/>
            <h3 className={styles.card__title}>
                {data.name}
            </h3>
        </a>
    )
}
