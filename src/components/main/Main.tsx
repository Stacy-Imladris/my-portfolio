import s from './Main.module.scss'
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'
import {Parallax} from 'react-parallax'
import background from 'assets/images/backgroung.jpg'

export const Main = () => (
    <Parallax bgImage={background} strength={550}
              bgImageStyle={{width: '100vw', height: '100vh', objectFit: 'cover', opacity: .3}}>
        <div className={s.mainBlock} id={'main'}>
            <Fade className={s.fade} delay={150}>
                <div className={s.mainContainer}>
                    <Fade direction={'left'}>
                        <div className={s.text}>
                            <span>Hi There</span>
                            <span>I am Anastasiya <span>Belikova</span></span>
                            <ReactTypingEffect text="A Front-end Developer." speed={100}/>
                        </div>
                    </Fade>
                    <Fade direction={'right'}>
                        <Tilt>
                            <div className={s.photo}>
                                <div className={s.image}/>
                            </div>
                        </Tilt>
                    </Fade>
                </div>
            </Fade>
        </div>
    </Parallax>
)