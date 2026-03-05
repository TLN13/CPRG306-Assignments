"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the MealIdeas component
import itemsData from "./items.json";

export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export default function Page() {
  const [items, setItems] = useState<Item[]>(itemsData);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const handleAddItem = (newItem: { name: string; quantity: number; category: string }) => {
    const itemWithId: Item = {
      ...newItem,
      id: crypto.randomUUID(),
    };

    setItems((current) => [...current, itemWithId]);
  };

  const handleItemSelect = (item: Item) => {
    console.log("Item selected:", item); 
    const cleanedName = item.name
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '')
      .split(",")[0]
      .trim();
    console.log("Selected Item: ", cleanedName);
    console.log("Cleaned Item Name:", cleanedName);
    setSelectedItemName(cleanedName); 
  };

  return (
    <main className="min-h-screen p-6 bg-[#E9E4E0]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6E7575]">
        Shopping List
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left side: New Item form */}
        <div className="md:w-1/3">
          <div className="p-4 rounded shadow-md bg-[#172A39]">
            <NewItem onAddItem={handleAddItem} />
          </div>
        </div>

        {/* Right side: Item list and Meal ideas */}
        <div className="md:w-2/3">
          <div className="p-4 rounded shadow-md bg-[#FC563C]">
            {/* Item List component */}
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          {/* Meal Ideas component */}
          {selectedItemName && (
            <div className="mt-6 p-4 rounded shadow-md bg-[#E9E4E0]">
              <MealIdeas ingredient={selectedItemName} /> {/* Pass the selected item name */}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}