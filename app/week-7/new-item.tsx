"use client";

import { useState, FormEvent } from "react";

interface NewItemProps {
  onAddItem: (item: { name: string; quantity: number; category: string }) => void;
}

export default function NewItem({ onAddItem }: NewItemProps) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");
  const [nameTouched, setNameTouched] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || name.length < 2){
      setNameTouched(true);
      return;
    }

    onAddItem({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#E9E4E0] p-6 rounded shadow-md space-y-6 text-[#6E7575]"
    >
      <h2 className="text-2xl font-bold text-center">Add New Item</h2>

      {/* Name */}
      <div>
        <label htmlFor="item-name" className="block font-medium mb-1">
          Item Name
        </label>
        <input
          id="item-name"
          type="text"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          className={`mt-1 w-full border-2 rounded px-3 py-2 text-[#172A39] focus:outline-none focus:ring-2 focus:ring-[#FC563C] ${
            nameTouched && name.length < 2 ? "border-red-500" : "border-[#6E7575]"
          }`}
        />
      </div>

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block font-medium mb-1">
          Quantity: {quantity}
        </label>
        <input
          id="quantity"
          type="range"
          min={1}
          max={99}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="
            w-full h-4
            rounded-lg
            bg-[#6E7575]/30
            accent-[#FC563C]
            cursor-pointer
          "
        />
      </div>
      {/* Category */}
      <div>
        <label htmlFor="category" className="block font-medium mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full border-2 rounded px-3 py-2 text-[#172A39] border-[#6E7575] focus:outline-none focus:ring-2 focus:ring-[#FC563C]"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#FC563C] hover:bg-[#e14c32] text-[#E9E4E0] font-semibold py-2 rounded transition-colors duration-200"
      >
        Add Item
      </button>
    </form>
  );
}