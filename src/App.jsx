import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import translations from "./data/translations";

export default function App() {
    const [language, setLanguage] = useState("en");
    const t = translations[language];

    return (
        <div className="bg-[#0B0F19] text-white">
            <Navbar language={language} setLanguage={setLanguage} />
            <Hero t={t} />
            <About t={t} />
            <Skills />
            <Experience t={t}/>
            <Projects t={t} />
            <Contact t={t} />
        </div>
    );
}