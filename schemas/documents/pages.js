import { MdLibraryBooks } from "react-icons/md";

export default {
  title: "Page",
  name: "page",
  icon: MdLibraryBooks,
  type: "document",
  fieldsets: [
    {
      title: "Seo Settings",
      name: "seo",
      options: {
        collapsible: true
      }
    }
  ],
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
      ],
    },
    {
      title: "Title",
      name: "seoTitle",
      description: "Override the page title",
      fieldset: "seo",
      type: "string"
    },
    {
      title: "Keywords",
      name: "keywords",
      description: "Separate with commas",
      fieldset: "seo",
      type: "string"
    },
    {
      title: "Synonyms",
      name: "synonyms",
      description: "Similar words to inform the SEO review",
      fieldset: "seo",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      fieldset: "seo",
      type: "string"
    },
    {
      title: "Image",
      name: "addImage",
      fieldset: "seo",
      type: "image"
    }
  ],
};
