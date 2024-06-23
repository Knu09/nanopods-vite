import vector from "../assets/Vector 1.png";

const ButtonLink = ({ text }) => {
    return (
        <div>
            <a href="" className="flex flex-row gap-x-2 text-xs
            font-['Poppins'] h-35 px-6 py-4">SEE FEATURES
                <span className="flex items-center">
                    <img src={vector} alt="Link"/>
                </span></a>
        </div>
    );
};

export default ButtonLink;

