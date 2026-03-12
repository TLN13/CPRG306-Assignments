import { ItemType } from "./item-list";

export type ItemProps = {
  item: {
    id: string;
    name: string;
    quantity: number;
    category: string;
  };
  onSelect: (item: ItemType) => void;
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
      <p className="font-semibold capitalize">{item.name}</p>
      <p className="text-sm capitalize">Quantity: {item.quantity}</p>
      <p className="text-sm capitalize">{item.category}</p>
    </li>
  );
}
