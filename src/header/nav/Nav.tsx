import style from './Nav.module.scss';
import {Link} from 'react-scroll'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active} to="main" spy={true} smooth={true} offset={-70} duration={300}>
                Main
            </Link>
            <Link activeClass={style.active} to="skills" spy={true} smooth={true} offset={-50} duration={300}>
                Skills
            </Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true} offset={-50} duration={300}>
                Projects
            </Link>
            <Link activeClass={style.active} to="contact" spy={true} smooth={true} offset={-70} duration={300}>
                Contacts
            </Link>
        </div>
    );
}
