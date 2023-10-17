import s from './Button.module.scss'

type Props = {
    text: string
    url: string
}

export const Button = ({text, url}: Props) => <a href={url} className={s.btn} target='_blank'>{text}</a>