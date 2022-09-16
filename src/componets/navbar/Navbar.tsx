import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.scss'
import iconsHome from '../../icons/icons8-home.svg'
import iconsUser from '../../icons/icons8-user-24 (1).png'
import iconsPortfolio from '../../icons/icons8-briefcase-24.png'
import iconsContact from '../../icons/icons8-contact-24.png'
import iconsBlog from '../../icons/icons8-speech-bubble.svg'

export const Navbar = () => {

    return (
        <section className={styles.navbar}>
            <NavLink to="/" className={styles.navbar__link}>
                <img className={styles.navbar__img} src={iconsHome} alt="icon Home"/>
                <h3 className={styles.navbar__title}>Home</h3>
            </NavLink>
            <NavLink to="/aboutMe" className={styles.navbar__link}>
                <img className={styles.navbar__img} src={iconsUser} alt="icon user"/>
                <h3 className={styles.navbar__title}>About</h3>
            </NavLink>
            <NavLink to="/portfolio" className={styles.navbar__link}>
                <img className={styles.navbar__img} src={iconsPortfolio} alt="icon portfolio"/>
                <h3 className={styles.navbar__title}>Portfolio</h3>
            </NavLink>
            <NavLink to="/contact" className={styles.navbar__link}>
                <img className={styles.navbar__img} src={iconsContact} alt="icon contact"/>
                <h3 className={styles.navbar__title}>Contacnt</h3>
            </NavLink>
            <NavLink to="/blog" className={styles.navbar__link}>
                <img className={styles.navbar__img} src={iconsBlog} alt="icon blog"/>
                <h3 className={styles.navbar__title}>Blog</h3>
            </NavLink>
        </section>
    )
}
