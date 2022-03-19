import React from 'react';
import style from './Project.module.scss';
import {ImageStyleType} from '../Projects';

type ProjectPropsType = {
    title: string
    description: string
    style: ImageStyleType
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <a href='' className={style.open}>Open</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}