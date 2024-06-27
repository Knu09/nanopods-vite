import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import {GuideSection} from "./components/GuideSection.jsx";

function App() {
    return (
        <>
            <Navbar />
            <div className="App max-sm:text-center bg-[#ddd] font-paragraph">
                <Hero />
                <Features />
                <GuideSection />

            </div>
        </>
    )
}

export default App
