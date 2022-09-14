import { MdTune } from "react-icons/md";

export default {
  title: "Site Settings",
  name: "siteSettings",
  icon: MdTune,
  type: "document",
  fields: [
    {
      title: "Sections",
      name: "sections",
      description:
        "These will be the default sections on all shop pages that have not set their own",
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
          title: "Pricing",
          name: "pricing",
          type: "reference",
          to: [{ type: "pricing" }],
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
    {
      title: "SEO Settings",
      name: "seo",
      description:
        "These will be the default SEO on all shop pages that have not set their own",
      type: "seoSettings",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "description",
      media: "productPreview.image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
