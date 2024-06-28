import airpods1 from "../assets/airpods-3rd-generation.png";
import Button from "./Button";
export const Product = () => {
   return (
      <div className="container max-w-[1500px] mx-auto pt-12 px-5">
         <div className="flex flex-col bg-[#f5f5f5] text-primary-black py-8 px-10 max-sm:px-5 rounded-lg shadow-[4px_5px_6px_0_rgba(0,0,0,.4)]
            gap-y-5">
            {/*  PRODUCT HEADER  */}
            <div className="">
               <h2 className="uppercase font-poppins font-semibold text-upperHeader">
                  Choose your NanoPods
               </h2>
               <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                  Which AirPods do you want?
               </h1>
            </div>
            {/* BUYING SECTION */}
            <div className="flex gap-5">
               <div className="flex grow w-full py-10 px-10 shadow-inner shadow-custom-inner">
                  <img
                     src={airpods1}
                     alt="AirPods 3rd Generation"
                     className="aspect-square"
                  />
               </div>
               <div className="flex flex-col grow w-full gap-5">
                  <div className="flex justify-between">
                     <div>
                        <h1 className="font-poppins font-bold max-sm:text-3xl text-5xl">
                           AirPods
                        </h1>
                        <h2 className="uppercase font-poppins font-semibold text-upperHeader">
                           3rd Generation
                        </h2>
                     </div>
                     <div className="flex font-medium gap-x-1">
                        <span className="align-top text-2xl align-text-top">₱</span>
                        <h3 className="text-4xl font-poppins">8490</h3>
                     </div>
                  </div>

                  <ul role="list" className="list-disc pl-5">
                     <li>Personalized Spatial Audio</li>
                     <li>Sweat and water resistant</li>
                     <li>Lightning Charhing Case</li>
                     <li>Up to 6 hours of listening time</li>
                     <li>MagSafe Charging Case</li>
                     <li>Active Noise</li>
                     <li>Cancellation and Transparency mode</li>
                     <li>Conversation Awareness</li>
                  </ul>
                  <div className="flex flex-row gap-x-3 items-center">
                     <span className="font-medium">QTY: </span>
                     <Button text="-" />
                     <input className="w-20 bg-[#EBEBEB] h-full shadow-inner shadow-[inset_0_0_5px_0_rgba(0,0,0,.4)] 
                     rounded-md border-none outline-none text-center appearance-none" type="number" placeholder="00" min="1" max="10" />
                     <Button text="+" />
                  </div>
               </div>
            </div>
            {/* OTHER PRODUCTS */}
            <div></div>
         </div>
      </div>
   );
};
