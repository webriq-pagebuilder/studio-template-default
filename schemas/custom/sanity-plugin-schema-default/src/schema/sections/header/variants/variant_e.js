import {
  title,
  plainText,
  primaryButton,
  secondaryButton,
  webriqForms,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";
// import { variantEInitialValue } from "../initialValues";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_e",
  // initialValue: variantEInitialValue,
  type: "object",
  fields: [
    title,
    plainText,
    primaryButton,
    secondaryButton,
    webriqForms,
    {
      name: "formLinks",
      title:
        "Add links below form. Example: 'Terms of Use' or 'Police Privacy'",
      type: "array",
      of: [{ type: "conditionalLink" }],
    },
  ],
};
