import React from 'react';
import style from './Skills.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'description of my skill hjkhjk hjkhjk hjkhk'}/>
                    <Skill title={'CSS'} description={'description of my skill hjkhkj hjkhjk hjkh'}/>
                    <Skill title={'React'} description={'description of my skill hjhjk hjkhjk hjkh'}/>
                </div>
            </div>
        </div>
    );
}