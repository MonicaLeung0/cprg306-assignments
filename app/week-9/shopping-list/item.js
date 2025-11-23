"use client";
import React from "react";

export default function Item({ itemObj, onSelect }) {
  return (
    <div
      onClick={() => onSelect(itemObj)}
      className="border-2 border-blue-600 rounded p-4 m-3 inline-block cursor-pointer hover:bg-blue-300 transition"
    >
      <div className="block sm:inline-block sm:ml-4">
        <h3 className="text-2xl font-semibold">{itemObj.name}</h3>
        <p>Quantity: {itemObj.quantity}</p>
      </div>
    </div>
  );
}
