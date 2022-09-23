import { BsFillBagFill } from "react-icons/bs";

/** This document will replace the main product sections when ECWID ID is matched **/
export default {
  name: "productSettings",
  title: "Products",
  icon: BsFillBagFill,
  type: "document",
  fields: [
    {
      name: "pid",
      title: "Product ID",
      description: "Add the matching product ECWID ID from Settings > Products",
      type: "string",
    },
    {
      title: "Sections",
      name: "sections",
      description:
        "Added sections here will replace ALL the sections of the same ECWID ID in Settings > Products",
      type: "array",
      options: {
        editModal: "fullscreen",
      },
      of: [
        {
          title: "Navigation",
          name: "navigation",
          type: "reference",
          to: [{ type: "navigation" }],
        },
        {
          title: "Header",
          name: "header",
          type: "reference",
          to: [{ type: "header" }],
        },
        {
          title: "Blog",
          name: "blog",
          type: "reference",
          to: [{ type: "blog" }],
        },
        {
          title: "App Promo",
          name: "appPromo",
          type: "reference",
          to: [{ type: "appPromo" }],
        },
        {
          title: "Call To Action",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
        },
        {
          title: "Featured products",
          name: "featuredProducts",
          type: "reference",
          to: [{ type: "featuredProducts" }],
        },
        {
          title: "Cart",
          name: "cart",
          type: "reference",
          to: [{ type: "cartSection" }],
        },
        {
          title: "Pricing",
          name: "pricing",
          type: "reference",
          to: [{ type: "pricing" }],
        },
        {
          title: "Product Info",
          name: "productInfo",
          type: "reference",
          to: [{ type: "productInfo" }],
        },
        {
          title: "Contact",
          name: "contact",
          type: "reference",
          to: [{ type: "contact" }],
        },
        {
          title: "Cookies",
          name: "cookies",
          type: "reference",
          to: [{ type: "cookies" }],
        },
        {
          title: "Faqs",
          name: "faqs",
          type: "reference",
          to: [{ type: "faqs" }],
        },
        {
          title: "Features",
          name: "features",
          type: "reference",
          to: [{ type: "features" }],
        },
        {
          title: "How It Works",
          name: "howItWorks",
          type: "reference",
          to: [{ type: "howItWorks" }],
        },
        {
          title: "Logo Cloud",
          name: "logoCloud",
          type: "reference",
          to: [{ type: "logoCloud" }],
        },
        {
          title: "Newsletter",
          name: "newsletter",
          type: "reference",
          to: [{ type: "newsletter" }],
        },
        {
          title: "Portfolio",
          name: "portfolio",
          type: "reference",
          to: [{ type: "portfolio" }],
        },
        {
          title: "Statistics",
          name: "stats",
          type: "reference",
          to: [{ type: "stats" }],
        },
        {
          title: "Sign In Sign Up",
          name: "signInSignUp",
          type: "reference",
          to: [{ type: "signInSignUp" }],
        },
        {
          title: "Team",
          name: "team",
          type: "reference",
          to: [{ type: "team" }],
        },
        {
          title: "Testimonial",
          name: "testimonial",
          type: "reference",
          to: [{ type: "testimonial" }],
        },
        {
          title: "Text Component",
          name: "textComponent",
          type: "reference",
          to: [{ type: "textComponent" }],
        },
        {
          title: "Footer",
          name: "footer",
          type: "reference",
          to: [{ type: "footer" }],
        },
      ],
    },
  ],
};
