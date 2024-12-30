import { ItemProps } from '../../app/models/interfaces';

export function Item({
  id,
  name,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove,
}: ItemProps) {
  return (
    <div className="flex items-center">
      <img src={image} alt={name} className="w-16 h-16 mr-4" />
      <div className="flex-1">
        <h4 className="font-bold">{name}</h4>
        <p>{price.toFixed(2)}€</p>
        <div className="flex items-center">
          <button onClick={() => onUpdateQuantity(id, quantity - 1)}>-</button>
          <span className="mx-2">{quantity}</span>
          <button onClick={() => onUpdateQuantity(id, quantity + 1)}>+</button>
        </div>
      </div>
      <button onClick={() => onRemove(id)} className="text-red-500">
        Remover
      </button>
    </div>
  );
}
