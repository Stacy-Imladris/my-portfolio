import {Header} from "./header/Header";
import {Main} from './main/Main';
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Freelance} from "./freelance/Freelance";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";
import s from './App.module.scss';

function App() {
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
    );
}

export default App;
