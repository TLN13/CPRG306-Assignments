import StudentInfo from "./student.info";

export default function Page() {
  return (
    <main className="bg-[#bddfec] min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-[#5A4D4D] mb-6 text-center">Shopping List</h1>
      <div className="bg-[#eccabd] p-6 rounded-lg shadow-md w-full max-w-md hover:bg-[#e5b797] transition-colors duration-200">
        <StudentInfo />
      </div>
    </main>
  );
}
