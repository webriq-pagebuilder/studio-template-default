// import ConditionalFieldsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-conditional-fields";
import VariantsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-variants"
import { defineField, defineType } from "sanity"

export const rootSchema = (
  defineName: string,
  defineTitle: string,
  defineIcon: any,
  variantLists: {
    title: string
    description?: string
    value: string
    image?: any
  }[],
  schemaFields: any,
  initialValue?: any
) => {
  return defineType({
    name: defineName,
    title: defineTitle,
    icon: defineIcon,
    type: "document",
    fields: [
      defineField({
        title: "1. Section Name",
        name: "label",
        type: "string",
        description:
          "Add a name to help identify this section. Example: Navigation Variant A",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "variant",
        title: "2. Pick a variant!",
        description: "Choose one from the list below... 👇",
        type: "string",
        components: {
          input: VariantsInputComponent,
        },
        options: {
          list: variantLists,
        },
      }),
      defineField({
        name: "variants",
        title: "3. Update Content",
        type: "object",
        hidden: ({ document }) => !document?.variant,
        initialValue,
        fields: schemaFields,
      }),
    ],
    preview: {
      select: {
        label: "label",
        variant: "variant",
      },
      prepare({ label, variant }) {
        let variantStr = "",
          sectionVariant = "Variant not selected"

        if (variant) {
          variantStr =
            variant?.charAt(0).toUpperCase() +
            variant?.substr(1, variant.length - 2) +
            variant?.charAt(variant.length - 1).toUpperCase() // the first and last letters of variant to uppercase

          sectionVariant = variantStr?.replace(/_/g, " ") // replace underscore (_) with whitespace
        }

        return {
          title: label,
          subtitle: `${defineTitle} • ${sectionVariant}`,
        }
      },
    },
  })
}
