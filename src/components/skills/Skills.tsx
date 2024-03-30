import s from './Skills.module.scss'
import {Skill} from './skill/Skill'
import nextJs from 'assets/images/skills/nextjs.svg'
import nestJs from 'assets/images/skills/nestJs.svg'
import styledComponents from 'assets/images/skills/styledComponents.svg'
import react from 'assets/images/skills/react.svg'
import redux from 'assets/images/skills/redux.svg'
import js from 'assets/images/skills/js.svg'
import ts from 'assets/images/skills/ts.svg'
import restAPI from 'assets/images/skills/restApi.svg'
import git from 'assets/images/skills/git.svg'
import html from 'assets/images/skills/html.svg'
import css from 'assets/images/skills/css.svg'
import sass from 'assets/images/skills/sass.svg'
import {Container} from 'components/Container/Container';

const skills = [
    {title: 'Next.js', image: nextJs},
    {title: 'React', image: react},
    {title: 'Redux', image: redux},
    {title: 'NestJS', image: nestJs},
    {title: 'Typescript', image: ts},
    {title: 'Javascript', image: js},
    {title: 'REST API', image: restAPI},
    {title: 'HTML', image: html},
    {title: 'CSS', image: css},
    {title: 'SASS/SCSS', image: sass},
    {title: 'Styled Components', image: styledComponents},
    {title: 'Git', image: git},
]

export const Skills = () => {
    const skillsList = skills.map(({title, image}) =>
        <Skill key={title} title={title} image={image}/>
    )

    return (
        <Container blockClassName={s.skillsBlock}
                   containerClassName={s.skillsContainer}
                   id={'skills'}
                   title={'Skills'}>
            <div className={s.skills}>{skillsList}</div>
        </Container>
    )
}
