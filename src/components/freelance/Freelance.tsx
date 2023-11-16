import s from './Freelance.module.scss'
import {Fade} from 'react-awesome-reveal'
import {Title} from 'common/components/title/Title'
import {Link} from 'react-scroll'

export const Freelance = () => (
    <div className={s.mainBlock}>
        <Fade delay={150}>
            <div className={s.freelanceContainer}>
                <Title text={'I Am Available For Freelancer'}/>
                <Link className={s.button} to={'contacts'} spy={true} smooth={true}
                      offset={-70} duration={300}>
                    HIRE ME
                </Link>
            </div>
        </Fade>
    </div>
)