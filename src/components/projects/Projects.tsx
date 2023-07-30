import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from 'common/components/title/Title';
import todolist from 'assets/images/projects/todolist.jpg'
import socialNetwork from 'assets/images/projects/socialNetwork.jpg'
import brainstorm from 'assets/images/projects/brainstorm.jpg'
import movies from 'assets/images/projects/movies.jpg'
import {Fade} from 'react-awesome-reveal';

export const Projects = () => (
    <div className={s.projectsBlock} id="projects">
        <Fade delay={150}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project imgUrl={`url(${brainstorm})`} title={'Brainstorm'}
                             projectUrl={'https://stacy-imladris.github.io/cards'}
                             description={''}/>
                    <Project imgUrl={`url(${todolist})`} title={'Todolist'}
                             projectUrl={'https://stacy-imladris.github.io/todolist'}
                             description={''}/>
                    <Project imgUrl={`url(${movies})`} title={'Movies Catalog'}
                             projectUrl={'https://stacy-imladris.github.io/movies'}
                             description={''}/>
                    <Project imgUrl={`url(${socialNetwork})`} title={'Social Network'}
                             projectUrl={'https://github.com/Stacy-Imladris/it-react'}
                             description={''}/>
                </div>
            </div>
        </Fade>
    </div>
)