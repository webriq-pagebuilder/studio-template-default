import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default";
import { MdVerticalAlignTop } from "react-icons/md";
import { headerVariants } from "@webriq-pagebuilder/sanity-plugin-schema-default";
/*
  1. Import variant images from the ./images folder
      EXAMPLE: import variantFImage from "./images/variant_f.png";
  2. Import defined initial values from the ./initialValue folder
      EXAMPLE: import initialValue from "./initialValue"
*/
import variantFImage from "./images/variant_f.png"
import { headerSchema } from "./schema";

export const variantsList = [
  ...headerVariants,
  // define additional variants here example:
  {
    title: "Variant F",
    value: "variant_f",
    image: variantFImage,
  },
];

export default rootSchema(
  "header",
  "Header",
  MdVerticalAlignTop,
  variantsList,
  headerSchema
  // initialValue
);