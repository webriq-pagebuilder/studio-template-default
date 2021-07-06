import { MdNewReleases } from "react-icons/md";
import { variantsList as baseVariantsList } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/app_promo/appPromo";
import { schemaFields as baseSchemaFields } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/sections/app_promo/appPromo";
import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";

import variantDImage from "./images/variant_d.png";

import variantDSchema from "./variants/variant_d";

const variantsList = [
  ...baseVariantsList,
  {
    title: "App Promo with simplicity",
    description: "Let's keep it simple!",
    value: "variant_d",
    image: variantDImage,
  },
];

const schemaFields = [...baseSchemaFields, { ...variantDSchema }];

export default rootSchema(
  "appPromo",
  "App Promo",
  MdNewReleases,
  variantsList,
  schemaFields
);
