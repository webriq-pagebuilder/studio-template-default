import { MdStayPrimaryPortrait } from "react-icons/md";
import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";

import variantAImage from "./images/variant_a.png";

import variantDSchema from "./variants/variant_a";

const variantsList = [
  {
    title: "Product with simplicity",
    description: "Let's keep it simple!",
    value: "variant_a",
    image: variantAImage,
  },
];

const schemaFields = [{ ...variantDSchema }];

export default rootSchema(
  "product",
  "Product",
  MdStayPrimaryPortrait,
  variantsList,
  schemaFields
);
