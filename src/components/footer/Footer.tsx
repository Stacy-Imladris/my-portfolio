import s from './Footer.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Title} from 'common/components/title/Title'
import linkedin from 'assets/images/links/linkedin.png'
import github from 'assets/images/links/github.png'
import codewars from 'assets/images/links/codewars.png'
import telegram from 'assets/images/links/telegram.png'

const links = [
    {url: 'https://www.linkedin.com/in/anastasiya-belikova-9687b8234', image: linkedin, alt: 'linkedin'},
    {url: 'https://github.com/Stacy-Imladris', image: github, alt: 'github'},
    {url: 'https://www.codewars.com/users/Stacy-Imladris', image: codewars, alt: 'codewars'},
    {url: 'https://t.me/stacy_imladris', image: telegram, alt: 'telegram'},
]

export const Footer = () => {
    const linksList = links.map(({url, image, alt}) => (
        <a href={url} className={s.icon} target='_blank' rel="noreferrer">
            <img src={image} className={s.img} alt={alt}/>
        </a>
    ))

    return (
        <div className={s.mainBlock}>
            <Fade delay={150}>
                <div className={s.footerContainer}>
                    <Title text={'Stacy Belikova'}/>
                    <div className={s.icons}>{linksList}</div>
                    <span className={s.copyright}>© 2022, All Rights Reserved.</span>
                </div>
            </Fade>
        </div>
    )
}
