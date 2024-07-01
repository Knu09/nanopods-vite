import FeatureItem from "./FeatureItem.jsx";
import { FEATURES } from "../data/features.js"
const Features = () => {
    return (
        <div className="container max-w-[1150px] mx-auto my-5 px-5">
            <div className=" pt-12 pb-5 px-5 sm:px-10 rounded-lg shadow-[4px_5px_6px_0_rgba(0,0,0,.4)] bg-[#F5F5F5]">
                {/*  FEATURE HEADER  */}
                <div className="text-primary-black">
                    <h2 className="uppercase font-poppins font-semibold text-upperHeader">Revolutionary Features</h2>
                    <h1 className="font-poppins font-bold text-3xl sm:text-5xl">Features</h1>
                </div>
                {/*  FEATURE ITEMS  */}
                <div className='mb-10 mt-5 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'>
                    {
                        FEATURES.map((product, index) => (
                            <FeatureItem key={index} product={product} />
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default Features;
