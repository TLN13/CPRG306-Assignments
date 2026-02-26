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
    <main className="p-8 min-h-screen bg-[#bddfec] bg-cover bg-center">
      <h1 className="text-2xl font-bold mb-6 text-[#5A4D4D]">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="space-y-4">
        {weeks.map((week) => (
          <li key={week.href}>
            <Link
              href={week.href}
              className="block p-4 border rounded bg-[#eccabd] hover:bg-[#e5b797] transition-colors duration-200 text-[#5A4D4D] font-semibold"
            >
              → Go to {week.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
