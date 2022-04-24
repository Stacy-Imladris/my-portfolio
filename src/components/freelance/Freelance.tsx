import s from './Freelance.module.scss';
import {Fade} from 'react-awesome-reveal';
import {Title} from '../../common/components/title/Title';

export const Freelance = () => (
    <div className={s.mainBlock}>
        <Fade delay={150}>
            <div className={s.freelanceContainer}>
                <Title text={'I Am Available For Freelancer'}/>
                <button className={s.button}>HIRE ME</button>
            </div>
        </Fade>
    </div>
)