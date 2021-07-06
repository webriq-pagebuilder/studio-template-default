import { MdLineWeight } from "react-icons/md";

// Images
import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import variantCImage from "./images/variant_c.png";

import variantASchema from "./variants/variant_a";
import variantBSchema from "./variants/variant_b";
import variantCSchema from "./variants/variant_c";


import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";


const variantsList = [
  {
    title: "Variant A",
    description: "Add a text component with a single column.",
    value: "variant_a",
    image: variantAImage
  },
  {
    title: "Variant B",
    value: "variant_b",
    description: "Add a text component with 2 columns.",
    image: variantBImage
  },
  {
    title: "Variant C",
    value: "variant_c",
    description: "Add a text component with 3 columns.",
    image: variantCImage
  }
];

const schemaFields = [
  { ...variantASchema },
  { ...variantBSchema },
  { ...variantCSchema }
];

export default rootSchema("textComponent", "Text Component", MdLineWeight, variantsList, schemaFields);
