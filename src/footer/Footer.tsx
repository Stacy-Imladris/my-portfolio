import style from './Footer.module.scss';
import {Title} from '../common/components/title/Title';

export const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.footerContainer}>
                <Title text={'Stacy Imladris'}/>
                <div className={style.icons}>
                    <div className={style.icon}>
                        <a href=""><img src={'linkedin'} alt={'Linkedin'}/>Linkedin</a>
                    </div>
                    <div className={style.icon}>
                        <a href=""><img src={'github'} alt={'Github'}/>Github</a>
                    </div>
                    <div className={style.icon}>
                        <a href=""><img src={'codewars'} alt={'Codewars'}/>Codewars</a>
                    </div>
                    <div className={style.icon}>
                        <a href=""><img src={'telegram'} alt={'Telegram'}/>Telegram</a>
                    </div>
                </div>
                <span className={style.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </div>
    );
}