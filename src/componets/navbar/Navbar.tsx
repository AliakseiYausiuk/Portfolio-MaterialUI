import React from 'react'
import {NavLink} from 'react-router-dom';
import styles from './navbar.module.scss'
import iconsHome from '../../icons/icons8-home.svg'
import iconsUser from '../../icons/icons8-user-24.png'
import iconsPortfolio from '../../icons/icons8-briefcase.svg'
import iconsContact from '../../icons/icons8-contact-24.png'
import iconsBlog from '../../icons/icons8-speech-bubble.svg'
import {PATH} from '../../App';
import { v1 } from 'uuid';
import {DataNav} from '../../models/models';




export const Navbar = () => {

    const dataNav: Array<DataNav> = [
        {id:v1(), img: iconsHome, alt: "icon Home", text: 'Home',path:PATH.HOME},
        {id:v1(), img: iconsUser, alt: "icon user", text: 'About',path:PATH.ABOUTME},
        {id:v1(), img: iconsPortfolio, alt: "icon portfolio", text: 'Portfolio',path:PATH.PORTFOLIO},
        {id:v1(), img: iconsContact, alt: "icon contact", text: 'Contacnt',path:PATH.CONTACT},
        {id:v1(), img: iconsBlog, alt: "icon blog", text: 'Blog',path:PATH.BLOG},
    ]

    return (
        <nav className={styles.navbar}>
            {dataNav.map((el:DataNav) => {
                return <NavLink to={el.path} className={styles.navbar__link} key={el.id}>
                    <img className={styles.navbar__img} src={el.img} alt={el.alt}/>
                    <h3 className={styles.navbar__title}>{el.text}</h3>
                </NavLink>
            })}
        </nav>
    )
}
