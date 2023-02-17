import { rootSchema } from "../../common/rootSchema";
import { RiPriceTag2Fill } from "react-icons/ri";

// Images
import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import { pagesProductInfoSchema } from "./schema";
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
  "pages_productInfo",
  "Page | Product Info",
  RiPriceTag2Fill,
  variantsList,
  pagesProductInfoSchema,
  initialValue
);
