"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export default function Page() {
  const [items, setItems] = useState<Item[]>(itemsData);

  const handleAddItem = (newItem: {
    name: string;
    quantity: number;
    category: string;
  }) => {
    const itemWithId: Item = {
      ...newItem,
      id: crypto.randomUUID(),
    };

    setItems((current) => [...current, itemWithId]);
  };

  return (
    <main className="min-h-screen p-6 bg-[#E9E4E0]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6E7575]">
        Shopping List
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="p-4 rounded shadow-md bg-[#172A39]">
            <NewItem onAddItem={handleAddItem} />
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="p-4 rounded shadow-md bg-[#FC563C]">
            <ItemList items={items} />
          </div>
        </div>
      </div>
    </main>
  );
}