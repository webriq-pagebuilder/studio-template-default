import { rootSchema } from "../../common/rootSchema";
import { MdNavigation } from "react-icons/md";
import { variantLists as baseVariantList } from "@webriq-pagebuilder/sanity-plugin-schema-default/src/schemas/sections/navigation/navigation";

import variantEImage from "./images/variant_e.png";
import initialValue from "./initialValue";
import { navigationSchema } from "./schema";

// Hide Navigation Variant E from variants list if C-Studio is disabled
const isCStudio = process.env.SANITY_STUDIO_IN_CSTUDIO === "true";

export const variantLists = [
  ...baseVariantList,
  {
    title: "Variant E",
    description: "Add an e-commerce navigation",
    value: "variant_e",
    image: variantEImage,
  },
];

export default rootSchema(
  "navigation",
  "Navigation",
  MdNavigation,
  isCStudio ? variantLists : baseVariantList,
  navigationSchema,
  initialValue
);
