import s from './Skill.module.scss'
import {Fade} from 'react-awesome-reveal'

type Props = {
  title: string
  image: string
}

export const Skill = ({title, image}: Props) => (
    <div className={s.skill}>
      <Fade>
        <div className={s.icon}>
          <img src={image} alt={`${title} icon`} className={s.img}/>
        </div>
        <h3 className={s.title}>{title}</h3>
      </Fade>
    </div>
)