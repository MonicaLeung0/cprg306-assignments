"use client";

import { useState } from "react";

export default function NewItem() 
{
    const [quantity, setQuantity] = useState(1);

    const increment = () => 
        {
            if(quantity < 20)
                {
                    setQuantity(quantity + 1);
                }
            
        };
    const decrement = () => 
        {
            if(quantity > 1)
                {
                    setQuantity(quantity - 1);
                }
            
        };

    let additionButtonStyle = "bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white rounded pl-4 pr-4 cursor-pointer mr-2 transition-colors";
    let subtractionButtonStyle = "bg-blue-700 hover:bg-blue-600 active:bg-blue-800 text-white rounded pl-4 pr-4 cursor-pointer  mr-2 transition-colors";
        if (quantity >= 20){
            additionButtonStyle = "text-white rounded pl-4 pr-4 mr-2 bg-gray-500 cursor-not-allowed";
        }
        if (quantity <= 1){
            subtractionButtonStyle = "text-white rounded pl-4 pr-4 mr-2 bg-gray-500 cursor-not-allowed";
        }

    return ( 
        <main>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white p-6 mt-4 rounded w-80">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl text-black ml-5 mr-20">{quantity}</span>
                        <button 
                        onClick={decrement} 
                        className={subtractionButtonStyle}
                        >
                            -
                        </button>
                        <button 
                        onClick={increment} 
                        className={additionButtonStyle}
                        >
                            +
                        </button>
                    </div> 
                </div>
            
        </main>
     );
}
