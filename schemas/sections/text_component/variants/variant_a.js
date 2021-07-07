import { title } from "@webriq-pagebuilder/sanity-plugin-schema-default/src/schemas/common/fields";

export default {
  name: "variant_a",
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  type: "object",
  fields: [title, 
    {
        title: 'Paragraph',
        name: 'paragraph',
        type: 'string'
    }
],
};
