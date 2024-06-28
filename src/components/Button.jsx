const Button = ({ text }) => {
   const sample = "wda";
   return (
      <div>
         <button className="font-['Poppins'] h-35 px-6 py-4 bg-primary-yellow text-black font-medium rounded text-xs hover:bg-color-hover">
            {text}
         </button>
      </div>
   );
};

export default Button;
