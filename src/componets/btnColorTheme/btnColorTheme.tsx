import React from 'react';
import styles from './btnColorTheme.module.scss';
import sunIcon from '../../icons/icons8-sun.svg';

export const BtnColorTheme = () => {

    const changeTheme = () => {
        const styl = 'activeTheme';
        document.body.classList.toggle(styl);
    }
    return <button className={styles.btn} onClick={changeTheme}>
        <img id="btnTheme" src={sunIcon} alt={sunIcon}/>
    </button>
}