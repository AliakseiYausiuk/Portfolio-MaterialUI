import React from 'react';
import styles from './contact.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg';
import iconMap from '../../../icons/icons8-map-50.png';
import iconMail from '../../../icons/icons8-mail-50.png';
import iconCall from '../../../icons/icons8-call-50.png';
import iconFacebook from '../../../icons/icons8-facebook-f.svg';
import iconTwitter from '../../../icons/icons8-twitter.svg';
import iconYoutube from '../../../icons/icons8-youtube-logo.svg';
import iconDribbble from '../../../icons/icons8-dribbble.svg';
import {Form} from '../../form/Form';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';


export const Contact = () => {
    const state = useSelector((state: RootState) => state);
    return (
        <section className={styles.contact}>
            <div className={commonStyle.container}>
                <div className={styles.contact__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn}
                            alt="icon button color theme"/>
                    <Title title="get in" titleYellow="touch" subtitle="Contact"/>
                    <div className={styles.contact__wrapper}>
                        <ul className={styles.contact__list}>
                            <li className={styles.contact__listsTitle}>DON'T BE SHY!</li>
                            <li className={styles.contact__listSubtitle}>
                                Feel free to get in touch with me.
                                I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </li>
                            <li className={styles.contact__lists}>
                                <img className={styles.contact__img} src={iconMap} alt="icon map"/>
                                <span className={styles.contact__listsItem}>
                                    address point
                                <p className={styles.contact__listsText}>{state.user.street}</p>
                                </span>
                            </li>
                            <li className={styles.contact__lists}>
                                <img className={styles.contact__img} src={iconMail} alt="icon mail"/>
                                <span className={styles.contact__listsItem}>
                                    mail me
                                <p className={styles.contact__listsText}>{state.user.email}</p>
                                </span>
                            </li>
                            <li className={styles.contact__lists}>
                                <img className={styles.contact__img} src={iconCall} alt="icon call"/>
                                <span className={styles.contact__listsItem}>
                                    call me
                                <p className={styles.contact__listsText}>{state.user.phone}</p>
                                </span>
                            </li>
                            <li className={styles.contact__lists}>
                                <ul className={styles.contact__listSocialNetwork}>
                                    <li className={styles.contact__listsNetwork}>
                                        <a href="https://www.facebook.com/">
                                            <img className={styles.contact__listsNetworkIcon} src={iconFacebook}
                                                 alt="icon facebook"/>
                                        </a>
                                    </li>
                                    <li className={styles.contact__listsNetwork}>
                                        <a href="https://twitter.com/">
                                            <img className={styles.contact__listsNetworkIcon} src={iconTwitter}
                                                 alt="icon twitter"/>
                                        </a>
                                    </li>
                                    <li className={styles.contact__listsNetwork}>
                                        <a href="https://www.youtube.com/">
                                            <img className={styles.contact__listsNetworkIcon} src={iconYoutube}
                                                 alt="icon youtube"/>
                                        </a>
                                    </li>
                                    <li className={styles.contact__listsNetwork}>
                                        <a href="https://dribbble.com/">
                                            <img className={styles.contact__listsNetworkIcon} src={iconDribbble}
                                                 alt="icon dribbble"/>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <Form/>
                    </div>
                    <Navbar/>
                </div>
            </div>
            <Navbar/>
        </section>
    )
}