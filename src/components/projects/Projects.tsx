import s from './Projects.module.scss'
import {Project} from './project/Project'
import {Title} from 'common/components/title/Title'
import todolist from 'assets/images/projects/todolist.jpg'
import socialNetwork from 'assets/images/projects/socialNetwork.jpg'
import brainstorm from 'assets/images/projects/brainstorm.jpg'
import movies from 'assets/images/projects/movies.jpg'
import {Container} from 'components/Container/Container';

const projects = [
    {title: 'Brainstorm', githubName: 'cards', image: brainstorm},
    {title: 'Todolist', githubName: 'todolist', image: todolist},
    {title: 'Movies Catalog', githubName: 'movies', image: movies},
    {title: 'Social Network', githubName: 'it-react', image: socialNetwork},
]

export const Projects = () => {
    const projectsList = projects.map(({title, githubName, image}) => (
        <Project key={title}
                 imgUrl={`url(${image})`}
                 title={title}
                 projectName={githubName}
                 description={''}/>
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
