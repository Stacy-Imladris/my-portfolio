import s from './Footer.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Title} from '../../common/components/title/Title';
import linkedin from '../../assets/images/links/linkedin.svg'
import github from '../../assets/images/links/github.svg'
import codewars from '../../assets/images/links/codewars.svg'
import telegram from '../../assets/images/links/telegram.svg'

export const Footer = () => (
    <div className={s.mainBlock}>
        <Fade delay={150}>
            <div className={s.footerContainer}>
                <Title text={'Stacy Imladris'}/>
                <div className={s.icons}>
                    <div className={s.icon} style={{backgroundImage: `url(${linkedin})`}}>
                        <a href=""/>
                    </div>
                    <div className={s.icon} style={{backgroundImage: `url(${github})`}}>
                        <a href=""/>
                    </div>
                    <div className={s.icon} style={{width: '60px', height: '60px', backgroundImage: `url(${codewars})`}}>
                        <a href=""/>
                    </div>
                    <div className={s.icon} style={{backgroundImage: `url(${telegram})`}}>
                        <a href="https://t.me/stacy_imladris"/>
                    </div>
                </div>
                <span className={s.copyright}>© 2022, All Rights Reserved.</span>
            </div>
        </Fade>
    </div>
)