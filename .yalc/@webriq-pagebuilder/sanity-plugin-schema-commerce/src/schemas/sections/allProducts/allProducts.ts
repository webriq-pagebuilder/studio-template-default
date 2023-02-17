import { rootSchema } from "../../common/rootSchema";
import { FaClipboardList } from "react-icons/fa";

// Images
import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import { allProductsSchema } from "./schema";
import { initialValue } from "./initialValue";

export const variantsList = [
  {
    title: "Variant A",
    value: "variant_a",
    image: variantAImage,
  },
  {
    title: "Variant B",
    value: "variant_b",
    image: variantBImage,
  },
];

export default rootSchema(
  "allProducts",
  "All Products",
  FaClipboardList,
  variantsList,
  allProductsSchema,
  initialValue
);
