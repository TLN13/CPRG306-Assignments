import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

// Item type
export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

// ✅ Get all items for a user
export const getItems = async (userId: string): Promise<Item[]> => {
  const itemsRef = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Item, "id">),
  }));
};

// ✅ Add a new item
export const addItem = async (userId: string, item: Omit<Item, "id">): Promise<string> => {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};

// ✅ Delete an item
export const deleteItem = async (userId: string, itemId: string): Promise<void> => {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
};