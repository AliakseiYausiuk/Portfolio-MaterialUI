import React from 'react';
import styles from './home.module.scss';
import commonStyle from '../../../styles/common.module.scss';
import {Navbar} from '../../navbar/Navbar';
import iconArrowBtn from '../../../icons/icons8-arrow-24.png'
import {BtnColorTheme} from '../../btnColorTheme/btnColorTheme';
import {Avatar} from '../../avatar/Avatar';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {NavLink} from 'react-router-dom';
//@ts-ignore
import {motion} from 'framer-motion/dist/framer-motion';


export const Home = () => {

    const Variants = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }

    const state = useSelector((state: RootState) => state);
    return (
        <section className={styles.home}>
            <div className={styles.colorBlock}></div>
            <div className={commonStyle.container}>
                <div className={styles.home__item}>
                    <BtnColorTheme/>
                    <Avatar src={state.user.avatar}
                            alt={'foto user'}/>
                    <div className={styles.home__info}>
                        <motion.h1
                            className={styles.home__title}
                            variants={Variants}
                            transition={{
                                delay: .5,
                                duration: 1,
                            }}
                            initial={'hidden'}
                            animate={'visible'}
                        >
                            <span className={styles.home__dash}/>
                            I'm {`${state.user.firstName} ${state.user.lastName}`}.
                            <span className={`${styles.home__titleLight} ${commonStyle}`}>{state.user.job}</span>
                        </motion.h1>
                        <motion.p
                            className={styles.home__subtitle}
                            variants={Variants}
                            transition={{
                                delay: .8,
                                duration: 1,
                            }}
                            initial={'hidden'}
                            animate={'visible'}
                        >
                            I'm front‑end developer focused on
                            crafting clean & user‑friendly experiences, I am passionate about
                            building excellent software that improves the lives of those
                            around me.
                        </motion.p>
                        <NavLink to="/portfolio" className={styles.home__btn}>
                            more about me
                            <span className={styles.home__btnItem}>
                                <img src={iconArrowBtn} className={styles.iconArrowBtn} alt="icon button arrow"/>
                            </span>
                        </NavLink>
                    </div>

                </div>
            </div>
            <Navbar/>
        </section>)
}