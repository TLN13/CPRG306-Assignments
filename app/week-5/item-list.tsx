"use client";

import { useState } from "react";
import Item from "./item";
import itemsJson from "./items.json";

export type ItemType = {
  id: string;
  name: string;
  category: string;
  quantity: number;
};

export default function ItemList() {
  const [sortBy, setSortBy] = useState<"name" | "category" | "grouped">("name");

  const sortedItems: ItemType[] = [...itemsJson].sort((a, b) => {
    if (sortBy === "name") {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    }
    if (sortBy === "category") {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    }
    return 0;
});


  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {} as { [category: string]: ItemType[] });

  return (
    <div className="p-6 bg-[#bddfec] min-h-screen">
      <div className="flex gap-2 mb-6">
        <p className="font-semibold text-[#5A4D4D]">Sort by:</p>
        {["name", "category", "grouped"].map((type) => (
          <button
            key={type}
            onClick={() => setSortBy(type as "name" | "category" | "grouped")}
            className={`px-4 py-2 rounded font-medium transition-colors duration-200 ${
              sortBy === type
                ? "bg-[#5A4D4D] text-white"
                : "bg-[#eccabd] text-[#5A4D4D] hover:bg-[#E7D4C3]"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="font-bold capitalize text-[#5A4D4D] mb-2">{category}</h2>
                <ul className="space-y-3">
                  {groupedItems[category]
                    .sort((a, b) => {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;})
                    .map((item) => (
                      <Item key={item.id} item={item} />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="space-y-3">
          {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
}


// #bddfec
// #eccabd