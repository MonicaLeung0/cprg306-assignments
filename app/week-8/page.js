"use client";
import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItemForm from "./new-item";
import MealIdeas from "./meal-ideas";



export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };
function handleItemSelect(item) {
  const cleanedName = item.name
    .split(",")[0]
    .replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF])/g,
      ""
    )
    .trim();

  setSelectedItemName(cleanedName);
}

    return (
         <div className="flex flex-col md:flex-row p-6 gap-8">
        {/* Left Side: Add item + List */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-6">
            Shopping List
          </h1>
          <NewItemForm onAddItem={handleAddItem} />
          <ItemList sourceItems={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right Side: Meal Ideas */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
  );
}