import s from './Contacts.module.scss';
import {Title} from '../../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';

export const Contacts = () => (
    <div className={s.mainBlock} id={'contacts'}>
        <Fade delay={150}>
            <div className={s.contactContainer}>
                <Title text={'Contact'}/>
                <form className={s.form}>
                    <input placeholder={'Name'} className={s.input}/>
                    <input placeholder={'E-mail'} className={s.input}/>
                    <textarea placeholder={'Your message'} className={s.area}/>
                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </Fade>
    </div>
)