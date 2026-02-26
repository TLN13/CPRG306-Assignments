"use client";

import { useState, FormEvent } from "react";

export default function NewItem() {
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [category, setCategory] = useState<string>("produce");
  const [nameTouched, setNameTouched] = useState<boolean>(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name || name.length < 2) {
      setNameTouched(true);
      return;
    } else {
      setNameTouched(false);
    }

    const item = { name, quantity, category };
    console.log("New Item:", item);

    alert(
      `Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <main className="bg-[#E9E4E0] min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-[#FFFFFF] p-6 rounded-lg shadow-md space-y-6 border-2 border-[#172A39] hover:border-[#FC563C] transition-colors"
      >
        <h1 className="text-2xl font-bold text-[#6E7575] text-center mb-4">
          Add New Item
        </h1>

        {/* Item Name */}
        <div>
          <label className="block font-medium mb-1 text-[#6E7575]">
            Item Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameTouched(false)}
              onBlur={() => setNameTouched(true)}
              className={`mt-1 w-full border-2 rounded px-3 py-2 focus:outline-none transition-colors ${
                nameTouched && (!name || name.length < 2)
                  ? "border-[#FC563C]"
                  : "border-[#172A39] focus:border-[#172A39]"
              } text-[#6E7575]`}
            />
            {nameTouched && (!name || name.length < 2) && (
              <p className="text-[#FC563C] text-sm mt-1">
                Item name must be at least 2 characters.
              </p>
            )}
          </label>
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1 text-[#6E7575]">
            Quantity
          </label>
          <div className="mt-1 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-5 py-2 rounded font-medium bg-[#172A39] text-white hover:bg-[#FC563C] transition-colors text-2xl"
            >
              −
            </button>

            <span className="w-16 text-center text-xl font-semibold text-[#6E7575]">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() => setQuantity((q) => Math.min(99, q + 1))}
              className="px-5 py-2 rounded font-medium bg-[#172A39] text-white hover:bg-[#FC563C] transition-colors text-2xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1 text-[#6E7575]">
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full border-2 rounded px-3 py-2 border-[#172A39] text-[#6E7575] focus:outline-none focus:border-[#FC563C] transition-colors"
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
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#172A39] text-white font-semibold py-3 rounded hover:bg-[#FC563C] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
          disabled={nameTouched && (!name || name.length < 2)}
        >
          Add Item
        </button>
      </form>
    </main>
  );
}