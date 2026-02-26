type ItemProps = {
  item: {
    name: string;
    quantity: number;
    category: string;
  };
};

export default function Item({ item }: ItemProps) {
  return (
    <li className="p-4 rounded border-2 border-[#172A39] bg-[#E9E4E0] hover:bg-[#FC563C] transition-colors duration-200">
      <p className="font-semibold text-[#172A39] capitalize">{item.name}</p>
      <p className="text-sm text-[#6E7575] capitalize">Quantity: {item.quantity}</p>
      <p className="text-sm text-[#6E7575] capitalize">{item.category}</p>
    </li>
  );
}