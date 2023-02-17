import { rootSchema } from "../../common/rootSchema";
import { MdStar } from "react-icons/md";

// Images
import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import { featuredProductsSchema } from "./schema";
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
  "featuredProducts",
  "Featured Products",
  MdStar,
  variantsList,
  featuredProductsSchema,
  initialValue
);
