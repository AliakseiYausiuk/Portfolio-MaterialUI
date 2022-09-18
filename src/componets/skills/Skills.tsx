import React from 'react';
import styles from './skills.module.scss'
import commonStyles from '../../styles/common.module.scss'

export const Skills = () => {
    return (
        <section className={styles.skills}>
            <div className={commonStyles.container}>
                <hr className={styles.skills__separator}/>
                <h3 className={styles.skills__title}>MY SKILLS</h3>
                <div className={styles.skills__wrapper}>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>70%</p>
                        </div>
                        <p className={styles.skills__text}>HTML</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>60%</p>
                        </div>
                        <p className={styles.skills__text}>JAVASCRIPT</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>70%</p>
                        </div>
                        <p className={styles.skills__text}>CSS</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>60%</p>
                        </div>
                        <p className={styles.skills__text}>REACT</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>60%</p>
                        </div>
                        <p className={styles.skills__text}>GITHUB</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>45%</p>
                        </div>
                        <p className={styles.skills__text}>MATERIAL-UI</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>45%</p>
                        </div>
                        <p className={styles.skills__text}>TYPESCRIPT</p>
                    </div>
                    <div className={styles.skills__item}>
                        <div className={styles.skills__progress}>
                            <p className={styles.skills__percentages}>45%</p>
                        </div>
                        <p className={styles.skills__text}>REDUX</p>
                    </div>
                </div>
                <hr className={styles.skills__separator}/>
            </div>
        </section>
    )
}
