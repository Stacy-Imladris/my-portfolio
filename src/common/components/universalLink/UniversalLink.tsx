import {Link} from 'react-scroll'
import s from './UniversalLink.module.scss'

type Props = {
    anchor: string
    offset: number
    text: string
    onClick?: () => void
}

export const UniversalLink = ({anchor, offset, text, onClick}: Props) => (
    <Link activeClass={s.active} to={anchor} spy smooth offset={offset} duration={300} onClick={onClick}>
        {text}
    </Link>
)
