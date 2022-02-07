import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.text}>Stacy Imladris</h2>
                <div className={style.links}>
                    <a href="" className={style.link}>Facebook</a>
                    <a href="" className={style.link}>Linkedin</a>
                    <a href="" className={style.link}>Instagram</a>
                </div>
                <div className={style.copyright}>© 2022, All Rights Reserved.</div>
            </div>
        </div>
    );
}