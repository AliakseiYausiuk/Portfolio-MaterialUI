import React from 'react'
import styles from './aboutMe.module.scss'
import commonStyles from '../../../styles/common.module.scss'
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {AboutMeCards} from '../../aboutMeCards/AboutMeCards';
import {Skills} from '../../skills/Skills';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';


export const AboutME = () => {
    const state = useSelector((state: RootState) => state);

    return (
        <section className={styles.aboutMe}>
            <div className={commonStyles.container}>
                <div className={styles.aboutMe__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn}
                            alt="icon button color theme"/>
                    <Title title='About' titleYellow='ME' subtitle='resume'/>
                    <div className={styles.aboutMe__infos}>
                        <h3 className={styles.aboutMe__titleInfos}>PERSONAL INFOS</h3>
                        <ul className={styles.aboutMe__lists}>
                            <li className={styles.aboutMe__list}>
                                First Name:
                                <span className={styles.aboutMe__list_light}>{state.user.firstName}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Age:
                                <span className={styles.aboutMe__list_light}>{state.user.age} Years</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Freelance:
                                <span className={styles.aboutMe__list_light}>{state.user.freelance}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Phone:
                                <span className={styles.aboutMe__list_light}>{state.user.phone}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Skype:
                                <span className={styles.aboutMe__list_light}>{state.user.skype}</span>
                            </li>
                        </ul>
                        <ul className={styles.aboutMe__lists}>
                            <li className={styles.aboutMe__list}>
                                Last Name:
                                <span className={styles.aboutMe__list_light}>{state.user.lastName}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Nationality:
                                <span className={styles.aboutMe__list_light}>{state.user.lastName}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Address:
                                <span className={styles.aboutMe__list_light}>{state.user.address}</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Email:
                                <span className={styles.aboutMe__list_light}>Aliakseiyausiuk@gmail.com</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Langages:
                                <span className={styles.aboutMe__list_light}>{state.user.langages}</span>
                            </li>
                        </ul>
                        <AboutMeCards/>
                    </div>
                    <Skills/>

                </div>
            </div>
            <Navbar/>
        </section>
    )
}
