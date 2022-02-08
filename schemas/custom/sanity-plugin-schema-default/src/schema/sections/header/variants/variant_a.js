import {
  title,
  description,
  primaryButton,
  secondaryButton,
  mainImage,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";
// import { variantAInitialValue } from "../initialValues";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_a",
  // initialValue: variantAInitialValue,
  type: "object",
  fields: [title, description, primaryButton, secondaryButton, mainImage],
};
