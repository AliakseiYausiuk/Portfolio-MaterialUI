import React from 'react';
import moonImg from '../../icons/icons8-moon-48.png'

export type btnType = {
    classNameBtn?: any
    imgUrl?: any
    alt?: string
    classNameImg?: any
}

export const Button = ({imgUrl, classNameBtn, alt, classNameImg}: btnType) => {

    const changeTheme = () => {
        const styl = 'activeTheme';
        document.body.classList.toggle(styl);

    }

    return <button className={classNameBtn} onClick={changeTheme}>
        <img src={imgUrl} alt={alt} className={classNameImg}/>
    </button>
}