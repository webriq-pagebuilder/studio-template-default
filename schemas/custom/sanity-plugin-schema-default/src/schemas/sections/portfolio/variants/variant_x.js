import {
  mainImage,
  title,
  subtitle,
  description,
  primaryButton
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";

export default {
  name: "variant_x",
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  type: "object",
  fields: [mainImage, subtitle, title, description, primaryButton],
};
