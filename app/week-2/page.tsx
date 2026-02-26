import StudentInfo from "./student.info";

export default function Page() {
  return (
    <main className="bg-[#E9E4E0] min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#6E7575] mb-8 text-center">
        Shopping List
      </h1>

      <div className="w-full max-w-md bg-[#172A39] rounded-lg shadow-lg p-6 hover:bg-[#FC563C] transition-colors duration-300">
        <StudentInfo />
      </div>
    </main>
  );
}