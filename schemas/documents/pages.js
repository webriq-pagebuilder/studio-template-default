import { MdLibraryBooks } from "react-icons/md";

export default {
  title: "Page",
  name: "page",
  icon: MdLibraryBooks,
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      description: "What's this page is for?",
      type: "string",
      required: true,
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "On what URL should this be published? e.g: /heres-a-sample-url",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      options: {
        editModal: "fullscreen",
      },
      of: [
        { type: "navigation" },
        { type: "header" },
        { type: "footer" },
        { type: "features" },
        { type: "howItWorks" },
        { type: "testimonial" },
        { type: "newsletter" },
        { type: "pricing" },
        { type: "blog" },
        { type: "portfolio" },
        { type: "faqs" },
        { type: "contact" },
        { type: "callToAction" },
        { type: "team" },
        { type: "stats" },
        { type: "appPromo" },
        { type: "cookies" },
        { type: "logoCloud" },
        { type: "signInSignUp" },
        { type: "textComponent" },
        {
          title: "Reusable Section",
          name: "reusableSection",
          type: "reference",
          to: [{ type: "reusableSections" }],
        },
        {
          title: "Reusable Header",
          name: "reusableHeader",
          type: "reference",
          to: [{ type: "reusableHeader" }],
        },
      ],
    },
    {
      title: "SEO Settings",
      name: "seo",
      type: "seoSettings",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
};
