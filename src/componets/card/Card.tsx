import React, {useState} from 'react';
import styles from './card.module.scss'
import {project} from '../../models/models';
import {PopUp} from '../popUp/PopUp';

type cardType = {
    data: project
}

export const Card = ({data}: cardType) => {
    const [popup, setPopup] = useState(false);

    const openPopup = () => {
        setPopup(true);

    };
    const closePopup = () => {
        setPopup(false);
    };
    return (
        <>
            {popup && <PopUp closePopup={closePopup} data={data}/>}
            <div className={styles.card__wrapperImg} onClick={openPopup}>
                <img className={styles.card__img} src={data.img} alt="images" />
            </div>
        </>
    )
}