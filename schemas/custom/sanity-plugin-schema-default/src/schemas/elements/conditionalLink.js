import ConditionalFieldsInputComponent from "@webriq-pagebuilder/sanity-plugin-input-component-conditional-fields";
import { FaRoute } from "react-icons/fa";

export default {
  title: "Link",
  name: "conditionalLink",
  type: "object",
  icon: FaRoute,
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Select the link type",
      name: "link",
      type: "object",
      inputComponent: ConditionalFieldsInputComponent,
      fields: [
        {
          type: "object",
          name: "input",
          fields: [
            {
              name: "condition",
              title: "Link Type",
              type: "string",
              options: {
                list: [
                  {
                    title: "Internal, inside this website",
                    description: "Reference inside documents",
                    value: "linkInternal",
                  },
                  {
                    title: "External, outside this website",
                    value: "linkExternal",
                    description: "Takes you outside the world",
                  },
                ],
                layout: "radio", // <-- leave out to make it a dropdown menu
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
          ],
        },
      ],
    },
    {
      name: "pageAccess",
      title: "Page Access",
      type: "string",
      initialValue: "openLinkToNewTab",
      options: {
        list: [
          {
            title: "Open link on a new tab",
            description: "Clicking the added link will open it in a new tab.",
            value: "openLinkToNewTab",
          },
          {
            title: "Open link on the same tab",
            description: "Clicking the link will open it on the same tab.",
            value: "openLinkToSameTab",
          },
        ],
        layout: "radio", // <-- leave out to make it a dropdown menu
      },
    },
  ],
  preview: {
    select: {
      label: "label",
      link: "link",
    },
    prepare({ label, link }) {
      return {
        title: label,
        subtitle:
          link === undefined
            ? "Route: Not Added"
            : link.condition === "linkExternal"
              ? `Route: ${link.linkExternal === undefined
                ? "External Link Not Set"
                : link.linkExternal
              }`
              : link.linkInternal === undefined
                ? "Route: Internal Link Not Set"
                : "Route: Reference to Page",
      };
    },
  },
};