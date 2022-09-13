import React from 'react'
import styles from './aboutMe.module.scss'
import commonStyles from '../../../styles/common.module.scss'
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg'
import commonStyle from '../../../styles/common.module.scss';


export const AboutME = () => {

    return (
        <section className={styles.aboutMe}>
            <div className={commonStyles.container}>
                <div className={styles.aboutMe__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn} alt='icon button color theme'/>
                    <h1 className={styles.aboutMe__title}>
                        RESUME
                        <span className={styles.aboutMe__subtitle}>ABOUT ME</span>
                    </h1>
                    <Navbar/>
                </div>

            </div>
        </section>
    )
}
