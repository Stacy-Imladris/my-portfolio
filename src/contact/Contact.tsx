import React from 'react';
import style from './Contact.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Contact = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.text}>Contact</h2>
                <form className={style.form}>
                    <input placeholder={'Name'}/>
                    <input placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'}></textarea>
                    <button type='submit' className={style.button}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}