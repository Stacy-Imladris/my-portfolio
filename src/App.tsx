import {Header} from "./components/header/Header";
import {Main} from './components/main/Main';
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Freelance} from "./components/freelance/Freelance";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import s from './App.module.scss';

export const App = () => {
    return (
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
}