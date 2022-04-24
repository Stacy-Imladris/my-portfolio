import React from 'react';
import style from './Skill.module.scss';
import {Fade} from 'react-awesome-reveal';

type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <Fade>
                <div className={style.icon}>
                    <img src={''} alt={''}/>
                </div>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </Fade>
        </div>
    );
}