import s from './Project.module.scss';
import {ImageStyleType} from '../Projects';
import {Fade} from 'react-awesome-reveal';
import {Button} from '../../../common/components/button/Button';

type ProjectPropsType = {
    title: string
    description: string
    style: ImageStyleType
}

export const Project = ({title, description, style}: ProjectPropsType) => (
    <div className={s.project}>
        <Fade>
            <div className={s.image} style={style}>
                <Button text={'Open'} url={''}/>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </Fade>
    </div>
)