import React, {useState} from 'react';
import styles from './card.module.scss'
import {Project} from '../../models/models';
import {PopUp} from '../popUp/PopUp';
// @ts-ignore
import {motion} from 'framer-motion/dist/framer-motion';



type cardType = {
    data: Project
    index: number
}

export const Card = React.memo(({data, index}: cardType) => {

    const cardVariants = {
        visible: (i:number) => ({
            opacity: 1,
            transition: {
                delay: i * .5,
            }
        }),
        hidden: {
            opacity: 0
        }
    }

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
            <motion.div
                className={styles.card__wrapperImg}
                onClick={openPopup}
                variants={cardVariants}
                custom={index}
                initial='hidden'
                animate='visible'
            >
                <img
                    className={styles.card__img}
                    src={data.img} alt="images"
                />
            </motion.div>
        </>
    )
})