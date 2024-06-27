import logo from '../assets/logo.png';
import Button from "./Button";
import {useState} from "react";
import {useEffect} from "react";

const NavBar = () => {
    const links = [
        {name: 'FEATURES', link: '/'},
        {name: 'HOW TO USE', link: '/'},
        {name: 'PRODUCT', link: '/'},
        {name: 'CONTACT', link: '/'},
    ]

    const [open, setOpen] = useState(false);
    useEffect(() => {
        open ? document.documentElement.style.overflowY = 'hidden' :
            document.documentElement.style.overflowY = 'auto';
    }, [open]);
    return (
        <div className="fixed bg-black w-full top-0 text-white">
            <div className="relative h-24 mx-10 flex flex-row items-center justify-between">
                <a href='/nanopods-vite/index.html' className="flex items-center gap-x-3">
                    <img className="bg-cover h-6 w-6" src={logo} alt=""/>
                    <h2 className="text-white text-base font-['Barlow'] tracking-[.25em] font-medium">NANOPODS</h2>
                </a>
                <div className="flex md:gap-x-5">
                    <ul className={`max-md:fixed gap-x-6 text-sm font-poppins flex items-center
                        max-md:bg-[#1A1A1A] max-md:top-0 max-md:min-h-[100vh] max-md:min-w-[320px] max-md:flex-col
                        max-md:justify-center max-md:gap-y-10 transition-all duration-200 ease-in-out`}
                        style={{right: open ? '0' : '-100%'}}>
                        {
                            links.map((link) => (
                                <li key={link.name}><a href={link.link}>{link.name}</a></li>
                            ))
                        }
                        <div className="md:flex">
                            <Button text={'SignUp'}/>
                        </div>
                    </ul>
                    <div className="absolute right-0 top-[40px] w-[20px] h-[15px] md:hidden cursor-pointer"
                         onClick={() => setOpen(!open)}>
                            <span className="absolute before:content-[''] w-[20px] h-[2px] bg-white
                            translate-y-[-50%] translate-x-[-50%] top-0"></span>
                        <span className="absolute before:content-[''] w-[20px] h-[2px] bg-white
                            translate-y-[-50%] translate-x-[-50%] top-[50%]"></span>
                        <span className="absolute before:content-[''] w-[20px] h-[2px] bg-white
                            translate-y-[-50%] translate-x-[-50%] top-[100%]"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
