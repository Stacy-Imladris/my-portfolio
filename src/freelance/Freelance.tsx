import style from './Freelance.module.scss';
import {Title} from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Freelance = () => {
    return (
        <div className={style.mainBlock}>
            <Fade delay={150}>
                <div className={style.freelanceContainer}>
                    <Title text={'I Am Available For Freelancer'}/>
                    <button className={style.button}>HIRE ME</button>
                </div>
            </Fade>
        </div>
    );
}