type ItemProps = {
  item: {
    name: string;
    quantity: number;
    category: string;
  };
};

export default function Item({ item }: ItemProps) {
  return (
    <li className="p-4 border rounded bg-[#eccabd] hover:bg-[#e5b797] transition-colors duration-200">
      <p className="font-semibold text-[#5A4D4D] capitalize">{item.name}</p>
      <p className="text-sm text-[#5A4D4D] capitalize">Quantity: {item.quantity}</p>
      <p className="text-sm text-[#5A4D4D] capitalize">{item.category}</p>
    </li>
  );
}