import React from "react";
import { BsFillTagFill } from "react-icons/bs";
//import { Link } from "part:@sanity/base/router";
import { Text, Box } from "@sanity/ui";
import { defaultCollectionInfoVariant } from "../../../sections/slot_collectionInfo/collectionInfoVariant";
import { defineArrayMember, defineField, defineType } from "sanity";

/** This document will replace the sections from the main collections when ECWID ID is matched **/
export default defineType({
  name: "collectionSettings",
  title: "Collections",
  icon: BsFillTagFill,
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
    defaultCollectionInfoVariant("design"),
    defineField({
      title: "Sections",
      name: "sections",
      // description: (
      //   <React.Fragment>
      //     <Box paddingY={2}>
      //       <Text size={1}>
      //         By default, a <strong>Slot Collection</strong> component is added
      //         here as a placeholder. The sections added here will make up the
      //         common design of the individual Collections pages in{" "}
      //         <Link
      //           href="/desk/store;collections"
      //           style={{ textDecoration: `none` }}
      //         >
      //           Store > Collections
      //         </Link>
      //         .
      //       </Text>
      //     </Box>
      //   </React.Fragment>
      // ),
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
          title: "[SLOT] Collection Info",
          name: "slotCollectionInfo",
          type: "reference",
          readOnly: ({ value }) => {
            return value; // if the slotCollectionInfo is added here then make it readOnly so it won't be removed
          },
          to: [{ type: "slotCollectionInfo" }],
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
      description:
        "This will be the common SEO for Collections. To replace the default values, update the SEO Settings of a specific Collection",
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
        title: "Default Collections page",
        subtitle: `Added sections: ${subtitle}`,
      };
    },
  },
});
