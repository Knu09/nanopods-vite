const FeatureItem = ({ product }) => {
    const { image, title, description } = product
    return (
        <div className='flex start items-center flex-col pt-10 pb-20 px-10 bg-[#F5F5F5] gap-y-3
        rounded-xl shadow-[5px_6px_12px_0_rgba(0,0,0,.4)]'>
            <div className="bg-primary-yellow p-3 rounded-lg">
                <img className="h-[25px] w-[25px]" src={image} alt={title}/>
            </div>
            <h2 className="font-bold text-lg">{title}</h2>
            <p className="text-darkParagraph">{description}</p>
        </div>
    );
};

export default FeatureItem;
