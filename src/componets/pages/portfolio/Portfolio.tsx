import React from 'react';
import styles from './porfolio.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg';
import imgProjectTravel from '../../../icons/Screenshot_2.png'
import imgProjectMesto from '../../../icons/Screenshot_3.png'
import imgProjectTodolist from '../../../icons/Screenshot_4.png'

export const Portfolio = () => {
    return (
        <section className={styles.portfolio}>
            <div className={commonStyle.container}>
                <div className={styles.portfolio__item}>
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
                        <div className={styles.portfolio__wrapperImg}>
                            <img className={styles.portfolio__img} src={imgProjectTravel} alt="images"/>
                        </div>
                        <div className={styles.portfolio__wrapperImg}>
                            <img className={styles.portfolio__img} src={imgProjectMesto} alt="images"/>
                        </div>
                        <div className={styles.portfolio__wrapperImg}>
                            <img className={styles.portfolio__img} src={imgProjectTodolist} alt="images"/>
                        </div>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </section>
    )
}