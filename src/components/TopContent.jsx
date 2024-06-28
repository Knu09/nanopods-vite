import Button from "./Button";
import introImage from "../assets/Intro Image.png"
import ButtonLink from "./ButtonLInk.jsx";


const TopContent = () => {
    return (
        <div className='flex flex-row justify-center items-center gap-x-10'>
            <div className="">
                <h1 className="font-extrabold text-5xl lg:text-7xl font-['Poppins'] flex flex-col">AirPods <span className="text-primary-yellow">Generation</span></h1>
                <p className="my-10 max-sm:my-5 text-md text-paragraph">Newly added features on the latest earbuds narrow the gap between the vanilla and the Pro model.</p>
                <div className="flex flex-col items-center sm:flex-row gap-2">
                    <Button text={'BUY NOW - $190.49'} />
                    <ButtonLink />
                </div>
            </div>
            <div className="hidden sm:block px-5 pt-5">
                <img className="aspect-square " src={introImage} alt="Intro Image" />
            </div>
        </div>
    );
};

export default TopContent;
