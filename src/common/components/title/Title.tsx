import React from 'react';
import style from './Title.module.scss';

type TitlePropsType = {
    text: string
}

export const Title = ({text}: TitlePropsType) => {
    return (
        <div className={style.title}>
            <h2>{text}</h2>
        </div>
    )
}