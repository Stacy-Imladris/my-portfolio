import s from './Header.module.scss'
import {Nav} from './nav/Nav'
import {BurgerNav} from './burgerNav/BurgerNav'

export const Header = () => (
    <div className={s.header}>
        <Nav/>
        <BurgerNav/>
    </div>
)
