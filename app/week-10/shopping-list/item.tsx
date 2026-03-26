import type ItemType from "./item-list";

export type ItemProps = {
  item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
  onSelect: (item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  }) => void;
};
export default function Item({ item, onSelect }: ItemProps) {
  console.log("Rendering item:", item);
  const handleClick = () => {
    console.log("Item clicked:", item);
    onSelect(item);
  }
  return (
     <li
      className="p-4 rounded bg-[#E9E4E0] hover:bg-[#BFBFBF] transition-colors duration-200 text-[#172A39] border"
      onClick={handleClick} 
    >
      <p className="font-semibold text-gray-900 capitalize">{item.name}</p>
      <p className="text-sm text-gray-700 capitalize">Quantity: {item.quantity}</p>
      <p className="text-sm text-gray-700 capitalize">{item.category}</p>
    </li>
  );
}
