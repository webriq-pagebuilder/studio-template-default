import { defineField, defineType } from "sanity"
import { MdLibraryBooks } from "react-icons/md"
import { CustomSeo } from "./CustomSeo"

export default defineType({
  title: "SEO Settings",
  name: "seoSchema",
  icon: MdLibraryBooks,
  type: "object",
  components: {
    input: CustomSeo,
  },
  fields: [
    defineField({
      title: "Title",
      name: "seoTitle",
      description: "This will override the page title",
      type: "string",
    }),

    defineField({
      title: "Keywords",
      name: "seoKeywords",
      description: "Separate with commas",
      type: "string",
    }),

    defineField({
      title: "Synonyms",
      name: "seoSynonyms",
      description: "These are similar words to inform the SEO review",
      type: "string",
    }),

    defineField({
      title: "Description",
      name: "seoDescription",
      type: "text",
    }),

    defineField({
      title: " Image",
      name: "seoImage",
      type: "image",
    }),
  ],
})
