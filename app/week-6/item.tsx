export type ItemProps = {
  item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
};

export default function Item({ item }: ItemProps) {
  return (
    <li className="p-4 rounded bg-[#E9E4E0] hover:bg-[#BFBFBF] transition-colors duration-200 text-[#6E7575] border">
      <p className="font-semibold capitalize">{item.name}</p>
      <p className="text-sm capitalize">Quantity: {item.quantity}</p>
      <p className="text-sm capitalize">{item.category}</p>
    </li>
  );
}
