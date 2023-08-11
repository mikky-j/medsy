import { Product } from "../../../types/navTypes";
import ProductItemCard from "./ProductItemCard";

const randomProducts: Product[] = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 1",
    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 1",
    dosageForm: "DosageForm 1",
    manufacturer: "Manufacturer 1",
    prescriptionRequired: false,
    dosages: "Dosages 1",
    dosageTotalQuantity: 100,
  },
  {
    id: "2",
    name: "Product 2",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 2",
    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 2",
    dosageForm: "DosageForm 2",
    manufacturer: "Manufacturer 2",
    prescriptionRequired: false,
    dosages: "Dosages 2",
    dosageTotalQuantity: 100,
  },
  {
    id: "3",
    name: "Product 3",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 3",
    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 3",
    dosageForm: "DosageForm 3",
    manufacturer: "Manufacturer 3",
    prescriptionRequired: false,
    dosages: "Dosages 3",
    dosageTotalQuantity: 100,
  },

  {
    id: "4",
    name: "Product 4",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 4",
    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 4",
    dosageForm: "DosageForm 4",
    manufacturer: "Manufacturer 4",
    prescriptionRequired: false,
    dosages: "Dosages 4",
    dosageTotalQuantity: 100,
  },
  {
    id: "5",
    name: "Product 5",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 5",

    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 5",
    dosageForm: "DosageForm 5",
    manufacturer: "Manufacturer 5",
    prescriptionRequired: false,
    dosages: "Dosages 5",
    dosageTotalQuantity: 100,
  },
  {
    id: "6",
    name: "Product 6",
    price: 100,
    image: "http://picsum.photos/200",
    category: "Category 6",
    activeSubstances: ["Active 1", "Active 2"],
    description: "Description 6",
    dosageForm: "DosageForm 6",
    manufacturer: "Manufacturer 6",
    prescriptionRequired: false,
    dosages: "Dosages 6",
    dosageTotalQuantity: 100,
  },
];

const ProductList = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5 mt-8 px-3">
      {randomProducts.map((product) => (
        <ProductItemCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
