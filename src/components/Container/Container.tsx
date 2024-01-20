import {Fade} from 'react-awesome-reveal';
import {PropsWithChildren} from 'react';
import {Title} from 'common/components/title/Title';

type Props = {
    blockClassName: string
    containerClassName: string
    id?: string
    title: string
}

export const Container = (props: PropsWithChildren<Props>) => {
    const {blockClassName, containerClassName, id, title, children} = props

    return (
        <div className={blockClassName} id={id}>
            <Fade delay={150}>
                <Title text={title}/>
                <div className={containerClassName}>{children}</div>
            </Fade>
        </div>
    )
}
