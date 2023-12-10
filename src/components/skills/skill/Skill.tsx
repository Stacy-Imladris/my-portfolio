import s from './Skill.module.scss'
import {Fade} from 'react-awesome-reveal'

type Props = {
    title: string
    imgUrl: string
}

export const Skill = ({title, imgUrl}: Props) => (
    <div className={s.skill}>
        <Fade>
            <div className={s.icon}>
                <div className={s.img} style={{backgroundImage: imgUrl}}/>
            </div>
            <h3 className={s.title}>{title}</h3>
        </Fade>
    </div>
)