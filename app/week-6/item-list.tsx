"use client";

import { useState } from "react";
import Item from "./item";

export type ItemType = {
  id: string;
  name: string;
  category: string;
  quantity: number;
};

interface Items {
  items: ItemType[];
}

export default function ItemList({ items }: Items) {
  const [sortBy, setSortBy] = useState<"name" | "category" | "grouped">("name");

  const sortedItems: ItemType[] = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = sortedItems.reduce((groups, item) => {
    if (!groups[item.category]) groups[item.category] = [];
    groups[item.category].push(item);
    return groups;
  }, {} as { [category: string]: ItemType[] });

  return (
    <div className="p-6 rounded shadow-md bg-[#E9E4E0] min-h-screen text-[#6E7575]">
      {/* Sort Buttons */}
      <div className="flex gap-2 mb-6">
        <p className="font-semibold text-[#6E7575]">Sort by:</p>

        {["name", "category", "grouped"].map((type) => (
          <button
            key={type}
            onClick={() => setSortBy(type as "name" | "category" | "grouped")}
            className={`px-4 py-2 rounded font-medium transition-colors duration-200 ${
              sortBy === type
                ? "bg-[#172A39] text-[#E9E4E0]"
                : "bg-[#E9E4E0] text-[#172A39] hover:bg-[#6E7575] hover:text-[#E9E4E0]"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Items */}
      {sortBy === "grouped" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems)
            .sort()
            .map((category) => (
              <div key={category}>
                <h2 className="font-bold capitalize mb-2 text-[#6E7575]">
                  {category}
                </h2>

                <ul className="space-y-3">
                  {[...groupedItems[category]]
                    .sort((a, b) => a.name.localeCompare(b.name))
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
// #172A39
// #E9E4E0
// #FC563C
// #6E7575