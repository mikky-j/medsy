import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import { Product } from "../../types/navTypes";

interface AddToCartButtonProps {
  className?: string;
  product: Product;
  onClick?: VoidFunction;
}

const AddToCartButton = ({
  className,
  product,
  onClick = () => {},
}: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addToCart(product));
        onClick();
      }}
      className={`border-none bg-gray-900 uppercase text-sm text-white text-center py-3 rounded-md w-full ${className}`}
    >
      Add to cart
    </button>
  );
};

export default AddToCartButton;
