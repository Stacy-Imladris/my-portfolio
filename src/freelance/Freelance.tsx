import React from 'react';
import style from './Freelance.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleButton from '../common/styles/Button.module.scss';
import {Title} from '../common/components/title/Title';

export const Freelance = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.freelanceContainer}`}>
                <Title text={'I Am Available For Freelancer'}/>
                <button className={`${styleButton.customButton} ${style.button}`}>HIRE ME</button>
            </div>
        </div>
    );
}