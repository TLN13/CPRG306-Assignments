import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
