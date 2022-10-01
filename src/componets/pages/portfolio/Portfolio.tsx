import React, {useState} from 'react';
import styles from './porfolio.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {BtnColorTheme} from '../../btnColorTheme/btnColorTheme';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {Card} from '../../card/Card';


export const Portfolio = () => {
    const state = useSelector((state: RootState) => state);

    return (
        <section className={styles.portfolio}>
            <div className={commonStyle.container}>
                <div className={styles.portfolio__item}>
                    <BtnColorTheme/>
                    <Title title="MY" titleYellow="Portfolio" subtitle="Works"/>
                    <ul className={styles.portfolio__lists}>
                        <li className={styles.portfolio__list}>ALL</li>
                        <li className={styles.portfolio__list}>LOGO</li>
                        <li className={styles.portfolio__list}>VIDEO</li>
                        <li className={styles.portfolio__list}>GRAPHIC DESIGN</li>
                        <li className={styles.portfolio__list}>MOCKUP</li>
                    </ul>
                    <div className={styles.portfolio__wrapper}>
                        {state.user.project.map(el => {
                            return <Card key={el.id}  data={el}/>
                        })}
                    </div>
                </div>
            </div>
            <Navbar/>
        </section>
    )
}