import {Link} from 'react-scroll'
import s from './UniversalLink.module.scss'

type LinkPropsType = {
    anchor: string
    offset: number
    text: string
    onClickHandle?: () => void
}

export const UniversalLink = ({anchor, offset, text, onClickHandle}: LinkPropsType) => (
    <Link activeClass={s.active} to={anchor} spy={true} smooth={true} offset={offset}
          duration={300} onClick={onClickHandle}>
        {text}
    </Link>
)
