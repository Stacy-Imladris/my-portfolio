import s from './Button.module.scss'

type ButtonPropsType = {
    text: string
    url: string
}

export const Button = ({text, url}: ButtonPropsType) => (
    <a href={url} className={s.btn} target='_blank'>{text}</a>
)