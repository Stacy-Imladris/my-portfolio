import s from './Button.module.scss'

type ButtonPropsType = {
    text: string
}

export const Button = ({text}: ButtonPropsType) => {
    return <a href={''} className={s.button}>{text}</a>
}