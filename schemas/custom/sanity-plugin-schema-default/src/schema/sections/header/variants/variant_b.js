import {
  title,
  description,
  primaryButton,
  secondaryButton,
  arrayOfImages,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";
// import { variantBInitialValue } from "../initialValues";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_b",
  // initialValue: variantBInitialValue,
  type: "object",
  fields: [title, description, primaryButton, secondaryButton, arrayOfImages],
};
