import React from 'react';
import styles from './title.module.scss'

type TitleType = {
    title?: string
    titleYellow?: string
    subtitle?: string
}

export const Title = React.memo(({title, titleYellow, subtitle}: TitleType) => {
    return (
        <div className={styles.title__wrapper}>
            <h1 className={styles.title}>
                {title}
                <span className={styles.title__yellow}>{titleYellow}</span>
                <span className={styles.title__subtitle}>{subtitle}</span>
            </h1>
        </div>
    )
})