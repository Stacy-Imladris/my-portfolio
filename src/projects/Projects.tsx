import React from 'react';
import style from './Projects.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {Project} from "./project/Project";
import {Title} from '../common/components/title/Title';
import socNetImage from '../assets/images/socialNetwork.jpg'
import todoImage from '../assets/images/todolist.jpg'

export type ImageStyleType = {
    backgroundImage: string
}

const socialNetwork: ImageStyleType = {
    backgroundImage: `url(${socNetImage})`,
}
const todoList: ImageStyleType = {
    backgroundImage: `url(${todoImage})`,
}

export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todoList} title={'Todolist'} description={'description of my project hjkhjk hjkhkjh fdfdsfs dsfsdf sdfsdfsdf dsfsdfsdf'}/>
                    <Project style={socialNetwork} title={'Social Network'} description={'description of my project jkhjk hj'}/>
                </div>
            </div>
        </div>
    );
}