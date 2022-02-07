import React from 'react';
import style from './Projects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import {Project} from "./project/Project";

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Todolist'} description={'description of my project hjkhjk hjkhkjh jkhjkhkj hkjhkjh kjhjk'}/>
                    <Project title={'Social Network'} description={'description of my project jkhjk hjkhkjh jkhjkhkj hkjhkjh kjh'}/>
                </div>
            </div>
        </div>
    );
}