import React from 'react';
import style from './Freelance.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Freelance = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <h2 className={style.text}>I Am Available For Freelancer</h2>
                <div className={style.button}>HIRE ME</div>
            </div>
        </div>
    );
}