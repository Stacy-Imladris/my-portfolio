import s from './Contacts.module.scss'
import axios from 'axios'
import {FormEvent, useRef} from 'react'
import {Container} from 'components/Container/Container';

export const Contacts = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const onSubmitSendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (nameRef && nameRef.current && nameRef.current.value &&
            emailRef && emailRef.current && emailRef.current.value
            && messageRef && messageRef.current && messageRef.current.value) {
            axios.post('https://nodejs-smtp-form.herokuapp.com/sendMessage', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value
            })
            nameRef.current.value = ''
            emailRef.current.value = ''
            messageRef.current.value = ''
            alert('Your message has been sent to my email. I will contact you as soon as possible. Have a nice day!')
        } else {
            alert('Please, complete all data fields.')
        }
    }

    return (
        <Container blockClassName={s.mainBlock}
                   containerClassName={s.contactContainer}
                   id={'contacts'}
                   title={'Contact'}>
            <form className={s.form} onSubmit={onSubmitSendMessage}>
                <input placeholder={'Name'} className={s.input} ref={nameRef}/>
                <input placeholder={'E-mail'} className={s.input} ref={emailRef}/>
                <textarea placeholder={'Your message'} className={s.area} ref={messageRef}/>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </Container>
    )
}