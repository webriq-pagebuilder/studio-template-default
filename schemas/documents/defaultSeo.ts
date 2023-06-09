import { defineField, defineType } from "sanity"
import { MdLibraryBooks } from "react-icons/md"

export default defineType({
  title: "Default Seo",
  name: "defaultSeo",
  icon: MdLibraryBooks,
  type: "document",
  fields: [
    defineField({
      title: "SEO Title",
      name: "defaultSeoTitle",
      description: "This will override the page title",
      type: "string",
    }),
    defineField({
      title: "Keywords",
      name: "defaultSeoKeywords",
      description: "Separate with commas",
      type: "string",
    }),
    defineField({
      title: "Synonyms",
      name: "defaultSeoSynonyms",
      description: "These are similar words to inform the SEO review",
      type: "string",
    }),
    defineField({
      title: "Description",
      name: "defaultSeoDescription",
      type: "text",
    }),
    defineField({
      title: "Image",
      name: "defaultSeoImage",
      type: "image",
    }),
  ],
})
