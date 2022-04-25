import s from './Skills.module.scss';
import {Skill} from './skill/Skill';
import {Title} from '../../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import react from '../../assets/images/skills/react.svg';
import redux from '../../assets/images/skills/redux.svg';
import js from '../../assets/images/skills/js.svg';
import ts from '../../assets/images/skills/ts.svg';
import restAPI from '../../assets/images/skills/restAPI.png';
import git from '../../assets/images/skills/git.svg';
import html from '../../assets/images/skills/html.svg';
import css from '../../assets/images/skills/css.svg';
import sass from '../../assets/images/skills/sass.svg';

export const Skills = () => {
    return (
        <div className={s.skillsBlock} id="skills">
            <Fade delay={150}>
                <div className={s.skillsContainer}>
                    <Title text="Skills"/>
                    <div className={s.skills}>
                        <Skill title={'REACT'} imgUrl={`url(${react})`}
                               description={'description of my skill'}/>
                        <Skill title={'REDUX'} imgUrl={`url(${redux})`}
                               description={'description of my skill'}/>
                        <Skill title={'TYPESCRIPT'} imgUrl={`url(${js})`}
                               description={'description of my skill'}/>
                        <Skill title={'JAVASCRIPT'} imgUrl={`url(${ts})`}
                               description={'description of my skill'}/>
                        <Skill title={'REST API'} imgUrl={`url(${restAPI})`}
                               description={'description of my skill'}/>
                        <Skill title={'GIT'} imgUrl={`url(${git})`}
                               description={'description of my skill'}/>
                        <Skill title={'HTML'} imgUrl={`url(${html})`}
                               description={'description of my skill'}/>
                        <Skill title={'CSS'} imgUrl={`url(${css})`}
                               description={'description of my skill'}/>
                        <Skill title={'SASS/SCSS'} imgUrl={`url(${sass})`}
                               description={'description of my skill'}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}