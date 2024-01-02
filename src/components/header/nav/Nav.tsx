import s from './Nav.module.scss'
import {UniversalLink} from 'common/components/universalLink/UniversalLink'

export const links = [
    {anchor: 'main', offset: -70, text: 'Main'},
    {anchor: 'skills', offset: -50, text: 'Skills'},
    {anchor: 'projects', offset: -50, text: 'Projects'},
    {anchor: 'contacts', offset: -70, text: 'Contacts'},
]

export const Nav = () => {
    const linksList = links.map(link => <UniversalLink {...link} key={link.text}/>)

    return <div className={s.nav}>{linksList}</div>
}
