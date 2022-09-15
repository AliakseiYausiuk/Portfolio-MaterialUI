import React from 'react'
import styles from './aboutMe.module.scss'
import commonStyles from '../../../styles/common.module.scss'
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';


export const AboutME = () => {

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
                                <span className={styles.aboutMe__list_light}>Alex</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Age:
                                <span className={styles.aboutMe__list_light}>25 Years</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Freelance:
                                <span className={styles.aboutMe__list_light}>Available</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Phone:
                                <span className={styles.aboutMe__list_light}>+375259351665</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Skype:
                                <span className={styles.aboutMe__list_light}>No</span>
                            </li>
                        </ul>
                        <ul className={styles.aboutMe__lists}>
                            <li className={styles.aboutMe__list}>
                                Last Name:
                                <span className={styles.aboutMe__list_light}>Yausiuk</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Nationality:
                                <span className={styles.aboutMe__list_light}>Belarus</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Address:
                                <span className={styles.aboutMe__list_light}>Minsk</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Email:
                                <span className={styles.aboutMe__list_light}>Aliakseiyausiuk@gmail.com</span>
                            </li>
                            <li className={styles.aboutMe__list}>
                                Langages:
                                <span className={styles.aboutMe__list_light}>Russian, English</span>
                            </li>
                        </ul>
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
                    </div>
                    <Navbar/>
                </div>
            </div>
        </section>
    )
}
