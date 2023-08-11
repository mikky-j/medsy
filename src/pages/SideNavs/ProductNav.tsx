import { useContext } from "react";
import { Product } from "../../types/navTypes";
import { NavContext } from "../Index";
import TinyDescriptionBox from "../../components/SideNav/ProductNav/TinyDescriptionBox";
import { useAppSelector } from "../../redux/hooks";
import AddToCartButton from "../../components/SideNav/AddToCartButton";
import QuantityButton from "../../components/SideNav/QuantityButton";
import LongDescriptionBox from "../../components/SideNav/ProductNav/LongDescriptionBox";
import NavHeader from "../../components/SideNav/NavHeader";
import NavBody from "../../components/SideNav/NavBody";
import NavFooter from "../../components/SideNav/NavFooter";

interface ProductNavProps {
  product: Product;
}

const ProductNav = ({ product }: ProductNavProps) => {
  const { closeNav, openRoute } = useContext(NavContext);
  const cartQuantity = useAppSelector(
    ({ cart }) =>
      cart.products.find((prod) => prod.product.id === product.id)?.quantity
  );
  return (
    <div className="relative flex flex-col h-full ">
      <NavHeader title="Details" onBack={closeNav} />
      <NavBody className="grid gap-y-5 px-0 mx-6 text-gray-800">
        <div className="image-area mb-4 py-8 rounded-md flex justify-center bg-slate-100">
          <img
            src={product.image}
            height={300}
            className="h-[300px] overflow-hidden"
            alt={product.name}
          />
        </div>
        <p className="price font-bold ">₦{product.price}</p>
        <p className="name text-sm">{product.name}</p>
        <p className="text-2xs text-gray-500">
          {product.dosageForm} . {product.dosageTotalQuantity}
        </p>
        <div className="grid gap-y-10 mb-4">
          <LongDescriptionBox description={product.description} />
          <TinyDescriptionBox label="Dosage Form" value={product.dosageForm} />
          <TinyDescriptionBox label="Dosage" value={product.dosages} />
          <TinyDescriptionBox
            label="Active Substances"
            value={product.activeSubstances.join(";")}
          />
          <TinyDescriptionBox
            label="Manufacturer"
            value={product.manufacturer}
          />
        </div>
      </NavBody>
      <NavFooter>
        {cartQuantity ? (
          <QuantityButton className="px-6" product={product} />
        ) : (
          <AddToCartButton
            onClick={() => {
              openRoute("Cart");
            }}
            product={product}
          />
        )}
      </NavFooter>
    </div>
  );
};

export default ProductNav;
