import { MdSearch } from "react-icons/md";

export default {
  title: "SEO Settings",
  name: "seoSettings",
  icon: MdSearch,
  type: "object",
  fields: [
    {
      title: "SEO Title",
      name: "seoTitle",
      description: "This will override the page title",
      type: "string"
    },
    {
      title: "Keywords",
      name: "seoKeywords",
      description: "Separate with commas",
      type: "string"
    },
    {
      title: "Synonyms",
      name: "seoSynonyms",
      description: "These are similar words to inform the SEO review",
      type: "string"
    },
    {
      title: "Description",
      name: "seoDescription",
      type: "text"
    },
    {
      title: "Image",
      name: "seoImage",
      type: "image"
    }
  ]
}