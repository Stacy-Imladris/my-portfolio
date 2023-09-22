import s from './Nav.module.scss';
import {UniversalLink} from 'common/components/universalLink/UniversalLink';

export const Nav = () => (
    <div className={s.nav}>
        <UniversalLink anchor={'main'} offset={-70} text={'Main'}/>
        <UniversalLink anchor={'skills'} offset={-50} text={'Skills'}/>
        <UniversalLink anchor={'projects'} offset={-50} text={'Projects'}/>
        <UniversalLink anchor={'contacts'} offset={-70} text={'Contacts'}/>
    </div>
)
