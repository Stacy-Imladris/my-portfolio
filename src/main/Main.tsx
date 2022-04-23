import style from './Main.module.scss';

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.mainContainer}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <span>I am Anastasiya <span>Belikova</span></span>
                    <h1>A Front-end Developer.</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>
            </div>
        </div>
    );
}