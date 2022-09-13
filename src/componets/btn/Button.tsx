import React from 'react';

export type btnType = {
    classNameBtn?: any
    imgUrl?: any
    alt?: string
    classNameImg?: any
}

export const Button = ({imgUrl, classNameBtn, alt, classNameImg}: btnType) => {
    return <button className={classNameBtn}>
        <img src={imgUrl} alt={alt} className={classNameImg}/>
    </button>
}