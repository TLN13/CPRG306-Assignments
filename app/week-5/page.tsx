import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-[#bddfec]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#5A4D4D]">
        Shopping List
      </h1>
      <div className="max-w-md mx-auto">
        <ItemList />
      </div>
    </main>
  );
}
