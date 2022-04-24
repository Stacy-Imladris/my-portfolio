import s from './Footer.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Title} from '../../common/components/title/Title';

export const Footer = () => (
    <div className={s.mainBlock}>
        <Fade delay={150}>
            <div className={s.footerContainer}>
                <Title text={'Stacy Imladris'}/>
                <div className={s.icons}>
                    <div className={s.icon}>
                        <a href=""><img src={'linkedin'} alt={'Linkedin'}/>Linkedin</a>
                    </div>
                    <div className={s.icon}>
                        <a href=""><img src={'github'} alt={'Github'}/>Github</a>
                    </div>
                    <div className={s.icon}>
                        <a href=""><img src={'codewars'} alt={'Codewars'}/>Codewars</a>
                    </div>
                    <div className={s.icon}>
                        <a href=""><img src={'telegram'} alt={'Telegram'}/>Telegram</a>
                    </div>
                </div>
                <span className={s.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </Fade>
    </div>
)