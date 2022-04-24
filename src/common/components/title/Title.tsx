import s from './Title.module.scss';

type TitlePropsType = {
    text: string
}

export const Title = ({text}: TitlePropsType) => (
    <div className={s.title}><h2>{text}</h2></div>
)
