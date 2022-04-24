import {Link} from 'react-scroll'
import s from './UniversalLink.module.scss'

type LinkPropsType = {
    anchor: string
    offset: number
    text: string
}

export const UniversalLink = ({anchor, offset, text}: LinkPropsType) => (
    <Link activeClass={s.active} to={anchor} spy={true} smooth={true} offset={offset}
          duration={300}>
        {text}
    </Link>
)
