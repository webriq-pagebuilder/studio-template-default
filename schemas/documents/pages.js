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
      ],
    },
    {
      title: "SEO Settings",
      name: "seoSettings",
      type: "seo-tools",
      options: {
        baseUrl: "http://localhost:3000",
        slug(doc) {
          return doc.slug.current
        },
        fetchRemote: true
      }
    }
  ],
};
