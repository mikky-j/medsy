import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Product } from "../../types/navTypes";
import { decreaseQuantity, increaseQuantity } from "../../redux/cartSlice";

interface QuantityButtonProps {
  className?: string;
  product: Product;
}

const QuantityButton = ({ product, className }: QuantityButtonProps) => {
  const quantity = useAppSelector(
    ({ cart }) =>
      cart.products.find((p) => p.product.id === product.id)?.quantity
  );
  const dispatch = useAppDispatch();
  return (
    <div
      className={`bg-gray-900 py-3 px-6 text-sm shadow-lg text-white flex items-center ${className}`}
    >
      <button
        className="border-none"
        onClick={() => dispatch(decreaseQuantity(product))}
      >
        {quantity! > 1 ? <FaMinus /> : <FaRegTrashAlt />}
      </button>
      <p className="flex-grow text-center">{quantity}</p>
      <button
        className="border-none"
        onClick={() => dispatch(increaseQuantity(product))}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityButton;
