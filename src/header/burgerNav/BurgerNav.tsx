import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'
import {useState} from 'react';

export const BurgerNav = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

    const openMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    const burgerNavItemsStyle = `${style.burgerNavItems} ${isOpenMenu ? style.isShow : ''}`

    return (
        <div className={style.burgerNav}>
            <div className={burgerNavItemsStyle}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true}
                      offset={-70} duration={300} onClick={openMenu}>
                    Main
                </Link>
                <Link activeClass={style.active} to="skills" spy={true} smooth={true}
                      offset={-50} duration={300} onClick={openMenu}>
                    Skills
                </Link>
                <Link activeClass={style.active} to="projects" spy={true} smooth={true}
                      offset={-50} duration={300} onClick={openMenu}>
                    Projects
                </Link>
                <Link activeClass={style.active} to="contact" spy={true} smooth={true}
                      offset={-70} duration={300} onClick={openMenu}>
                    Contacts
                </Link>
            </div>
            <div className={style.burgerButton} onClick={openMenu}>
                <div className={isOpenMenu ? style.open : ''}/>
                <div className={isOpenMenu ? style.open : ''}/>
                <div className={isOpenMenu ? style.open : ''}/>
            </div>
        </div>
    );
}
