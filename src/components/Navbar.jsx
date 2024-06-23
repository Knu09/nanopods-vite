import logo from '../assets/logo.png';
import Button from "./Button";
const NavBar = () => {
    return (
        <div className="border-inherit mx-10">
            <div className="h-24 flex flex-row items-center justify-between">
                <a href='/nanopods-vite/index.html' className="flex items-center gap-x-3">
                    <img className="bg-cover h-6 w-6" src={logo} alt=""/>
                    <h2 className="text-white text-base font-['Barlow'] tracking-[.25em] font-medium">NANOPODS</h2>
                </a>
                <ul className="gap-x-6 text-sm font-['Poppins'] hidden sm:flex">
                    <li><a href="#">FEATURES</a></li>
                    <li><a href="#">HOW TO USE</a></li>
                    <li><a href="#">PRODUCT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <Button text={'SignUp'} />
            </div>
        </div>
    );
};

export default NavBar;
