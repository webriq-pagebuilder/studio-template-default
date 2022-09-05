import { MdShoppingBasket } from "react-icons/md";
import { isSlugUnique } from "../../../src/isSlugUnique";

export default {
  title: "Products",
  name: "products",
  icon: MdShoppingBasket,
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      description: "Add the product name",
      type: "string",
      required: true,
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        "On what URL should this be published? e.g: /heres-a-sample-url",
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          const regex = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;

          if (slug?.current !== undefined) {
            if (regex.test(slug.current)) {
              return `Slug cannot contain these special characters [!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]`;
            }

            if (slug?.current !== slug.current.toLowerCase()) {
              return "Slug must be in lowercase";
            }

            if (slug?.current.indexOf(" ") !== -1) {
              return "Slug cannot contain spaces";
            }
          }

          return true;
        }),
      options: {
        source: "name",
        maxLength: 96,
        isUnique: isSlugUnique,
      },
    },
    {
      name: "pid",
      title: "Product ID",
      type: "string",
    },
    {
      name: "category",
      title: "Product category",
      description: "Select from available categories to group this product",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "productPreview",
      title: "Product preview",
      description: "Add the image preview to display for this product",
      type: "object",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "altText",
          title: "Alternative text",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      description: "Add a product summary or description.",
      type: "text",
    },
    {
      title: "Sections",
      name: "sections",
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
          title: "Shop",
          name: "shop",
          type: "reference",
          to: [{ type: "shop" }],
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
