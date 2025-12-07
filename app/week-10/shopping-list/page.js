"use client";
import { useState, useEffect } from "react";
import ItemList from "./item-list";

import NewItemForm from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context"; 
import Link from "next/link"; 

import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";


export default function Page() {

  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

//Load items for the logged in user
  async function loadItems() {
    const userItems = await getItems(user.uid);
    setItems(userItems);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);


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
  const handleAddItem = async(newItem) => {
    const newId = await addItem(user.uid, newItem);

    const itemWithId = { id: newId, ...newItem };
    setItems((prevItems) => [...prevItems, itemWithId]);
  };

  const handleItemDelete= async(targetItem) =>{
    await deleteItem(user.uid, targetItem.id);
    loadItems();
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
            href="/week-10/profile"
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
          <ItemList sourceItems={items} onItemSelect={handleItemSelect} onItemDelete={handleItemDelete}  />
        </div>

        {/* Right Side: Meal Ideas */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>

        
      </div>
  );
}