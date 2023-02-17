import { FaHeart } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

/** This document will replace the main product sections when ECWID ID is matched **/
export default defineType({
  name: "wishlistPage",
  title: "Wishlist",
  icon: FaHeart,
  type: "document",
  groups: [
    {
      name: "design",
      title: "Design",
      default: true,
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "wishlistSectionVariant",
      type: "wishlistSectionVariant",
      group: "design",
    }),
    defineField({
      title: "Sections",
      name: "sections",
      description: "Add the sections to display for the wishlist page",
      type: "array",
      group: "design",
      of: [
        defineArrayMember({
          title: "Navigation",
          name: "navigation",
          type: "reference",
          to: [{ type: "navigation" }],
        }),
        defineArrayMember({
          title: "Header",
          name: "header",
          type: "reference",
          to: [{ type: "header" }],
        }),
        defineArrayMember({
          title: "Blog",
          name: "blog",
          type: "reference",
          to: [{ type: "blog" }],
        }),
        defineArrayMember({
          title: "App Promo",
          name: "appPromo",
          type: "reference",
          to: [{ type: "appPromo" }],
        }),
        defineArrayMember({
          title: "Call To Action",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
        }),
        defineArrayMember({
          title: "Featured products",
          name: "featuredProducts",
          type: "reference",
          to: [{ type: "featuredProducts" }],
        }),
        defineArrayMember({
          title: "Cart",
          name: "cartSection",
          type: "reference",
          to: [{ type: "slotCart" }],
        }),
        defineArrayMember({
          title: "[SLOT] Wishlist",
          name: "slotWishlist",
          type: "reference",
          to: [{ type: "slotWishlist" }],
          readOnly: ({ value }) => {
            return value; // if the slotCart is added here then make it readOnly so it won't be removed
          },
        }),
        defineArrayMember({
          title: "Pricing",
          name: "pricing",
          type: "reference",
          to: [{ type: "pricing" }],
        }),
        defineArrayMember({
          title: "Contact",
          name: "contact",
          type: "reference",
          to: [{ type: "contact" }],
        }),
        defineArrayMember({
          title: "Cookies",
          name: "cookies",
          type: "reference",
          to: [{ type: "cookies" }],
        }),
        defineArrayMember({
          title: "Faqs",
          name: "faqs",
          type: "reference",
          to: [{ type: "faqs" }],
        }),
        defineArrayMember({
          title: "Features",
          name: "features",
          type: "reference",
          to: [{ type: "features" }],
        }),
        defineArrayMember({
          title: "How It Works",
          name: "howItWorks",
          type: "reference",
          to: [{ type: "howItWorks" }],
        }),
        defineArrayMember({
          title: "Logo Cloud",
          name: "logoCloud",
          type: "reference",
          to: [{ type: "logoCloud" }],
        }),
        defineArrayMember({
          title: "Newsletter",
          name: "newsletter",
          type: "reference",
          to: [{ type: "newsletter" }],
        }),
        defineArrayMember({
          title: "Portfolio",
          name: "portfolio",
          type: "reference",
          to: [{ type: "portfolio" }],
        }),
        defineArrayMember({
          title: "Statistics",
          name: "stats",
          type: "reference",
          to: [{ type: "stats" }],
        }),
        defineArrayMember({
          title: "Sign In Sign Up",
          name: "signInSignUp",
          type: "reference",
          to: [{ type: "signInSignUp" }],
        }),
        defineArrayMember({
          title: "Team",
          name: "team",
          type: "reference",
          to: [{ type: "team" }],
        }),
        defineArrayMember({
          title: "Testimonial",
          name: "testimonial",
          type: "reference",
          to: [{ type: "testimonial" }],
        }),
        defineArrayMember({
          title: "Text Component",
          name: "textComponent",
          type: "reference",
          to: [{ type: "textComponent" }],
        }),
        defineArrayMember({
          title: "Footer",
          name: "footer",
          type: "reference",
          to: [{ type: "footer" }],
        }),
      ],
    }),
    defineField({
      title: "SEO Settings",
      name: "seo",
      description: "This will be the SEO Settings for the Wishlist page.",
      type: "seoSettings",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      subtitle: "sections.length",
    },
    prepare({ subtitle }) {
      return {
        title: "Wishlist page",
        subtitle: `Added sections: ${subtitle}`,
      };
    },
  },
});
