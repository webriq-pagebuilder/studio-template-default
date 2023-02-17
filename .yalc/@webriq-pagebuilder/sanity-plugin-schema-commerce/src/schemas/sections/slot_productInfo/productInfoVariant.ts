import VariantsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-variants";
import { CustomString } from "./inputComponent/CustomString";

// Images
import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import defaultVariantImage from "./images/default.png";

export const variantsList = [
  {
    title: "Variant A",
    value: "variant_a",
    image: variantAImage,
  },
  {
    title: "Variant B",
    value: "variant_b",
    image: variantBImage,
  },
];

// Display variantsList to the "Design" field group on the Store > Products page
export const productInfoVariant = (group) => {
  return {
    name: "productInfoVariant",
    title: "Variant",
    initialValue: () => ({
      variant: "defaultVariant",
    }),
    group,
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
          list: [
            {
              title: "Default Variant",
              value: "defaultVariant",
              image: defaultVariantImage,
            },
            ...variantsList,
          ],
        },
      },
      {
        name: "instruction",
        title: "Instruction",
        hidden: ({ parent }) => parent?.variant === "defaultVariant",
        components: {
          input: CustomString
        },
        type: "string",
      },
    ],
  };
};

// Display variantsList to the "Design" field group on the Store > Commerce Pages > Products
export const defaultProductInfoVariant = (group) => {
  return {
    name: "defaultProductInfoVariant",
    title: "Variant",
    group,
    type: "object",
    initialValue: () => ({
      variant: "variant_a",
    }),
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
};
