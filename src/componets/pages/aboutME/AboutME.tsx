import React from 'react'
import styles from './aboutMe.module.scss'
import commonStyles from '../../../styles/common.module.scss'
import {Navbar} from '../../navbar/Navbar';
import {BtnColorTheme} from '../../btnColorTheme/btnColorTheme';
import {Title} from '../../title/Title';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {Avatar} from '../../avatar/Avatar';
// @ts-ignore
import {motion} from 'framer-motion/dist/framer-motion';


export const AboutME = () => {
    const state = useSelector((state: RootState) => state);
    const screenWidth = document.documentElement.scrollWidth;

    const animation = {
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * .5,
            }
        }),
        hidden: {
            y: 100,
            opacity: 0
        }
    }

    return (
        <section className={styles.aboutMe}>
            <div className={commonStyles.container}>
                <div className={styles.aboutMe__item}>
                    <BtnColorTheme/>
                    <Title title="About" titleYellow="ME" subtitle="resume"/>
                    {screenWidth < 990 && <Avatar src={state.user.avatar}/>}
                    <div
                        className={styles.aboutMe__infos}
                    >
                        <motion.div
                            className={styles.aboutMe__me}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={animation}
                            custom={1}
                        >
                            <figure className={styles.aboutMe__foto}>
                                <img src={state.user.avatar} alt="user icon" className={styles.aboutMe__img}/>
                                <figcaption className={styles.aboutMe__name}>Aliaksei Yausiuk</figcaption>
                                <figcaption className={styles.aboutMe__subtitle}>Web Developer</figcaption>
                            </figure>
                        </motion.div>
                        <motion.div
                            className={styles.aboutMe__wrapper}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={animation}
                            custom={1}
                        >
                            <p className={styles.aboutMe__text}>I Front-End developer with experience in creating SPA
                                using React, Redux, Typescript,
                                HTML,CSS, JS.
                                I'm always looking forward to improve my expertise.
                                I'm planning to study Node.js, because my next focus is to become a Full-Stack
                                Developer.
                                And also I have interest to learn React Native.
                                I am sociable, I study English, I train in my free time.
                            </p>
                            <ul className={styles.aboutMe__contact}>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Birthday:</span>
                                    01/03/1997
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Age:</span>
                                    {state.user.age}
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Address:</span>
                                    {state.user.address}
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Email:</span>
                                    {state.user.email}
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Phone:</span>
                                    {state.user.phone}
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Nationality:</span>
                                    {state.user.nationality}
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Study:</span>
                                    IT-incubator, BSUIR
                                </li>
                                <li className={styles.aboutMe__contactLists}>
                                    <span className={styles.aboutMe__contactList}>Interest:</span>
                                    Read books
                                </li>
                            </ul>
                            <a href="#" className={styles.aboutMe__btn} download>Download CV</a>
                        </motion.div>
                        <motion.div
                            className={styles.aboutMe__skills}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={animation}
                            custom={1}
                        >
                            <h3 className={styles.aboutMe__skillsTitle}>Skills</h3>
                        </motion.div>
                        <motion.div
                            className={styles.aboutMe__education}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{amount: 0.2}}
                            variants={animation}
                            custom={1}
                        >
                            <div className={styles.aboutMe__educationWrapper}>
                                <h3 className={styles.aboutMe__educationTitle}>Education</h3>
                                <ul className={styles.aboutMe__educationLists}>
                                    <li className={styles.aboutMe__educationList}>It incubator</li>
                                    <li className={styles.aboutMe__educationList}>BSUIR</li>
                                </ul>
                            </div>
                            <div className={styles.aboutMe__educationWrapper}>
                                <h3 className={styles.aboutMe__educationTitle}>Experience</h3>
                                <ul className={styles.aboutMe__educationLists}>
                                    <li className={styles.aboutMe__educationList}>Todolist</li>
                                    <li className={styles.aboutMe__educationList}>Mesto React</li>
                                    <li className={styles.aboutMe__educationList}>Project</li>
                                </ul>
                            </div>

                        </motion.div>

                    </div>
                    {/*<Skills/>*/}
                </div>
            </div>
            <Navbar/>
        </section>
    )
}
