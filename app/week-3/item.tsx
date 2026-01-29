type ItemProps = {
  item: {
    name: string;
    quantity: number;
    category: string;
  };
};

export default function Item({ item }: ItemProps) {
  return (
    <li className="p-2 border-3  rounded bg-[#66bcd6] hover:bg-[#2596be]">
      <p className="font-semibold text-gray-200">{item.name}</p>
      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
      <p className="text-sm text-gray-600">{item.category}</p>
    </li>
  );
}