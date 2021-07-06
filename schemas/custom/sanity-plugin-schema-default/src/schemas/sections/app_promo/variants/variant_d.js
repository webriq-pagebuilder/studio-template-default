import {
  title,
  subtitle,
  description,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";

export default {
  name: "variant_d",
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  type: "object",
  fields: [subtitle, title, description],
};
