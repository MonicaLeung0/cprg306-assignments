"use client";
import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "../week-7/item-list";
import NewItemForm from "./new-item";



export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-6">
                Shopping List
            </h1>
            <NewItemForm onAddItem={handleAddItem} />
            <ItemList sourceItems={items} />

         
        </div>
       
    );
}