import VariantsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-variants";

// Images
import variantAImage from "./images/variant_a.png";

export const variantsList = [
  {
    title: "Variant A",
    value: "variant_a",
    image: variantAImage,
  },
];

export default {
  name: "cartSectionVariant",
  title: "Variant",
  initialValue: () => ({
    variant: "variant_a",
  }),
  type: "object",
  fields: [
    {
      name: "variant",
      title: "Pick a variant!",
      description: "Choose one from the list below... 👇",
      type: "string",
      components: {
        input: VariantsInputComponent
      },
      options: {
        list: variantsList,
      },
    },
  ],
};
