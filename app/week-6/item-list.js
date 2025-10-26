"use client";
import React, { useState } from "react";
import Item from "./item.js"; 
import itemsData from "./items.json"; 

function ItemList() {
  // Initialize state variable for sorting
  let [sortBy, setSortBy] = useState("name");

  let sortedItems = [];
  const sourceItemList =  [...itemsData];

  if(sortBy === "name")
    {
     sortedItems = [{
      CategoryName: null,
      Items: [...sourceItemList]
     }];
      sortedItems[0].Items.sort((a, b) => {
        let nameA = a.name.toUpperCase(); 
        let nameB = b.name.toUpperCase(); 
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
  else if(sortBy === "category")
    {
      const nameSortList = [...sourceItemList].sort((a, b) => {
        let categoryA = a.category.toUpperCase(); 
        let categoryB = b.category.toUpperCase(); 
        if (categoryA < categoryB) return -1;
        if (categoryA > categoryB) return 1;
        return 0;
      });
      
      const result = [];
      for(let index = 0; index < nameSortList.length; index++)
      {
        const item = nameSortList[index];
        const existedCategory = result.find(i => i.CategoryName === item.category);
        if(existedCategory)
        {
          existedCategory.Items.push(item);
        }
        else{
          result.push({
            CategoryName: item.category,
            Items: [item]
          });
        }
      }

      sortedItems = result;
    }




  return (
    <div style={{ flexDirection: "column",flex: 1, gap: "20px", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
      <div className="sort-buttons" >
        {/* Sort by Name Button */}
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "#383838" : "#5990f0",
            color: "white",
            marginRight: "10px",
            padding: "8px 16px",
            border: "1px solid gray",
            borderRadius: "5px",
            transition: "background-color 0.2s ease",
          }}
        >
          Sort by Name
        </button>

        {/* Sort by Category Button */}
        <button
          onClick={() => setSortBy("category")}
          style={{
            backgroundColor: sortBy === "category" ? "#383838" : "#5b59f0",
            color: "white",
            padding: "8px 16px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        >
          Sort by Category
        </button>
      </div>

      {/* Render Items */}
      <ul className="item-list ">
        {sortedItems.map((item) => (
          item.CategoryName ? (
            <React.Fragment key={item.CategoryName}>
              <h2 className="text-3xl font-bold mt-6 mb-4">{item.CategoryName}</h2>
              <div className="">
              {item.Items.map( (subItem) => (
              <Item key={subItem.id} itemObj = {subItem}/>
            ))}
              </div>
             
            </React.Fragment>
          ):(
            item.Items.map((subItem) => (
              <Item key={subItem.id} itemObj = {subItem}/>
            ))
          )
        )
      )}
      </ul>
    </div>
  );
}

export default ItemList;
