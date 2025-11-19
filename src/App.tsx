// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';

function App() {
    return (
        <>
            <NavBar />
            <Banner />
            <Skills />
            <section id="about" className="h-[200vh]">
                <p></p>
            </section>
        </>
    );
}

export default App;
