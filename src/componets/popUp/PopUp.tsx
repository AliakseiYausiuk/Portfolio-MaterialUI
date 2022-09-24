import React from 'react';
import styles from './popUp.module.scss'
import img from '../../icons/whybuildemaillist.png'
import projectImg from '../../icons/icons8-page-32.png';
import clientImg from '../../icons/icons8-user-24.png';
import codeImg from '../../icons/icons8-code-32.png';
import previewImg from '../../icons/icons8-preview-32.png';

export const PopUp = () => {
    return (
        <div className={styles.popUp}>
            <h2 className={styles.popUp__title}>Title</h2>
            <ul className={styles.popUp__list}>
                <li className={styles.popUp__lists}>
                    <img className={styles.popUp__icons} src={projectImg} alt="icon page"/>
                    <p className={styles.popUp__text}>Project:</p>
                </li>
                <li className={styles.popUp__lists}>
                    <img className={styles.popUp__icons} src={clientImg} alt="icon user"/>
                    <p className={styles.popUp__text}>Client:</p>
                </li>
                <li className={styles.popUp__lists}>
                    <img className={styles.popUp__icons} src={codeImg} alt="icon code"/>
                    <p className={styles.popUp__text}>Language:</p>
                </li>
                <li className={styles.popUp__lists}>
                    <img className={styles.popUp__icons} src={previewImg} alt="icon preview"/>
                    <p className={styles.popUp__text}>
                        Preview:
                        <a className={styles.popUp__link} href="#">ldkskds</a>
                    </p>
                </li>
            </ul>
            <div className={styles.popUp__item}>
                <img className={styles.popUp__img} src={img} alt=""/>
            </div>
        </div>
    )
}
