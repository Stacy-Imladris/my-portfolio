import {Contacts, Footer, Freelance, Header, Main, Projects, Skills} from 'components'
import s from './App.module.scss'

export const App = () => (
    <div className={s.app}>
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Freelance/>
        <Contacts/>
        <Footer/>
    </div>
)