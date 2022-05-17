import s from './Contacts.module.scss';
import {Title} from '../../common/components/title/Title';
import {Fade} from 'react-awesome-reveal';
import axios from 'axios';
import {useRef} from 'react';

export const Contacts = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className={s.mainBlock} id={'contacts'}>
            <Fade delay={150}>
                <div className={s.contactContainer}>
                    <Title text={'Contact'}/>
                    <form className={s.form} onSubmit={(e) => {
                        e.preventDefault()
                        axios.post('https://form-for-portfolio.herokuapp.com/sendMessage', {
                            name: nameRef.current?.value,
                            email: emailRef.current?.value,
                            message: messageRef.current?.value
                        })
                    }}>
                        <input placeholder={'Name'} className={s.input} ref={nameRef}/>
                        <input placeholder={'E-mail'} className={s.input} ref={emailRef}/>
                        <textarea placeholder={'Your message'} className={s.area} ref={messageRef}/>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </Fade>
        </div>
    )
}