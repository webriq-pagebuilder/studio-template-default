import { MdNewReleases } from "react-icons/md";

// Images
import variantAImage from "./images/variant_a.png";

import variantASchema from "./variants/variant_a";
import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/src/schemas/common/rootSchema";

const variantsList = [
  {
    title: "Text Component for your page",
    description: "Eye catching Text for your page",
    value: "variant_a",
    image: variantAImage,
  }
];

const schemaFields = [
  { ...variantASchema }
];

export default rootSchema(
  "textComponent", //name use for our schema
  "Text Component", // display the title
  MdNewReleases, // icon
  variantsList, // list to render the images in our studio
  schemaFields // schema when clicking 1 of the image it will render the schema created
);
