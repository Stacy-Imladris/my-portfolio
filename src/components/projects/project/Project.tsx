import s from './Project.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Button} from 'common/components/button/Button'

const baseGithubLink = 'https://stacy-imladris.github.io'

type Props = {
    title: string
    description: string
    imgUrl: string
    projectName: string
}

export const Project = ({title, description, imgUrl, projectName}: Props) => (
    <div className={s.project}>
        <Fade>
            <div className={s.image} style={{backgroundImage: imgUrl}}>
                <Button text={'Open'} url={`${baseGithubLink}/${projectName}`}/>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </Fade>
    </div>
)