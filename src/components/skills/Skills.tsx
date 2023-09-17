import s from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {Title} from 'common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import react from 'assets/images/skills/react.svg';
import redux from 'assets/images/skills/redux.svg';
import js from 'assets/images/skills/js.svg';
import ts from 'assets/images/skills/ts.svg';
import restAPI from 'assets/images/skills/restAPI.png';
import git from 'assets/images/skills/git.svg';
import html from 'assets/images/skills/html.svg';
import css from 'assets/images/skills/css.svg';
import sass from 'assets/images/skills/sass.svg';

export const Skills = () => (
    <div className={s.skillsBlock} id="skills">
        <Fade delay={150}>
            <div className={s.skillsContainer}>
                <Title text="Skills"/>
                <div className={s.skills}>
                    <Skill title={'REACT'} imgUrl={`url(${react})`}/>
                    <Skill title={'REDUX'} imgUrl={`url(${redux})`}/>
                    <Skill title={'TYPESCRIPT'} imgUrl={`url(${js})`}/>
                    <Skill title={'JAVASCRIPT'} imgUrl={`url(${ts})`}/>
                    <Skill title={'REST API'} imgUrl={`url(${restAPI})`}/>
                    <Skill title={'GIT'} imgUrl={`url(${git})`}/>
                    <Skill title={'HTML'} imgUrl={`url(${html})`}/>
                    <Skill title={'CSS'} imgUrl={`url(${css})`}/>
                    <Skill title={'SASS/SCSS'} imgUrl={`url(${sass})`}/>
                </div>
            </div>
        </Fade>
    </div>
)