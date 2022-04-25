import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../../common/components/title/Title';
import todolist from '../../assets/images/projects/todolist.jpg'
import socialNetwork from '../../assets/images/projects/socialNetwork.jpg'
import {Fade} from 'react-awesome-reveal';

export const Projects = () => (
    <div className={s.projectsBlock} id="projects">
        <Fade delay={150}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project imgUrl={`url(${todolist})`} title={'Todolist'}
                             description={'description of my project hjkhjk hjkhkjh fdfdsfs dsfsdf sdfsdfsdf dsfsdfsdf'}/>
                    <Project imgUrl={`url(${socialNetwork})`} title={'Social Network'}
                             description={'description of my project jkhjk hj'}/>
                </div>
            </div>
        </Fade>
    </div>
)