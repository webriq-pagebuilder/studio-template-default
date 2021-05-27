import conditionalFields from "./conditionalFields"
import variantComponent from "./variantComponent"

import variantAImage from "./images/variant_a.png"
import variantBImage from "./images/variant_b.png"
import variantCImage from "./images/variant_c.png"
import variantDImage from "./images/variant_d.png"

export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Link Label",
      name: "label",
      type: "string",
    },
    {
      title: "Select the link type",
      name: "aFieldWithCondition",
      type: "object",
      inputComponent: conditionalFields,
      fields: [
        {
          type: "object",
          name: "input",
          fields: [
            {
              name: "condition",
              title: "Link Type",
              type: "string",
              inputComponent: variantComponent,
              options: {
                list: [
                  {
                    title: "Internal, inside this website",
                    description: "Reference inside documents",
                    value: "linkInternal",
                    image: variantAImage,
                  },
                  {
                    title: "External, outside this website",
                    value: "linkExternal",
                    description: "Takes you outside the world",
                    image: variantBImage,
                  },

                  {
                    title: "String",
                    value: "name",
                    image: variantCImage,
                    description: "Well just string variant",
                  },
                  {
                    title: "Variant A",
                    description: "Well just another variant to show",
                    value: "variant_a",
                    image: variantDImage,
                  },
                ],
                // layout: 'radio', // <-- leave out to make it a dropdown menu
              },
            },
          ],
        },
        {
          type: "object",
          name: "options",
          fields: [
            {
              title: "Page Reference",
              name: "linkInternal",
              type: "reference",
              to: [{ type: "page" }],
            },
            {
              name: "linkExternal",
              title: "URL",
              type: "url",
              validation: false,
            },
            {
              title: "This one is just to show you can add more options",
              name: "name",
              type: "string",
            },
            {
              title: "Navigation Variant A",
              name: "variant_a",
              type: "object",
              fields: [
                {
                  title: "Add Route",
                  name: "routes",
                  type: "array",
                  of: [{ type: "internal_link" }, { type: "external_link" }],
                },
                {
                  title: "Add Button",
                  name: "button",
                  type: "array",
                  of: [{ type: "internal_link" }, { type: "external_link" }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
