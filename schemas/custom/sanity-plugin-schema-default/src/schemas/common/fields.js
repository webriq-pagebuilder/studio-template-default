import {
  BsCardChecklist,
  BsTag,
  BsCardImage,
  BsCollection,
  BsPerson,
} from "react-icons/bs";
import { hideIfVariantIn } from "./hideIfVariantIn";

export const signInLink = (hidden) => {
  return {
    name: "signInLink",
    title: "Sign In link",
    hidden,
    description: "Add an internal or external link for the Sign In page",
    type: "conditionalLink",
  };
};

export const formLinks = (hidden) => {
  return {
    name: "formLinks",
    hidden,
    title: "Form links",
    description:
      "Add link/s below the form. Example: Terms of Use or Policy Privacy",
    type: "array",
    of: [{ type: "conditionalLink" }],
  };
};

export const external_link = (hidden) => {
  return {
    name: "external_link",
    title: "External Link",
    hidden,
    type: "object",
    fields: [
      {
        name: "text",
        title: "Display Text",
        type: "string",
      },
      {
        name: "external_link",
        description:
          "When this link is clicked it will redirect to whatever the user provided on this link",
        title: "External Link",
        type: "url",
      },
    ],
  };
};

export const internal_link = (hidden) => {
  return {
    name: "internal_link",
    title: "Internal Link",
    hidden,
    type: "object",
    fields: [
      {
        name: "text",
        title: "Display Text",
        type: "string",
      },
      {
        name: "internal_link",
        description:
          "When this link is clicked it will redirect to whatever the user provided in page",
        title: "Internal Link",
        type: "reference",
        to: [{ type: "page" }],
      },
    ],
  };
};

export const subtitle = (hidden) => {
  return {
    name: "subtitle",
    title: "Subtitle",
    description: "Add a subtitle by typing in the text field below",
    hidden,
    description: "A small text above your title",
    type: "string",
  };
};

export const title = (hidden) => {
  return {
    name: "title",
    title: "Title",
    description: "Add a title by typing in the text field below",
    hidden,
    placeholder: "Build & Launch without problems",
    type: "string",
  };
};

export const description = (hidden) => {
  return {
    name: "description",
    title: "Description",
    description: "Add a description by typing in the text field below",
    hidden,
    placeholder:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
    type: "text",
  };
};

export const arrayOfTitleAndDescription = (
  displayTitle,
  displayDescription,
  hidden
) => {
  return {
    title: displayTitle,
    name: "arrayOfTitleAndDescription",
    description: displayDescription,
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        icon: BsCardChecklist,
        title: "Features",
        fields: [title(), description()],
      },
    ],
    preview: {
      // select: {

      // },
      prepare() {
        return {
          title: "Featured Items",
          // subtitle: label,
        };
      },
    },
  };
};

export const arrayOfTitleAndText = (
  displayTitle,
  displayDescription,
  hidden
) => {
  return {
    name: "arrayOfTitleAndText",
    title: displayTitle,
    description: displayDescription,
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [title(), plainText()],
      },
    ],
  };
};

export const arrayOfImageTitleAndText = (
  displayTitle,
  displayDescription,
  hidden
) => {
  return {
    name: "arrayOfImageTitleAndText",
    title: displayTitle,
    description: displayDescription,
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [mainImage(), title(), plainText()],
      },
    ],
  };
};

export const plainText = (hidden) => {
  return {
    name: "plainText",
    title: "Plain text",
    hidden,
    description: "Add a block of text as content.",
    type: "text",
  };
};

export const blockContentNormalStyle = (name, title, description, hidden) => {
  return {
    name: name,
    title: title,
    description: description,
    hidden,
    type: "array",
    of: [
      {
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
      },
    ],
  };
};

export const primaryButton = (hidden) => {
  return {
    name: "primaryButton",
    title: "Primary Button",
    hidden,
    description:
      "Click ▶ above to expand and fill out the details to add a primary button.",
    type: "conditionalLink",
    options: {
      collapsible: true,
      collapsed: true,
    },
  };
};

export const secondaryButton = (hidden) => {
  return {
    name: "secondaryButton",
    title: "Secondary Button",
    hidden,
    type: "conditionalLink",
    description:
      "Click ▶ above to expand and fill out the details to add a secondary button.",
    options: {
      collapsible: true,
      collapsed: true,
    },
  };
};

// Use this schema for adding 1 image only
export const mainImage = (hidden) => {
  return {
    title: "Add an Image",
    name: "mainImage",
    description: "Fill out the details to add the main image.",
    hidden,
    type: "object",
    fields: [
      {
        name: "image",
        description:
          "Add from your computer (click 'Upload' button), this studio (click 'Browse' button) or by doing a drag/paste of the image.",
        type: "image",
        options: { hotspot: true },
      },
      {
        name: "alt",
        title: "Alternative Text",
        description:
          "Add the text to display when the image can't be loaded or is unavailable.",
        type: "string",
      },
    ],
  };
};

// Use this schema for adding more than 1 image
export const arrayOfImages = (hidden) => {
  return {
    name: "images",
    title: "Images Array",
    description:
      "Click the 'Add item' button to add images. If you want to edit added images, click this ⋮ icon found on the bottom right of item.",
    type: "array",
    hidden,
    of: [
      {
        name: "item",
        icon: BsCardImage,
        type: "object",
        fields: [
          {
            name: "image",
            title: "Image",
            description:
              "Add from your computer (click 'Upload' button), this studio (click 'Browse' button) or by doing a drag/paste of the image.",
            type: "image",
            options: {
              hotspot: true,
            },
          },
          {
            name: "alt",
            title: "Alternative text",
            description:
              "Add the text to display when the image can't be loaded or is unavailable.",
            type: "string",
          },
        ],
      },
    ],
    options: { layout: "grid" },
  };
};

export const tags = (displayTitle, displayDescription, hidden) => {
  let defaultTitle = !displayTitle ? "Tags" : displayTitle;
  let defaultDescription = !displayDescription
    ? "Press Enter when finished typing off a keyword or a sentence."
    : displayDescription;
  return {
    title: defaultTitle,
    name: "tags",
    hidden,
    description: defaultDescription,
    type: "array",
    of: [{ type: "string" }],
    options: {
      layout: "tags",
    },
  };
};

export const logo = (hidden) => {
  return {
    name: "logo",
    title: "Logo",
    description: "Fill out the details to add a logo.",
    hidden,
    type: "object",
    fieldsets: [
      {
        name: "link",
        title: "Logo link",
        description:
          "Add the link or page to redirect to when the logo is clicked.",
        options: {
          collapsible: false, // makes the whole fieldset collapsible
          collapsed: true, // starts as collapsed
        },
      },
    ],
    fields: [
      {
        name: "image",
        title: "Image",
        description:
          "Add from your computer (click 'Upload' button), this studio (click 'Browse' button) or by doing a drag/paste of the image.",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "alt",
        title: "Alternative text",
        description:
          "Add the text to display when the image can't be loaded or is unavailable.",
        type: "string",
        initialValue: "Logo",
      },
      // Logo link fields
      {
        title: "Select the link type",
        name: "linkType",
        initialValue: "linkInternal",
        fieldset: "link",
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
      {
        title: "Page Reference",
        name: "linkInternal",
        fieldset: "link",
        type: "reference",
        to: [{ type: "page" }],
        hidden: ({ parent }) => parent?.linkType !== "linkInternal",
      },
      {
        name: "linkExternal",
        title: "URL",
        fieldset: "link",
        type: "url",
        validation: false,
        hidden: ({ parent }) => parent?.linkType !== "linkExternal",
      },
      {
        name: "linkTarget",
        title: "Link Target",
        fieldset: "link",
        type: "string",
        initialValue: "_self",
        hidden: ({ parent }) => {
          // hide link target when the internal and external links have not been set
          if (
            parent?.linkType === "linkInternal" &&
            !parent?.linkInternal?._ref
          ) {
            return true;
          }

          if (parent?.linkType === "linkExternal" && !parent?.linkExternal) {
            return true;
          }

          // also hide if the actual link type (internal / external) has not been selected
          if (!parent?.linkType) {
            return true;
          }

          return false;
        },
        options: {
          list: [
            {
              title:
                "Blank - open on a new tab (usually), but users can configure browsers to open a new window instead.",
              description: "Clicking the added link will open it in a new tab.",
              value: "_blank",
            },
            {
              title: "Self (default) - open in the same browsing context",
              description: "Clicking the link will open it on the same tab.",
              value: "_self",
            },
          ],
          layout: "radio", // <-- leave out to make it a dropdown menu
        },
      },
    ],
  };
};

export const dateAdded = (hidden) => {
  return {
    title: "Date Added",
    name: "dateAdded",
    description:
      "Type date with format YYYY-MM-DD (e.g. 2022-01-01) or select date by clicking the calendar icon.",
    hidden,
    type: "date",
  };
};

export const category = (hidden) => {
  return {
    title: "Category",
    name: "category",
    hidden,
    type: "string",
    options: {
      list: [
        {
          value: "Travel",
          title: "Travel",
        },
      ],
    },
  };
};

export const postedBy = (hidden) => {
  return {
    title: "Posted By",
    name: "postedBy",
    hidden,
    type: "string",
    options: {
      list: [
        {
          value: "John Doe",
          title: "John Doe",
        },
      ],
    },
  };
};

export const customText = (
  name,
  displayTitle,
  displayDescription,
  displayPlaceholder,
  numberOfInputFields,
  hidden
) => {
  if (numberOfInputFields === 1) {
    return {
      name: name,
      title: displayTitle,
      hidden,
      description: displayDescription,
      placeholder: displayPlaceholder,
      type: "string",
    };
  } else {
    return {
      name: name,
      title: displayTitle,
      hidden,
      description: displayDescription,
      placeholder: displayPlaceholder,
      type: "array",
      of: [
        {
          type: "object",
          title: "Contact Information",
          fields: [
            {
              title: "Address",
              name: "addressInfo",
              placeholder: "359 Hidden Valley Road, NY",
              type: "string",
            },
            {
              title: "Email",
              name: "emailInfo",
              placeholder: "hello@webriq.com",
              type: "string",
            },
            {
              title: "Contact Info",
              name: "contactInfo",
              placeholder: "+48 698 033 101",
              type: "string",
            },
          ],
        },
      ],
    };
  }
};

export const customInteger = (
  name,
  displayTitle,
  displayDescription,
  displayPlaceholder,
  hidden
) => {
  return {
    name: name,
    title: displayTitle,
    hidden,
    description: displayDescription,
    placeholder: displayPlaceholder,
    type: "string",
  };
};

export const customDropdown = (
  name,
  displayTitle,
  displayDescription,
  values,
  hidden
) => {
  return {
    name: name,
    title: displayTitle,
    hidden,
    description: displayDescription,
    type: "string",
    options: {
      list: values,
    },
  };
};

export const socialLinks = (hidden) => {
  return {
    name: "socialLinks",
    title: "Social Links",
    description:
      "Click the 'Add item' button to add your social accounts. If you want to edit what is added, click this ⋮ icon found on its right.",
    type: "array",
    hidden,
    of: [
      {
        type: "object",
        name: "details",
        icon: BsPerson,
        fields: [
          {
            title: "Select the social media platform",
            name: "socialMedia",
            type: "string",
            options: {
              list: [
                { title: "Facebook", value: "facebook" },
                { title: "Twitter", value: "twitter" },
                { title: "Instagram", value: "instagram" },
                { title: "Other", value: "other" },
              ],
            },
          },
          {
            name: "socialMediaPlatform",
            title: "Social Media Platform",
            description:
              "Add another social media platform not in the default list. Example: LinkedIn",
            type: "string",
            hidden: ({ parent }) => parent?.socialMedia !== "other",
          },
          {
            name: "socialMediaIcon",
            title: "Social Media Icon",
            description:
              "Add the image to identify this social media platform.",
            hidden: ({ parent }) => parent?.socialMedia !== "other",
            type: "object",
            fields: [
              {
                name: "image",
                description:
                  "Add from your computer (click 'Upload' button), this studio (click 'Browse' button) or by doing a drag/paste of the image.",
                type: "image",
                options: { hotspot: true },
              },
              {
                name: "alt",
                title: "Alternative Text",
                description:
                  "Add the text to display when the image can't be loaded or is unavailable.",
                type: "string",
              },
            ],
          },
          {
            name: "socialMediaLink",
            title: "Social Media Link",
            description: "Add the link to your social media account",
            type: "url",
          },
        ],
        preview: {
          select: {
            title: "socialMedia",
            socialMediaPlatform: "socialMediaPlatform",
          },
          prepare({ title, socialMediaPlatform }) {
            if (title === "other") {
              return {
                title: socialMediaPlatform,
              };
            } else {
              return {
                title,
              };
            }
          },
        },
      },
    ],
  };
};

export const arrayOfText = (
  name,
  displayTitle,
  displayDescription,
  displayPlaceholder,
  hidden
) => {
  return {
    name: name,
    title: displayTitle,
    hidden,
    description: displayDescription,
    placeholder: displayPlaceholder,
    type: "array",
    of: [
      {
        type: "string",
      },
    ],
  };
};

export const askedQuestions = (hidden) => {
  return {
    name: "askedQuestions",
    title: "Questions and Answers",
    description:
      "Click the 'Add item' button to add questions and answers. If you want to edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "question",
            title: "Add the question",
            type: "string",
          },
          {
            name: "answer",
            title: "Add its answer",
            type: "text",
          },
        ],
      },
    ],
  };
};

export const faqsWithCategory = (hidden) => {
  return {
    name: "faqsWithCategory",
    title: "FAQs with Categories",
    description:
      "Click the 'Add item' button to add a question and answer. If you want to edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          {
            name: "category",
            title: "Add the category",
            description:
              "Example: Questions on 'Orders' or 'Refunds' can be 'General'",
            type: "string",
          },
          askedQuestions(),
        ],
        preview: {
          select: {
            title: "category",
          },
        },
      },
    ],
  };
};

export const portfoliosWithCategories = (
  name,
  title,
  description,
  items,
  hidden
) => {
  return {
    name: name,
    title: title,
    description: description,
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        icon: BsTag,
        fields: [
          {
            name: "category",
            title: "Category",
            description: "Add the category name.",
            type: "string",
          },
          items,
          primaryButton(),
        ],
      },
    ],
  };
};

export const portfolios = (hidden) => {
  return {
    name: "portfolios",
    title: "Add Portfolio",
    description:
      "Click the 'Add item' button to add portfolios. If you want to edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        name: "portfolioItems",
        title: "Portfolio Items",
        icon: BsCollection,
        fields: [dateAdded(), title(), mainImage(), primaryButton()],
      },
    ],
  };
};

export const appPromostatItems = (hidden) => {
  return {
    name: "statItems",
    title: "Add data and label",
    description:
      "Click the 'Add item' button to add statistics. If you want to edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          mainImage(hideIfVariantIn(["variant_b"])),
          {
            name: "label",
            title: "Add the label",
            description: "Example: Subscribers",
            type: "string",
          },
          {
            name: "value",
            title: "Add the value",
            type: "string",
          },
        ],
        preview: {
          select: {
            label: "label",
            value: "value",
          },
          prepare({ label, value }) {
            return {
              title: `Label: ${label ? label : "Not added"}`,
              subtitle: `Value: ${value ? value : "Not added"}`,
            };
          },
        },
      },
    ],
  };
};

export const statItems = (hidden) => {
  return {
    name: "statItems",
    title: "Add data and label",
    description:
      "Click the 'Add item' button to add statistics. If you want to edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          mainImage(hideIfVariantIn(["variant_a"])),
          {
            name: "label",
            title: "Add the label",
            description: "Example: Subscribers",
            type: "string",
          },
          {
            name: "value",
            title: "Add the value",
            type: "string",
          },
        ],
        preview: {
          select: {
            label: "label",
            value: "value",
          },
          prepare({ label, value }) {
            return {
              title: `Label: ${label ? label : "Not added"}`,
              subtitle: `Value: ${value ? value : "Not added"}`,
            };
          },
        },
      },
    ],
  };
};

export const webriqForms = (hidden) => {
  return {
    title: "Form",
    name: "form",
    hidden,
    description: "Specify the fields you want to show in your forms.",
    type: "webriqForm",
  };
};

export const ctaForm = (hidden) => {
  return {
    title: "Call to Action Form",
    name: "ctaForm",
    hidden,
    description: "Specify the fields you want to show in your forms.",
    type: "webriqForm",
  };
};

export const routes = (hidden) => {
  return {
    title: "Add Routes",
    description:
      "Click the 'Add item' button to add navigation menu. If you want to edit what is added, click this ⋮ icon found on its right.",
    name: "routes",
    type: "array",
    hidden,
    options: {
      collapsible: true,
      collapsed: true,
    },
    of: [{ type: "conditionalLink" }],
  };
};

export const blockOfText = (hidden) => {
  return {
    name: "block",
    title: "Add block of text",
    description: "Add statement to allow user to accept terms and policies.",
    type: "array",
    hidden,
    of: [
      {
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
        lists: [],
        marks: {
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
            { title: "Underline", value: "underline" },
          ],
        },
      },
    ],
  };
};

export const blogPost = (hidden) => {
  return {
    name: "blogPosts",
    title: "Blog Posts",
    description:
      "Click the 'Add item' button to add blog posts. To edit what is added, click this ⋮ icon found on its right.",
    hidden,
    type: "array",
    of: [{ type: "reference", to: { type: "post" } }],
  };
};

export const acceptButton = (hidden) => {
  return {
    name: "acceptButtonLabel",
    hidden,
    title: "Accept button label",
    description: "Add accept button label by typing in the text field below",
    type: "string",
  };
};

export const declineButton = (hidden) => {
  return {
    name: "declineButtonLabel",
    hidden,
    title: "Decline button label",
    description: "Add decline button label by typing in the text field below",
    type: "string",
  };
};

export const featuredItems = (hidden) => {
  return {
    name: "featuredItems",
    title: "Features",
    description:
      "Click the 'Add item' button to add a feature. If you want to edit added features, click this ⋮ icon found on its right.",
    type: "array",
    hidden,
    of: [
      {
        title: "Features",
        name: "items",
        type: "object",
        fields: [subtitle(), title(), description(), mainImage()],
      },
    ],
  };
};

export const youtubeLink = (hidden) => {
  return {
    title: "Youtube URL",
    name: "youtubeLink",
    description: "Add the youtube video url",
    hidden,
    type: "url",
  };
};

export const rating = (hidden) => {
  return {
    title: "Rating",
    name: "rating",
    description: "Select rating from the dropdown list.",
    hidden,
    type: "string",
    options: {
      list: [
        { title: "1", value: "1" },
        { title: "2", value: "2" },
        { title: "3", value: "3" },
        { title: "4", value: "4" },
        { title: "5", value: "5" },
      ],
    },
  };
};
