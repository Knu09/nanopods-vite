import FeatureItem from "./FeatureItem.jsx";
import { FEATURES } from "../data/features.js"
const Features = () => {
    return (
        <div className="container max-w-[1000px] mx-auto pt-12 px-5">
            {/*  FEATURE HEADER  */}
            <div className="text-primary-black">
                <h2 className="uppercase font-poppins font-semibold text-upperHeader">Revolutionary Features</h2>
                <h1 className="font-poppins font-bold text-5xl">Features</h1>
            </div>
            {/*  FEATURE ITEMS  */}
            <div className='mb-10 mt-5 gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center'>
                {
                    FEATURES.map((product, index) => (
                        <FeatureItem key={index} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default Features;
