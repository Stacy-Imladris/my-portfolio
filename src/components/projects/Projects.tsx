import s from './Projects.module.scss';
import {Project} from './project/Project';
import {Title} from '../../common/components/title/Title';
import socNetImage from '../../assets/images/projects/socialNetwork.jpg'
import todoImage from '../../assets/images/projects/todolist.jpg'
import {Fade} from 'react-awesome-reveal';

export type ImageStyleType = {
    backgroundImage: string
}

const socialNetwork: ImageStyleType = {backgroundImage: `url(${socNetImage})`}
const todoList: ImageStyleType = {backgroundImage: `url(${todoImage})`}

export const Projects = () => (
    <div className={s.projectsBlock} id="projects">
        <Fade delay={150}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={todoList} title={'Todolist'}
                             description={'description of my project hjkhjk hjkhkjh fdfdsfs dsfsdf sdfsdfsdf dsfsdfsdf'}/>
                    <Project style={socialNetwork} title={'Social Network'}
                             description={'description of my project jkhjk hj'}/>
                </div>
            </div>
        </Fade>
    </div>
)