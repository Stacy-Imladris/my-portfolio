import s from './Skills.module.scss'
import {Skill} from './skill/Skill'
import {Title} from 'common/components/title/Title'
import {Fade} from 'react-awesome-reveal'
import react from 'assets/images/skills/react.svg'
import redux from 'assets/images/skills/redux.svg'
import js from 'assets/images/skills/js.svg'
import ts from 'assets/images/skills/ts.svg'
import restAPI from 'assets/images/skills/restAPI.png'
import git from 'assets/images/skills/git.svg'
import html from 'assets/images/skills/html.svg'
import css from 'assets/images/skills/css.svg'
import sass from 'assets/images/skills/sass.svg'

const skills = [
    {title: 'REACT', image: react},
    {title: 'REDUX', image: redux},
    {title: 'TYPESCRIPT', image: ts},
    {title: 'JAVASCRIPT', image: js},
    {title: 'REST API', image: restAPI},
    {title: 'GIT', image: git},
    {title: 'HTML', image: html},
    {title: 'CSS', image: css},
    {title: 'SASS/SCSS', image: sass},
]

export const Skills = () => {
    const skillsList = skills.map(({title, image}) =>
        <Skill key={title} title={title} imgUrl={`url(${image})`}/>
    )

    return (
        <div className={s.skillsBlock} id="skills">
            <Fade delay={150}>
                <div className={s.skillsContainer}>
                    <Title text="Skills"/>
                    <div className={s.skills}>{skillsList}</div>
                </div>
            </Fade>
        </div>
    )
}
