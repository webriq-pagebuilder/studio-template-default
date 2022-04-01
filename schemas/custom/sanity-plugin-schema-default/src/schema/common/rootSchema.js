import ConditionalFieldsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-conditional-fields";
import VariantsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-variants";

export const rootSchema = (
  defineName,
  defineTitle,
  defineIcon,
  variantLists,
  schemaFields
) => {
  return {
    name: defineName,
    title: defineTitle,
    icon: defineIcon,
    type: "object",
    fields: [
      {
        title: "1. Custom Label",
        name: "label",
        type: "string",
        description:
          "Optional: just a friendly description of what this section is all about!",
      },
      {
        name: "variant",
        title: "2. Pick a variant!",
        description: "Choose one from the list below... 👇",
        type: "string",
        inputComponent: VariantsInputComponent,
        options: {
          list: variantLists,
        },
      },
      {
        name: "variants",
        title: "3. Update Content",
        type: "object",
        hidden: ({ parent }) => !parent?.variant,
        inputComponent: ConditionalFieldsInputComponent,
        fields: schemaFields,
      },
    ],
    preview: {
      select: {
        label: "label",
      },
      prepare({ label }) {
        return {
          title: defineTitle,
          subtitle: label,
        };
      },
    },
  };
};
