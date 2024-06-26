import FeatureItem from "./FeatureItem.jsx";
import { FEATURES } from "../data/features.js"
const Features = () => {
    return (
        <div className="container max-w-[1000px] mx-auto py-20 px-5">
            {/*  FEATURE HEADER  */}
            <div>
                <h2 className="uppercase text-primary-black font-poppins font-semibold">Revolutionary Features</h2>
                <h1 className="font-poppins font-bold text-4xl">Features</h1>
            </div>
            {/*  FEATURE ITEMS  */}
            <div className='mb-10 mt-5 gap-10 grid grid-cols-1 sm:grid-cols-3 text-center'>
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
