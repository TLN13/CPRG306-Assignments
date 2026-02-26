import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen p-6 bg-[#E9E4E0]">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#6E7575]">
        Shopping List
      </h1>
      <div className="max-w-md mx-auto">
        <ItemList />
      </div>
    </main>
  );
}
