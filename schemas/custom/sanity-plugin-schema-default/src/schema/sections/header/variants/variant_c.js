import {
  primaryButton,
  secondaryButton,
  customText,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";
// import { variantCInitialValue } from "../initialValues";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_c",
  // initialValue: variantCInitialValue,
  type: "object",
  fields: [
    customText(
      "heading",
      "Heading",
      "",
      "Learn how We will help you to reach your goals",
      1
    ),
    primaryButton,
    secondaryButton,
    {
      title: "Add Youtube URL",
      name: "youtubeLink",
      type: "url",
    },
  ],
};
