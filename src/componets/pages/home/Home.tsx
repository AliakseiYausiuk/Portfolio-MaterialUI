import React from 'react';
import styles from './home.module.scss';
import commonStyle from '../../../styles/common.module.scss';
import {Navbar} from '../../navbar/Navbar';
import iconBtn from '../../../icons/icons8-sun.svg';
import iconArrowBtn from '../../../icons/icons8-arrow-24.png'
import {Button} from '../../btn/Button';
import {Avatar} from '../../avatar/Avatar';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export const Home = () => {
    const state = useSelector((state: RootState) => state);
    return (
        <section className={styles.home}>
            <div className={styles.colorBlock}></div>
            <div className={commonStyle.container}>
                <div className={styles.home__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn}
                            alt="icon button color theme"/>
                    <Avatar src={state.user.avatar}
                            alt={'foto user'}/>
                    <div className={styles.home__info}>
                        <h1 className={styles.home__title}>
                            <span className={styles.home__dash}/>
                            I'm {`${state.user.firstName} ${state.user.lastName}`}.
                            <span className={styles.home__titleLight}>{state.user.job}</span>
                        </h1>
                        <p className={styles.home__subtitle}>
                            I'm front‑end developer focused on
                            crafting clean & user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </p>
                        <button className={styles.home__btn}>
                            more about me
                            <span className={styles.home__btnItem}>
                                <img src={iconArrowBtn} className={styles.iconArrowBtn} alt="icon button arrow"/>
                            </span>
                            {/*<span className={styles.home__btnAnimation}/>*/}
                        </button>
                    </div>

                </div>
            </div>
            <Navbar/>
        </section>)
}