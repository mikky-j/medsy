import { CgShoppingBag } from "react-icons/cg";
import { useAppSelector } from "../../redux/hooks";
interface CartProps {
  className?: string;
  onClick?: VoidFunction;
}
const Cart = ({ className, onClick }: CartProps) => {
  const cartLength = useAppSelector((state) =>
    state.cart.products.reduce((prev, curr) => prev + curr.quantity, 0)
  );
  return (
    <div className={`${className} hover:cursor-pointer`} onClick={onClick}>
      <div className="relative">
        <CgShoppingBag size={25} />
        <div className="absolute top-[-37.5%] right-[-37.5%] w-5 h-5 flex justify-center items-center rounded-full text-xs font-bold bg-black text-white">
          {cartLength}
        </div>
      </div>
    </div>
  );
};

export default Cart;
