import style from './Contact.module.scss';
import {Title} from '../common/components/title/Title';

export const Contact = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.contactContainer}>
                <Title text={'Contact'}/>
                <form className={style.form}>
                    <input placeholder={'Name'} className={style.input}/>
                    <input placeholder={'E-mail'} className={style.input}/>
                    <textarea placeholder={'Your message'} className={style.area}/>
                    <button type='submit'>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}