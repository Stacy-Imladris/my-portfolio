import s from './Title.module.scss'

type Props = {
    text: string
}

export const Title = ({text}: Props) => <div className={s.title}><h2>{text}</h2></div>
