import React from 'react';
import styles from './aboutMeCards.module.scss';

export const AboutMeCards = () => {
    return (
        <div className={styles.aboutMe__wrapperBlocks}>
            <div className={styles.aboutMe__block}>
                <span className={styles.aboutMe__number}>2+</span>
                <p className={styles.aboutMe__criteria}>
                    <span className={styles.aboutMe__dash}></span>
                    YEARS OF
                    EXPERIENCE
                </p>
            </div>
            <div className={styles.aboutMe__block}>
                <span className={styles.aboutMe__number}>19+</span>
                <p className={styles.aboutMe__criteria}>
                    <span className={styles.aboutMe__dash}></span>
                    COMPLETED
                    PROJECTS
                </p>
            </div>
            <div className={styles.aboutMe__block}>
                <span className={styles.aboutMe__number}>10+</span>
                <p className={styles.aboutMe__criteria}>
                    <span className={styles.aboutMe__dash}></span>
                    HAPPY
                    CUSTOMERS
                </p>
            </div>
            <div className={styles.aboutMe__block}>
                <span className={styles.aboutMe__number}>14+</span>
                <p className={styles.aboutMe__criteria}>
                    <span className={styles.aboutMe__dash}></span>
                    AWARDS
                    WON
                </p>
            </div>
        </div>
    )
}