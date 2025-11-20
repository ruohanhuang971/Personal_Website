// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import SectionTransition from './components/SectionTransition';

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <div className="border border-white"></div>
            <Skills />
            <SectionTransition />
            <Projects />
        </>
    );
}

export default App;
