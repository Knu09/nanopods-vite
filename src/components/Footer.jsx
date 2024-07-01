import img1 from '../assets/apple.png'

const Footer = () => {
    return (
        <div className="container max-w-full py-10 text-white bg-black">
            <div className="flex flex-row px-12 items-center justify-between mx-auto max-w-[1460px]">
                <div className='font-PPSupplyMono hover:text-[#00FFF8] transition-all ease-in-out delay-150'>
                    <a
                        target="_blank"
                        href="https://knu09.github.io/v2.christiandelatorre/"
                        className=''
                    >
                        <p>@ Copyright 2024</p>
                        <p>Made by Christian De la Torre</p>
                    </a>
                </div>
                <a
                    target="_blank"
                    href="https://www.apple.com/ph/airpods/"
                    className="flex items-center gap-x-3"
                >
                    <img src={img1} alt="Apple" />
                    <p>Philippines</p>
                </a>
            </div>
        </div>
    )
}

export default Footer
