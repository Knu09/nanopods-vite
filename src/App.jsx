import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Features from "./components/Features.jsx";
import { GuideSection } from "./components/GuideSection.jsx";
import { Product } from "./components/Product.jsx";
function App() {
  return (
    <>
      <Navbar />
      <div className="App max-sm:text-center bg-[#ddd] font-paragraph">
        <Hero />
        <Features />
        <GuideSection />
        <Product />
      </div>
      <li></li>
      <li></li>
    </>
  );
}

export default App;
