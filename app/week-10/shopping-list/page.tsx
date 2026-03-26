"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem, deleteItem, Item } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState<Item[]>([]);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  // Redirect if not logged in
  useEffect(() => {
    if (user === null) router.push("/week-8");
  }, [user]);

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) return;
    const data = await getItems(user.uid);
    setItems(data);
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  if (!user) return null;

  // Add item
  const handleAddItem = async (newItem: Omit<Item, "id">) => {
    if (!user) return;

    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
  };

  // Delete item
  const handleDeleteItem = async (itemId: string) => {
    if (!user) return;

    await deleteItem(user.uid, itemId);
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Select item for meal ideas
  const handleItemSelect = (item: Item) => {
    const withoutEmojis = item.name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
      ""
    );

    const firstWord = withoutEmojis.split(",")[0].trim().split(" ")[0];
    setSelectedItemName(firstWord.toLowerCase());
  };

  return (
    <main className="min-h-screen p-6 bg-[#E9E4E0]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6E7575]">
        Shopping List
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left */}
        <div className="md:w-1/3 flex flex-col gap-6">
          <div className="p-4 rounded shadow-md bg-[#6E7575]">
            <NewItem onAddItem={handleAddItem} />
          </div>

          {selectedItemName && (
            <div className="p-4 rounded shadow-md bg-[#6E7575]">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          )}
        </div>

        {/* Right */}
        <div className="md:w-2/3">
          <div className="p-4 rounded shadow-md bg-[#6E7575]">
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
              onDeleteItem={handleDeleteItem}
            />
          </div>
        </div>
      </div>
    </main>
  );
}