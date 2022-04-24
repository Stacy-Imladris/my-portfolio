import style from './Main.module.scss';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {Parallax} from 'react-parallax';
import background from '../assets/images/5.jpg'

export const Main = () => {
    return (
        <Parallax
            bgImage={background}
            strength={550}
            bgImageStyle={{width: "100vw", height: "100vh", objectFit: "cover", opacity: .3}}
        >
            <div className={style.mainBlock} id={'main'}>
                <Fade className={style.fade} delay={150}>
                    <div className={style.mainContainer}>
                        <Fade direction={'left'}>
                            <div className={style.text}>
                                <span>Hi There</span>
                                <span>I am Anastasiya <span>Belikova</span></span>
                                <ReactTypingEffect text="A Front-end Developer." speed={100}/>
                            </div>
                        </Fade>
                        <Fade direction={'right'}>
                            <Tilt>
                                <div className={style.photo}>
                                    <div className={style.image}/>
                                </div>
                            </Tilt>
                        </Fade>
                    </div>

                </Fade>
            </div>
        </Parallax>
    );
}