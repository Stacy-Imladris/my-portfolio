import s from './Projects.module.scss'
import {Project} from './project/Project'
import itIncubator from 'assets/images/projects/itIncubator.webp'
import todolist from 'assets/images/projects/todolist.webp'
// import socialNetwork from 'assets/images/projects/socialNetwork.webp'
import brainstorm from 'assets/images/projects/brainstorm.webp'
import movies from 'assets/images/projects/movies.webp'
import {Container} from 'components/Container/Container';

const projects = [
    {title: 'IT-Incubator Website', url: 'https://it-incubator.io', image: itIncubator},
    {title: 'Brainstorm', url: 'https://stacy-imladris.github.io/cards', image: brainstorm},
    {title: 'Movies Catalog', url: 'https://stacy-imladris.github.io/movies', image: movies},
    {title: 'Todolist', url: 'https://stacy-imladris.github.io/todolist', image: todolist},
    // {title: 'Social Network', url: 'https://stacy-imladris.github.io/it-react', image: socialNetwork},
]

export const Projects = () => {
    const projectsList = projects.map(project => (
        <Project key={project.title} {...project}/>
    ))

    return (
        <Container blockClassName={s.projectsBlock}
                   containerClassName={s.projectsContainer}
                   id={'projects'}
                   title={'Projects'}>
            <div className={s.projects}>{projectsList}</div>
        </Container>
    )
}
