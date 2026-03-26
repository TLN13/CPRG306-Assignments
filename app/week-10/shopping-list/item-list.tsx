"use client";

import { Item } from "../_services/shopping-list-service";

interface ItemListProps {
  items: Item[];
  onItemSelect: (item: Item) => void;
  onDeleteItem: (id: string) => void;
}

export default function ItemList({
  items,
  onItemSelect,
  onDeleteItem,
}: ItemListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex justify-between items-center bg-white p-3 rounded shadow"
        >
          <div
            onClick={() => onItemSelect(item)}
            className="cursor-pointer"
          >
            <p className="font-semibold text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-600">
              Qty: {item.quantity} | {item.category}
            </p>
          </div>

          <button
            onClick={() => {
              if (onDeleteItem && confirm("Delete this item?")) {
                onDeleteItem(item.id);
              }
            }}
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
// #172A39
// #E9E4E0
// #FC563C
// #6E7575