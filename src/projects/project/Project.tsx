import React from 'react';
import style from './Project.module.scss';
import {ImageStyleType} from '../Projects';
import {Fade} from 'react-awesome-reveal';
import {Button} from '../../common/components/button/Button';

type ProjectPropsType = {
    title: string
    description: string
    style: ImageStyleType
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <Fade>
                <div className={style.image} style={props.style}>
                    <Button text={'Open'} url={''}/>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.title}>{props.title}</h3>
                    <span className={style.description}>{props.description}</span>
                </div>
            </Fade>
        </div>
    );
}