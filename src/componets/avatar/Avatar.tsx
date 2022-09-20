import React from 'react';
import styles from '../pages/home/home.module.scss';

type avatartype = {
    src?: string
    alt?: string
}

export const Avatar = ({src, alt}: avatartype) => {
    return (
        <img className={styles.home__img}
             src={src} alt={alt}/>
    )
}