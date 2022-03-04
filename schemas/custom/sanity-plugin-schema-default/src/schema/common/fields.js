import { BsCardChecklist, BsTag } from "react-icons/bs";

export const external_link = {
  name: "external_link",
  title: "External Link",
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

export const internal_link = {
  name: "internal_link",
  title: "Internal Link",
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

export const subtitle = {
  name: "subtitle",
  title: "Subtitle",
  description: "A small text above your title",
  type: "string",
};

export const title = {
  name: "heading",
  title: "Heading",
  placeholder: "Build & Launch without problems",
  type: "string",
};

export const description = {
  name: "description",
  title: "Description",
  placeholder:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
  type: "string",
};

export const arrayOfTitleAndDescription = (
  displayTitle,
  displayDescription
) => {
  return {
    title: displayTitle,
    name: "arrayOfTitleAndDescription",
    description: displayDescription,
    type: "array",
    of: [
      {
        type: "object",
        icon: BsCardChecklist,
        title: "Features",
        fields: [title, description],
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

export const arrayOfTitleAndText = (displayTitle, displayDescription) => {
  return {
    name: "arrayOfTitleAndText",
    title: displayTitle,
    description: displayDescription,
    type: "array",
    of: [
      {
        type: "object",
        fields: [title, plainText],
      },
    ],
  };
};

export const plainText = {
  name: "plainText",
  title: "Plain text",
  description: "Add a block of text as content.",
  type: "text",
};

export const blockContentNormalStyle = (name, title, description) => {
  return {
    name: name,
    title: title,
    description: description,
    type: "array",
    of: [
      {
        type: "block",
        styles: [{ title: "Normal", value: "normal" }],
      },
    ],
  };
};

export const primaryButton = {
  name: "primaryButton",
  title: "Primary Button",
  description:
    "The primary button draws more attention to users. Click the ► to expand and fill out the details.",
  type: "conditionalLink",
  options: {
    collapsible: true,
    collapsed: true,
  },
};

export const secondaryButton = {
  name: "secondaryButton",
  title: "Secondary Button",
  type: "conditionalLink",
  description:
    "The secondary button acts as an alternative option for users to take action. Click the ► to expand and fill out the details.",
  options: {
    collapsible: true,
    collapsed: true,
  },
};

// Use this schema for adding 1 image only
export const mainImage = {
  title: "Add an Image",
  name: "mainImage",
  type: "image",
  options: { hotspot: true },
};

// Use this schema for adding more than 1 image
export const arrayOfImages = {
  name: "images",
  title: "Add Images",
  type: "array",
  of: [{ type: "image", options: { hotspot: true } }],
  options: { layout: "grid" },
};

export const tags = (displayTitle, displayDescription) => {
  let defaultTitle = !displayTitle ? "Tags" : displayTitle;
  let defaultDescription = !displayDescription
    ? "Press Enter when finished typing off a keyword or a sentence."
    : displayDescription;
  return {
    title: defaultTitle,
    name: "tags",
    description: defaultDescription,
    type: "array",
    of: [{ type: "string" }],
    options: {
      layout: "tags",
    },
  };
};

export const logo = {
  name: "logo",
  title: "Logo",
  description: "Add an image of your brand",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Add Image",
      description: "Start adding an image here",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alt",
      title: "Alternative text",
      description: `Text to display when image can't be loaded`,
      type: "string",
    },
  ],
};

export const dateAdded = {
  title: "Date Added",
  name: "dateAdded",
  type: "date",
};

export const category = {
  title: "Category",
  name: "category",
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

export const postedBy = {
  title: "Posted By",
  name: "postedBy",
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

export const customText = (
  name,
  displayTitle,
  displayDescription,
  displayPlaceholder,
  numberOfInputFields
) => {
  if (numberOfInputFields === 1) {
    return {
      name: name,
      title: displayTitle,
      description: displayDescription,
      placeholder: displayPlaceholder,
      type: "string",
    };
  } else {
    return {
      name: name,
      title: displayTitle,
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
              title: "Email Information",
              name: "emailInfo",
              placeholder: "hello@gamil.com",
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
  displayPlaceholder
) => {
  return {
    name: name,
    title: displayTitle,
    description: displayDescription,
    placeholder: displayPlaceholder,
    type: "string",
  };
};

export const customDropdown = (
  name,
  displayTitle,
  displayDescription,
  values
) => {
  return {
    name: name,
    title: displayTitle,
    description: displayDescription,
    type: "string",
    options: {
      list: values,
    },
  };
};

export const socialLinks = {
  type: "object",
  name: "socialLinks",
  description:
    "This will display an Icon in the page. When it clicked it will redirect to the page it provided.",
  title: "Social Links",
  fields: [
    {
      type: "url",
      title: "Facebook Link",
      name: "fbLink",
    },
    {
      type: "url",
      title: "Twitter Link",
      name: "twitterLink",
    },
    {
      type: "url",
      title: "Instagram Link",
      name: "instagramLink",
    },
  ],
};

export const arrayOfText = (
  name,
  displayTitle,
  displayDescription,
  displayPlaceholder
) => {
  return {
    name: name,
    title: displayTitle,
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

export const askedQuestions = {
  name: "askedQuestions",
  title: "Questions and Answers",
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

export const faqsWithCategory = {
  name: "faqsWithCategory",
  title: "FAQs with Categories",
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
        askedQuestions,
      ],
      preview: {
        select: {
          title: "category",
        },
      },
    },
  ],
};

export const portfoliosWithCategories = (name, title, description, items) => {
  return {
    name: name,
    title: title,
    description: description,
    type: "array",
    of: [
      {
        type: "object",
        icon: BsTag,
        fields: [
          {
            name: "category",
            title: "Add a category",
            description: "Add a label to identify what this category is for.",
            type: "string",
          },
          items,
          {
            name: "button",
            title: "Change button label",
            description: "Update the default button text",
            placeholder: "View More Projects",
            type: "string",
          },
        ],
      },
    ],
  };
};

export const statItems = {
  name: "statItems",
  title: "Add data and label",
  type: "array",
  of: [
    {
      type: "object",
      fields: [
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

export const webriqForms = {
  title: "Form",
  name: "form",
  description: "Specify the fields you want to show in your forms.",
  type: "webriqForm",
};
