import style from './Contacts.module.scss';
import {Title} from '../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => {
    return (
        <div className={style.mainBlock} id={'contact'}>
            <Fade delay={150}>
                <div className={style.contactContainer}>
                    <Title text={'Contact'}/>
                    <form className={style.form}>
                        <input placeholder={'Name'} className={style.input}/>
                        <input placeholder={'E-mail'} className={style.input}/>
                        <textarea placeholder={'Your message'} className={style.area}/>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </Fade>
        </div>
    );
}