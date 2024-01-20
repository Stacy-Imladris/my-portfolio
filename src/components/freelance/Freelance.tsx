import s from './Freelance.module.scss'
import {Link} from 'react-scroll'
import {Container} from 'components/Container/Container';

export const Freelance = () => (
    <Container blockClassName={s.mainBlock}
               containerClassName={s.freelanceContainer}
               title={'I Am Available For Freelancer'}>
        <Link className={s.button} to={'contacts'} spy smooth offset={-70} duration={300}>
            HIRE ME
        </Link>
    </Container>
)
