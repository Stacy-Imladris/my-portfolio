import s from './BurgerNav.module.scss'
import {useState} from 'react'
import {UniversalLink} from 'common/components/universalLink/UniversalLink'
import {links} from 'components/header/nav/Nav';

export const BurgerNav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const openMenu = () => setIsOpenMenu(!isOpenMenu)

    const hideMenu = () => setIsOpenMenu(false)

    const burgerNavItemsStyle = `${s.burgerNavItems} ${isOpenMenu ? s.isShow : ''}`

    const linksList = links.map(link => <UniversalLink {...link} onClick={hideMenu} key={link.text}/>)

    return (
        <div className={s.burgerNav}>
            <div className={burgerNavItemsStyle}>{linksList}</div>
            <div className={s.burgerButton} onClick={openMenu}>
                <div className={isOpenMenu ? s.open : ''}/>
                <div className={isOpenMenu ? s.open : ''}/>
                <div className={isOpenMenu ? s.open : ''}/>
            </div>
        </div>
    );
}
