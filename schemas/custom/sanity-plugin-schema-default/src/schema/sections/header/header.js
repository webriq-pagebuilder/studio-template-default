import { rootSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/rootSchema";
import { MdVerticalAlignTop } from "react-icons/md";
import ConditionalFieldsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-conditional-fields";
import VariantsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-variants";

import variantAImage from "./images/variant_a.png";
import variantBImage from "./images/variant_b.png";
import variantCImage from "./images/variant_c.png";
import variantDImage from "./images/variant_d.png";
import variantEImage from "./images/variant_e.png";

import variantASchema from "./variants/variant_a";
import variantBSchema from "./variants/variant_b";
import variantCSchema from "./variants/variant_c";
import variantDSchema from "./variants/variant_d";
import variantESchema from "./variants/variant_e";
import initialValue from "./initialValue";

// export const variantsList = [
//   {
//     title: "Variant A",
//     description:
//       "Great highlight if you have a primary image together with the title, description and optional call-to-action buttons",
//     value: "variant_a",
//     image: variantAImage,
//   },
//   {
//     title: "Variant B",
//     value: "variant_b",
//     description:
//       "If one image isn't enough, this would be perfect to highlight multiple aspects of your business.",
//     image: variantBImage,
//   },
//   {
//     title: "Variant C",
//     value: "variant_c",
//     image: variantCImage,
//     description:
//       "Well, if image doesn't cut it, let's go full blast with a video. Because, why not?",
//   },
//   {
//     title: "Variant D",
//     description:
//       "Just another variation from the first one but greatly emphasizes the content and primary image.",
//     value: "variant_d",
//     image: variantDImage,
//   },
//   {
//     title: "Variant E",
//     description:
//       "Want to do more? You can hook in a form to capture data from your customers.",
//     value: "variant_e",
//     image: variantEImage,
//   },
// ];

// export const schemaFields = [
//   { ...variantASchema },
//   { ...variantBSchema },
//   { ...variantCSchema },
//   { ...variantDSchema },
//   { ...variantESchema },
// ];

// export default rootSchema(
//   "header",
//   "Header",
//   MdVerticalAlignTop,
//   variantsList,
//   schemaFields
// );
export default {
  title: "Reusable Header",
  name: "reusableHeader",
  type: "document",
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
        list: [
          {
            title: "Variant A",
            description:
              "Great highlight if you have a primary image together with the title, description and optional call-to-action buttons",
            value: "variant_a",
            image: variantAImage,
          },
          {
            title: "Variant B",
            value: "variant_b",
            description:
              "If one image isn't enough, this would be perfect to highlight multiple aspects of your business.",
            image: variantBImage,
          },
          {
            title: "Variant C",
            value: "variant_c",
            image: variantCImage,
            description:
              "Well, if image doesn't cut it, let's go full blast with a video. Because, why not?",
          },
          {
            title: "Variant D",
            description:
              "Just another variation from the first one but greatly emphasizes the content and primary image.",
            value: "variant_d",
            image: variantDImage,
          },
          {
            title: "Variant E",
            description:
              "Want to do more? You can hook in a form to capture data from your customers.",
            value: "variant_e",
            image: variantEImage,
          },
        ],
      },
    },
    {
      name: "variants",
      title: "3. Update Content",
      type: "object",
      // hidden: ({ parent }) => !parent?.variant,
      // inputComponent: ConditionalFieldsInputComponent,
      initialValue: initialValue,
      hidden: ({ document }) => !document.variant,
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
          hidden: ({ document }) => !document.variant,
        },
        {
          title: "Description",
          name: "description",
          type: "string",
          hidden: ({ document }) => !document.variant,
        },
        {
          name: "primaryButton",
          title: "Primary Button",
          description:
            "The primary button draws more attention to users. Click the ► to expand and fill out the details.",
          type: "conditionalLink",
          options: {
            collapsible: true,
            collapsed: true,
          },
          hidden: ({ document }) => !document.variant,
        },
        {
          name: "secondaryButton",
          title: "Secondary Button",
          type: "conditionalLink",
          description:
            "The secondary button acts as an alternative option for users to take action. Click the ► to expand and fill out the details.",
          options: {
            collapsible: true,
            collapsed: true,
          },
          hidden: ({ document }) => !document.variant,
        },
        {
          title: "Add an Image",
          name: "mainImage",
          type: "image",
          hidden: ({ document }) =>
            document.variant !== "variant_a" || !document.variant,
          options: {
            hotspot: true,
          },
        },
        {
          name: "images",
          title: "Add Images",
          type: "array",
          hidden: ({ document }) =>
            document.variant !== "variant_b" || !document.variant,
          of: [
            {
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
          options: {
            layout: "grid",
          },
        },
        {
          title: "Add Youtube URL",
          name: "youtubeLink",
          type: "url",
          hidden: ({ document }) =>
            document.variant !== "variant_c" || !document.variant,
        },
      ],
    },
  ],
  // preview: {
  //   select: {
  //     label: "label",
  //   },
  //   prepare({ label }) {
  //     return {
  //       title: defineTitle,
  //       subtitle: label,
  //     };
  //   },
  // },
};
