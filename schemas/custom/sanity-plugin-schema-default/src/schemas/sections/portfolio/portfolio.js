import { MdNewReleases } from "react-icons/md";
import { variantsList as baseVariantsList } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/app_promo/appPromo";
import { schemaFields as baseSchemaFields } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/app_promo/appPromo";
import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";

import variantXImage from "./images/variant_x.png";

import varianteSchema from "./variants/variant_x";

const variantsList = [
  ...baseVariantsList,
  {
    title: "Variant X",
    description: "Let's keep it simple!",
    value: "variant_x",
    image: variantXImage,
  },
];

const schemaFields = [...baseSchemaFields, { ...varianteSchema }];

export default rootSchema(
  "portfolio",
  "Portfolio",
  MdNewReleases,
  variantsList,
  schemaFields
);
