import s from './Project.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Button} from '../../../common/components/button/Button';
import {useState} from 'react';

type ProjectPropsType = {
    title: string
    description: string
    imgUrl: string
    projectUrl: string
}

export const Project = ({title, description, imgUrl, projectUrl}: ProjectPropsType) => {
    const [isBtnShown, setIsBtnShown] = useState<boolean>(false)

    const showButton = () => {
        setIsBtnShown(true)
    }

    const hideButton = () => {
        setIsBtnShown(false)
    }

    return (
        <div className={s.project}>
            <Fade>
                <div className={s.image} style={{backgroundImage: imgUrl}} onMouseEnter={showButton} onMouseLeave={hideButton}>
                    {isBtnShown && <Button text={'Open'} url={projectUrl}/>}
                </div>
                <div className={s.projectInfo}>
                    <h3 className={s.title}>{title}</h3>
                    <span className={s.description}>{description}</span>
                </div>
            </Fade>
        </div>
    )
}