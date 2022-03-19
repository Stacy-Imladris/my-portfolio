import React from 'react';
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css';

export const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.text}>Stacy Imladris</h2>
                <div className={style.links}>
                    <a href="" className={style.link}>FB</a>
                    <a href="" className={style.link}>LI</a>
                    <a href="" className={style.link}>Inst</a>
                    <a href="" className={style.link}>GH</a>
                </div>
                <span className={style.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </div>
    );
}