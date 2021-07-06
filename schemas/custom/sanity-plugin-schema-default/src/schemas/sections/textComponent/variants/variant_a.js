import { title } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_a",
  type: "object",
  fields: [
    title,
    {
      title: "Content",
      name: "content",
      description: "Add text content in a single column.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }]
        }
      ]
    }
  ]
};
