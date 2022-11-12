import React from 'react';
import styles from './btnColorTheme.module.scss';
import sunIcon from '../../icons/icons8-sun.svg';
import moonIcon from '../../icons/icons8-moon-48.png';


export const BtnColorTheme = () => {

    const changeTheme = () => {
        // const img = document.getElementById('btnTheme') as HTMLImageElement
        //
        // if (img.src === sunIcon) {
        //     img.src = moonIcon
        // } else {
        //     img.src = sunIcon
        // }
        const styl = 'activeTheme';
        document.body.classList.toggle(styl);
    }
    return <button className={styles.btn} onClick={changeTheme}>
        <img id="btnTheme" src={sunIcon} alt={sunIcon}/>
    </button>
}