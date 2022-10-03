import React from 'react';
import styles from './avatar.module.scss'

type avatartype = {
    src?: string
    alt?: string
    className?: string
}

export const Avatar = React.memo(({src, alt, className}: avatartype) => {
    return (
        <img className={`${styles.img} ${className}`}
             src={src} alt={alt}/>
    )
})