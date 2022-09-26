import React, {useState} from 'react';
import styles from './porfolio.module.scss'
import commonStyle from '../../../styles/common.module.scss';
import {Title} from '../../title/Title';
import {Navbar} from '../../navbar/Navbar';
import {Button} from '../../btn/Button';
import iconBtn from '../../../icons/icons8-sun.svg';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';
import {PopUp} from '../../popUp/PopUp';


export const Portfolio = () => {
    const state = useSelector((state: RootState) => state);
    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(true)
    };
    const closePopup = () => {
        setPopup(false);
    };

    return (
        <section className={styles.portfolio}>
            {popup && <PopUp closePopup={closePopup}/>}
            <div className={commonStyle.container}>
                <div className={styles.portfolio__item}>
                    <Button classNameBtn={commonStyle.changeThemeColorBnt} imgUrl={iconBtn}
                            alt="icon button color theme"/>
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
                            return (
                                <div key={el.id} className={styles.portfolio__wrapperImg} onClick={openPopup}>
                                    <img className={styles.portfolio__img} src={el.img} alt="images" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Navbar/>
        </section>
    )
}