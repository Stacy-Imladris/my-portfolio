import s from './Skill.module.scss';
import {Fade} from 'react-awesome-reveal';

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = ({title, description}: SkillPropsType) => (
    <div className={s.skill}>
        <Fade>
            <div className={s.icon}><img src={''} alt={''}/></div>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </Fade>
    </div>
)