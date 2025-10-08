"use client";
import { useState } from "react";
export default function NewItemForm() 
{
    const [quantity, setQuantity] = useState(1);
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) =>
        {
            event.preventDefault();
            let ItemObj={
                name : itemName,
                quantity : quantity,
                category : category
            }

            alert(`Item ${ItemObj.name} is created with ${ItemObj.quantity} in ${ItemObj.category}. `);
            
            setQuantity(1);
            setItemName("");
            setCategory("produce");
        }


    const handleItemNameChange = (event) => {
        setItemName(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

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

        let inputStyle = "bg-white  px-4 py-2 rounded focus:bg-amber-50";


    return ( 
        <main className="flex justify-center w-full">
            <form className="flex justify-center text-black flex-col gap-4 bg-blue-300 p-6 rounded-2xl" onSubmit={handleSubmit}>

                <input className={inputStyle} value={itemName} type="text" onChange={handleItemNameChange}/>

                <div className="flex justify-between gap-4">
                    <div className="flex items-center justify-center   bg-white rounded ">
                        <span className="text-2xl text-black px-4 py-2 mr-10">{quantity}</span>
                        <button 
                        type="button"
                        onClick={decrement} 
                        className={subtractionButtonStyle}
                        >
                            -
                        </button>
                        <button 
                        type="button"
                        onClick={increment} 
                        className={additionButtonStyle}
                        >
                            +
                        </button>
                    </div> 
                   
                    <select className={inputStyle} onChange={handleCategoryChange} value={category}>
                        <option value="produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen-Foods">Frozen Foods</option>
                        <option value="Canned-Goods">Canned Goods</option>
                        <option value="Dry-Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>

                    </select>
    
                </div>

                

                <div className="text-center">
                    <button className="bg-green-700 text-white rounded cursor-pointer hover:bg-green-600 active:bg-amber-600 transition-colors px-4 py-2" type="submit">Submit Item</button>
                </div>
            </form>

        </main>
        
     );
}
