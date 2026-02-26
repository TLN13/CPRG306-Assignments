import Link from "next/link";

const weeks = [
  { href: "/week-2", name: "Week 2" },
  { href: "/week-3", name: "Week 3" },
  { href: "/week-4", name: "Week 4" },
  { href: "/week-5", name: "Week 5" },
  { href: "/week-6", name: "Week 6" },
];

export default function Page() {
  return (
    <main className="p-8 min-h-screen bg-[#E9E4E0]">
      <h1 className="text-3xl font-bold mb-8 text-[#6E7575] text-center">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {weeks.map((week) => (
          <li key={week.href}>
            <Link
              href={week.href}
              className="
                block p-6 rounded-lg shadow-lg
                bg-[#172A39] text-[#E9E4E0] font-semibold
                hover:bg-[#FC563C] hover:text-white
                transition-colors duration-300
                text-center
              "
            >
              → Go to {week.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}