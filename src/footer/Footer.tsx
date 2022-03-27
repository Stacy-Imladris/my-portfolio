import React from 'react';
import style from './Footer.module.scss';
import styleContainer from '../common/styles/Container.module.scss';

export const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.text}>Stacy Imladris</h2>
                <ul className={style.links}>
                    <li><a href="" className={style.link}>Linkedin</a></li>
                    <li><a href="" className={style.link}>Github</a></li>
                    <li><a href="" className={style.link}>Codewars</a></li>
                    <li><a href="" className={style.link}>Telegram</a></li>
                </ul>
                <span className={style.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </div>
    );
}