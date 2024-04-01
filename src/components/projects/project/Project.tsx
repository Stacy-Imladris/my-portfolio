import {useState} from 'react';
import s from './Project.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Button} from 'common/components/button/Button'

type Props = {
  title: string
  image: string
  url: string
  description?: string
}

export const Project = ({title, description, image, url}: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const makeHovered = () => setIsHovered(true)
  const makeNotHovered = () => setIsHovered(false)

  return (
      <div className={s.project}>
        <Fade>
          <div className={s.image} style={{backgroundImage: `url(${image})`}}
               onMouseEnter={makeHovered}
               onMouseDown={makeHovered}
               onMouseLeave={makeNotHovered}>
            <span hidden={!isHovered}><Button text={'Open'} url={url}/></span>
          </div>
          <div className={s.projectInfo}>
            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
          </div>
        </Fade>
      </div>
  )
}
