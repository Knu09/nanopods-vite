const ShopButton = ({ text, bgColor, border, bgHover }) => {
   return (
      <button className={`font-['Poppins'] uppercase h-35 px-6 py-4 bg-${bgColor} text-black font-medium
       rounded text-md hover:bg-${bgHover} w-full ${border}`}>{text}</button>
   )
}

export default ShopButton