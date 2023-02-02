// @ts-ignore
import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import styles from './title.module.scss'

type TitleType = {
    title?: string
    titleYellow?: string
    subtitle?: string
}

export const Title = React.memo(({title, titleYellow, subtitle}: TitleType) => {
    return (
        <div className={styles.title__wrapper}>
            <motion.h1
                className={styles.title}
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                }}
            >
                {title}
                <span className={styles.title__yellow}>{titleYellow}</span>
                <span className={styles.title__subtitle}>{subtitle}</span>
            </motion.h1>
        </div>
    )
})