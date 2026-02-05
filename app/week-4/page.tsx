import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center p-6 ">
      <h1 className="text-2xl font-bold mb-4 text-grey-500">Add New Item</h1>
      <NewItem />
    </main>
  );
}
