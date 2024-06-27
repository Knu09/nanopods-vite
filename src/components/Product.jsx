import airpods1 from '../assets/airpods-3rd-generation.png'
export const Product = () => {
    return (
        <div className="container max-w-[1500px] mx-auto pt-12 px-5">
            <div className="bg-[#f5f5f5] py-8 px-10 max-sm:px-5 rounded-lg shadow-[4px_5px_6px_0_rgba(0,0,0,.4)]">
                {/*  PRODUCT HEADER  */}
                <div className="text-primary-black">
                    <h2 className="uppercase font-poppins font-semibold text-upperHeader">Choose your NanoPods</h2>
                    <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">Which AirPods do you want?</h1>
                </div>
                {/* BUYING SECTION */}
                <div className="flex gap-5">
                    <div className="flex grow w-full py-10 px-10 shadow-inner shadow-custom-inner" >
                        <img src={airpods1} alt="AirPods 3rd Generation" className="aspect-square"/>
                    </div>
                    <div className="flex flex-col grow w-full">
                        <div className="flex justify-between">
                            <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">AirPods</h1>
                            <h3>8490</h3>
                        </div>
                        <h2 className="uppercase font-poppins font-semibold text-upperHeader">3rd Generation</h2>
                    </div>
                </div>
                {/* OTHER PRODUCTS */}
                <div></div>
            </div>
        </div>
    )
}