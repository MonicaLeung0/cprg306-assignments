"use client";
import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItemForm from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context"; 
import Link from "next/link"; 




export default function Page() {

  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");



   // If not logged in, then block page
  if (!user) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p>You must be logged in to view this page.</p>
      </main>
    );
  }

  //protected content below
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
            
        {/* profile link */}
        <div className="absolute top-4 right-4 text-2xl">
          <Link
            href="/week-9/profile"
            className="underline text-cyan-400 hover:text-cyan-600"
          >
            View Profile
          </Link>
        </div>

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