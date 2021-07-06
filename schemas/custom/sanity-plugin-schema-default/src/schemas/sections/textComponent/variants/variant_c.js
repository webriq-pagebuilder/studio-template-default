import { title } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_c",
  type: "object",
  fields: [
    title,
    {
      title: "First Column",
      name: "firstContent",
      description: "Add content in the first column.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }]
        }
      ]
    },
    {
      title: "Second Column",
      name: "secondContent",
      description: "Add content in the second column.",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }]
        }
      ]
    },
    {
      title: "Third Column",
      name: "thirdContent",
      description: "Add content in the third column.",
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
