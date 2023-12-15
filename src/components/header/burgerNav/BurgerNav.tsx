import s from './BurgerNav.module.scss'
import {useState} from 'react'
import {UniversalLink} from 'common/components/universalLink/UniversalLink'

export const BurgerNav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const openMenu = () => setIsOpenMenu(!isOpenMenu)

    const hideMenu = () => setIsOpenMenu(false)

    const burgerNavItemsStyle = `${s.burgerNavItems} ${isOpenMenu ? s.isShow : ''}`

    return (
        <div className={s.burgerNav}>
            <div className={burgerNavItemsStyle}>
                <UniversalLink anchor={'main'} offset={-70} text={'Main'} onClick={hideMenu}/>
                <UniversalLink anchor={'skills'} offset={-50} text={'Skills'} onClick={hideMenu}/>
                <UniversalLink anchor={'projects'} offset={-50} text={'Projects'} onClick={hideMenu}/>
                <UniversalLink anchor={'contacts'} offset={-70} text={'Contacts'} onClick={hideMenu}/>
            </div>
            <div className={s.burgerButton} onClick={openMenu}>
                <div className={isOpenMenu ? s.open : ''}/>
                <div className={isOpenMenu ? s.open : ''}/>
                <div className={isOpenMenu ? s.open : ''}/>
            </div>
        </div>
    );
}
