import React from 'react';
import styles from './porfolio.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg';

export const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <div className={commonStyle.container}>
                <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn} alt="icon button color theme"/>
                <Title title='MY' titleYellow='Portfolio' subtitle='Works'/>
                <ul className={styles.portfolio__lists}>
                    <li className={styles.portfolio__list}>ALL</li>
                    <li className={styles.portfolio__list}>LOGO</li>
                    <li className={styles.portfolio__list}>VIDEO</li>
                    <li className={styles.portfolio__list}>GRAPHIC DESIGN</li>
                    <li className={styles.portfolio__list}>MOCKUP</li>
                </ul>
                <div className={styles.portfolio__wrapper}>
                    {/*<img src="" alt=""/>*/}
                </div>
                <Navbar/>
            </div>
        </section>
    )
}