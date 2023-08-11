import { CartProduct } from "../../../types/cartTypes";
import QuantityButton from "../QuantityButton";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({ product: { product, quantity } }: CartItemProps) => {
  return (
    <div className="py-6 flex align-middle border-b">
      <div className="w-[100px] h-[100px] mr-4 bg-slate-100">
        <img
          src={product.image}
          className="object-cover"
          height={100}
          alt={product.name}
        />
      </div>
      <div className="flex-grow">
        <p className="mb-2">{product.name}</p>
        <p className="mb-4 text-sm text-gray-500">
          Unit Price: ₦{product.price}
        </p>
        <QuantityButton
          className="w-1/2 py-2 px-2 text-xs font-semibold"
          product={product}
        />
      </div>
      <div className="self-end text-xl font-semibold">
        ₦{(product.price * quantity).toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
