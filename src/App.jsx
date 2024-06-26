import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";


function App() {
    return (
        <>
            <Navbar />
            <div className="App max-sm:text-center bg-[#ddd] font-paragraph">
                <Hero />
                <Features />
            </div>
        </>
    )
}

export default App
