import s from './Button.module.scss'

type ButtonPropsType = {
    text: string
    url: string
}

export const Button = ({text, url}: ButtonPropsType) => {
    return <a href={url} className={s.btn}>{text}</a>
}