import { MdMonetizationOn } from "react-icons/md";
import { variantsList as baseVariantsList } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/pricing/pricing";
import { schemaFields as baseSchemaFields } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/pricing/pricing";
import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";

import variantXImage from "./images/variant_x.png";

import variantXSchema from "./variants/variant_x";

const variantsList = [
  ...baseVariantsList,
  {
    title: "Pricing Test",
    description: "Let's keep it simple!",
    value: "variant_x",
    image: variantXImage,
  },
];

const schemaFields = [...baseSchemaFields, { ...variantXSchema }];

export default rootSchema(
  "pricing",
  "Pricing",
  MdMonetizationOn,
  variantsList,
  schemaFields
);