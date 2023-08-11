import { useContext } from "react";
import { Product } from "../../../types/navTypes";
import { NavContext } from "../../../pages/Index";

interface ProductItemCardProps {
  product: Product;
}

const ProductItemCard = ({ product }: ProductItemCardProps) => {
  const { openRoute } = useContext(NavContext);
  return (
    <div
      className="w-full hover:cursor-pointer "
      onClick={() => {
        openRoute("Product", { product });
      }}
    >
      <div className="image-area mb-4 py-8 rounded-md flex justify-center bg-slate-100">
        <img
          src={product.image}
          height={200}
          className="h-[200px] overflow-hidden"
          alt={product.name}
        />
      </div>
      <div>
        <p className="price font-bold mb-2 ">₦{product.price}</p>
        <p className="name text-sm">{product.name}</p>
      </div>
    </div>
  );
};

export default ProductItemCard;
