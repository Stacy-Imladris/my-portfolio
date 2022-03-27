import React from 'react';
import style from './Contact.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import styleButton from '../common/styles/Button.module.scss';
import {Title} from '../common/components/title/Title';

export const Contact = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text={'Contact'}/>
                <form className={style.form}>
                    <input placeholder={'Name'}/>
                    <input placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'} className={style.area}/>
                    <button type='submit' className={styleButton.customButton}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}