import React from 'react';
import style from './Skills.module.scss';
import styleContainer from "../common/styles/Container.module.scss";
import {Skill} from "./skill/Skill";
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'REACT'} description={'description of my skill hjkhjk hjkhjk sdfsdf sdf sdf sdf sdfsdfsdfghfgh sdgfhfghf fyfjsdf sdf sdf sdf sdf  sdf sdf hjkhk'}/>
                    <Skill title={'REDUX'} description={'description of my skill hjkhkj hjksdfsdf sdf sdf sdf sdf sdf sdf hjk hjkh'}/>
                    <Skill title={'JAVASCRIPT'} description={'description of my skill hjhjk hjkhjk hjkh fsdfsdfsdf sdfsdfsdf sdfsdfsdf ssdfsdfsdf sdfsdfsdf sdfsdfsdf sdf sdf sdf sd sdf sdfsdf sdfsd sd fsdfs dfsdfsd fsdfsdf s'}/>
                    <Skill title={'TYPESCRIPT'} description={'description of my skill hjhjk hjkhjk hjkdfdfsdf sdf sd fsd fsdf sdfsdf sdf sdf sdf sdf sdf sdf sdf sdfh'}/>
                    <Skill title={'REST API'} description={'description of my skill hjhjk hjkhjsdfsdf sdf sdf sdf sdf sdf sdf sdfsdf sdf sdf sdf sdf sdf sdf k hjkh'}/>
                    <Skill title={'GIT'} description={'description of my skill hjhjk hjkhjksdfsdf sdf ssdf fsdfsdf sdf sd'}/>
                    <Skill title={'HTML'} description={'description of my skill hjhjk hjkhjksdfsdf sdf ssdf fsdfsdf sdf sd'}/>
                    <Skill title={'CSS'} description={'description of my skill hjhjk hjkhjksdfsdf sdf ssdf fsdfsdf sdf sd'}/>
                    <Skill title={'SASS/SCSS'} description={'description of my skill hjhjk hjkhjksdfsdf sdf ssdf fsdfsdf sdf sd'}/>
                </div>
            </div>
        </div>
    );
}