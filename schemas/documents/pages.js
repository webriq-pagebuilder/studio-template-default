import { MdLibraryBooks } from "react-icons/md"
// import Template from "../common/template"

// const templates = [
//   {
//     name: "Default",
//   },
//   {
//     name: "Metis",
//   },
// ]

// const rootInputComponent = props => {
//   return Template(props, templates)
// }

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
      validation: Rule => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    // {
    //   title: "Sections",
    //   name: "sections",
    //   // inputComponent: rootInputComponent,
    //   type: "object",
    //   fields: [
    //     {
    //       title: "Default Template",
    //       name: "Default",
    //       type: "array",
    //       options: {
    //         editModal: "fullscreen",
    //       },
    //       of: [
    //         { type: "navigation" },
    //         { type: "header" },
    //         { type: "footer" },
    //         { type: "features" },
    //         { type: "howItWorks" },
    //         { type: "testimonial" },
    //         { type: "newsletter" },
    //         { type: "pricing" },
    //         { type: "blog" },
    //         { type: "portfolio" },
    //         { type: "faqs" },
    //         { type: "contact" },
    //         { type: "callToAction" },
    //         { type: "team" },
    //         { type: "stats" },
    //         { type: "appPromo" },
    //         { type: "cookies" },
    //         { type: "logoCloud" },
    //       ],
    //     },
    //     // {
    //     //   title: "Metis Template",
    //     //   name: "Metis",
    //     //   type: "array",
    //     //   options: {
    //     //     editModal: "fullscreen",
    //     //   },
    //     //   of: [{ type: "footer" }],
    //     // },
    //   ],
    // },
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
  ],
}
