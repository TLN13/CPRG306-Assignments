"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";


export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push("/week-8");
    }
  }, [user]);

  const [items, setItems] = useState<Item[]>(itemsData);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  if (!user) return null;


  const handleAddItem = (newItem: { name: string; quantity: number; category: string }) => {
    const itemWithId: Item = {
      ...newItem,
      id: crypto.randomUUID(),
    };

    setItems((current) => [...current, itemWithId]);
  };


  const handleItemSelect = (item: Item) => {
  console.log("========== ITEM SELECTED ==========");
  console.log("Original item:", item);
  console.log("Original name:", item.name);
  
  const withoutEmojis = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
  console.log("Step 1 - After emoji removal:", withoutEmojis);

  const afterComma = withoutEmojis.split(',')[0];
  console.log("Step 2 - After comma split:", afterComma);

  const trimmed = afterComma.trim();
  console.log("Step 3 - After trim:", trimmed);
  

  const cleanedName = trimmed.split(' ')[0];
  console.log("Step 4 - After taking first word:", cleanedName);
  
  const finalIngredient = cleanedName.toLowerCase();
  console.log("Step 5 - Final ingredient:", finalIngredient);
  
  console.log("Setting selectedItemName to:", finalIngredient);
  console.log("===================================");
  
  setSelectedItemName(finalIngredient);
};


  return (
    <main className="min-h-screen p-6 bg-[#E9E4E0]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6E7575]">
        Shopping List
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left side: New Item form + Meal Ideas */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="p-4 rounded shadow-md bg-[#6E7575]">
            <NewItem onAddItem={handleAddItem} />
          </div>

          {/* Meal Ideas component under New Item */}
          {selectedItemName && (
            <div className="p-4 rounded shadow-md bg-[#6E7575]">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>

        {/* Right side: Item list */}
        <div className="md:w-2/3">
          <div className="p-4 rounded shadow-md bg-[#6E7575]">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
      </div>
    </main>
  );
}