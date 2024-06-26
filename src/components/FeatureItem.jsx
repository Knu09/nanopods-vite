const FeatureItem = ({ product }) => {
    const { image, title, description } = product
    return (
        <div className='flex start items-center flex-col py-10 px-10 bg-[#EBEBEB] gap-y-3
        rounded-xl shadow-custom-inner-md max-md:min-h-[280px] min-h-300'>
            <div className="bg-primary-yellow p-3 rounded-lg">
                <img className="h-[25px] w-[25px]" src={image} alt={title} />
            </div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-darkParagraph">{description}</p>
        </div>
    );
};

export default FeatureItem;
