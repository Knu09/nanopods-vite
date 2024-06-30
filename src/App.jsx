import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Features from './components/Features.jsx'
import { GuideSection } from './components/GuideSection.jsx'
import { Product } from './components/Product.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {
    return (
        <>
            <Navbar />
            <div className="App max-sm:text-center bg-[#ddd] font-paragraph">
                <Hero />
                <Features />
                <GuideSection />
                <Product />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default App
