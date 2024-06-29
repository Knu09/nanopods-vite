const Button = ({ width, text, fontWeight, fontSize }) => {
   return (
      <button className={`font-['Poppins'] h-35 px-6 py-4 bg-primary-yellow text-black font-${fontWeight}
       rounded text-${fontSize} hover:bg-color-hover w-${width}`}>
         {text}
      </button>
   );
};

export default Button;
