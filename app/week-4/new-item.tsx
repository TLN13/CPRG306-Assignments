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
    const item = {
      name,
      quantity,
      category,
    };
    console.log("New Item:", item);

    alert(
      `Item Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 rounded-lg shadow-md space-y-4 bg-[#66bcd6]" 
    >
    {/* Item Name */}
        <div>
            <label className="block font-medium mb-1 text-grey-500">
                Item Name
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameTouched(false)}
                onBlur={() => {
                    setNameTouched(true);
                }}
                className={`mt-1 w-full border-2 rounded px-3 py-2 focus:outline-none focus:border-white transition-colors ${nameTouched && (!name || name.length < 2) ? "border-red-500" : ""}`}
                />
                {nameTouched && (!name || name.length < 2) && (
                <p className="text-red-500 text-sm mt-1 focus:outline-none focus:border-red-500 transition-colors">
                    Item name must be at least 2 characters.
                </p>
                )}
            </label>
        </div>



    {/* Quantity */}
        <div className="mb-4">
            <label className="block font-medium mb-1">
                Quantity
            </label>
            <div className="mt-1 flex items-center justify-center gap-3">
                <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded text-lg hover:bg-[#2596be] transition-colors"
                >
                −
                </button>

                <span className="w-10 text-center">{quantity}</span>

                <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                className="px-3 py-1 border rounded text-lg hover:bg-[#2596be] transition-colors"
                >
                +
                </button>
            </div>
        </div>


    {/* Category */}
        <div>
            <label className="block font-medium mb-1">
                Category
                <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full border-2 rounded px-3 py-2"
                >
                <option value="produce" className="text-black">Produce</option>
                <option value="dairy" className="text-black">Dairy</option>
                <option value="bakery"  className="text-black">Bakery</option>
                <option value="meat"  className="text-black">Meat</option>
                <option value="frozen foods" className="text-black">Frozen Foods</option>
                <option value="canned goods" className="text-black">Canned Goods</option>
                <option value="dry goods" className="text-black">Dry Goods</option>
                <option value="beverages" className="text-black">Beverages</option>
                <option value="snacks" className="text-black">Snacks</option>
                <option value="household" className="text-black">Household</option>
                <option value="other" className="text-black">Other</option>
                </select>
            </label>
        </div>


      {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed "
            disabled={nameTouched && (!name || name.length < 2)}
        >
            Add Item
        </button>
    </form>
  );
}
