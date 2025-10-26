"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ sourceItems }) {
  const [sortBy, setSortBy] = useState("name");

  let sortedItems = [];

  // Work on copies of items (not mutating props)
  if (sortBy === "name") {
    const itemsCopy = [...sourceItems].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedItems = [
      {
        CategoryName: null,
        Items: itemsCopy,
      },
    ];
  } else if (sortBy === "category") {
    const itemsCopy = [...sourceItems].sort((a, b) =>
      a.category.localeCompare(b.name)
    );

    const groupedItems = [];
    for (const item of itemsCopy) {
      const existingGroup = groupedItems.find(
        (group) => group.CategoryName === item.category
      );
      if (existingGroup) {
        existingGroup.Items.push(item);
      } else {
        groupedItems.push({
          CategoryName: item.category,
          Items: [item],
        });
      }
    }


    sortedItems = [...groupedItems].sort((a, b) =>
      a.CategoryName.localeCompare(b.CategoryName)
    ); ;
  }

  return (
    <div className="flex flex-col ml-4 gap-4 mb-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy("name")}
          style={{
            backgroundColor: sortBy === "name" ? "#383838" : "#5990f0",
            color: "white",
            marginRight: "10px",
            padding: "8px 16px",
            border: "1px solid gray",
            borderRadius: "5px",
          }}
        >
          Sort by Name
        </button>
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

      <ul className="ml-4">
        {sortedItems.map((group) =>
          group.CategoryName ? (
            <React.Fragment key={group.CategoryName}>
              <h2 className="text-3xl font-bold mt-6 mb-4">
                {group.CategoryName}
              </h2>
              {group.Items.map((item) => (
                <Item key={item.id} itemObj={item} />
              ))}
            </React.Fragment>
          ) : (
            group.Items.map((item) => (
              <Item key={item.id} itemObj={item} />
            ))
          )
        )}
      </ul>
    </div>
  );
}
