import React from 'react';
import styles from './home.module.scss';
import commonStyle from '../../../styles/common.module.scss';
import {Navbar} from '../../navbar/Navbar';
import iconBtn from '../../../icons/icons8-sun.svg';
import iconArrowBtn from '../../../icons/icons8-arrow-24.png'
import {Button} from '../../btn/Button';

export const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.colorBlock}></div>
            <div className={commonStyle.container}>
                <div className={styles.home__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn} alt="icon button color theme"/>
                    <img className={styles.home__img}
                         src="https://tunis.ibthemespro.com/static/media/dark.fcd7feb934db7b81903a.jpg" alt='foto user'/>
                    <div className={styles.home__info}>
                        <h1 className={styles.home__title}>
                            <span className={styles.home__dash}/>
                            I'm Yausiuk Aliaksei.
                            <span className={styles.home__titleLight}>Front‑end developer</span>
                        </h1>
                        <p className={styles.home__subtitle}>
                            I'm front‑end developer focused on
                            crafting clean & user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </p>
                        <button className={styles.home__btn}>
                            more about me
                            <img src={iconArrowBtn} className={styles.iconArrowBtn} alt="icon button arrow"/>
                        </button>
                    </div>
                    <Navbar/>
                </div>
            </div>
        </section>)
}