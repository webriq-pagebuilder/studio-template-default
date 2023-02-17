/* eslint-disable react/react-in-jsx-scope */
import React from "react";
//import { Link } from "part:@sanity/base/router";
import { Text, Box } from "@sanity/ui";
import { BsFillTagFill } from "react-icons/bs";
import { isSlugUnique } from "../../../../isSlugUnique";
import { products } from "../../../common/fields";
import { client } from "../../../../sanity";
import { nanoid } from "nanoid";
import { collectionInfoVariant } from "../../../sections/slot_collectionInfo/collectionInfoVariant";
import { defineArrayMember, defineField, defineType } from "sanity";

/** This is the main collection page. If a document with the same name is added from overrides/collections, it will replace the values here. **/
export default defineType({
  name: "mainCollection",
  title: "Collections",
  icon: BsFillTagFill,
  type: "document",
  initialValue: async () => {
    const refDoc = await client.fetch(`*[_type == "slotCollectionInfo"][0]`);
    const refProducts = await client.fetch(`*[_type == "mainProduct"]`);

    return {
      products:
        refProducts &&
        refProducts?.slice(0, 3)?.map((product) => {
          return {
            _key: nanoid(),
            _ref: product?._id,
            _type: "reference",
          };
        }),
      sections: [
        {
          _type: "slotCollectionInfo",
          _ref: refDoc?._id,
        },
      ],
    };
  },
  groups: [
    {
      name: "basicInfo",
      title: "Basic Info",
      default: true,
    },
    {
      name: "productInfo",
      title: "Product Info",
    },
    {
      name: "design",
      title: "Design",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      title: "Name",
      name: "name",
      description: "Add the category name",
      type: "string",
      group: "basicInfo",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      group: "basicInfo",
      description:
        "On what URL this be published? e.g: /collections/best-sellers",
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
    }),
    products({ group: "basicInfo" }),
    collectionInfoVariant("design"),
    defineField({
      title: "Sections",
      name: "sections",
      // description: (
      //   <React.Fragment>
      //     <Box paddingY={2}>
      //       <Text size={1}>
      //         By default, a <strong>Slot Collection</strong> component is added
      //         here as a placeholder. Adding more items below will override the
      //         common design for this Collection based from{" "}
      //         <Link
      //           href="/desk/store;commercePages;collections"
      //           style={{ textDecoration: `none` }}
      //         >
      //           Store > Commerce Pages > Collections
      //         </Link>
      //         .
      //       </Text>
      //     </Box>
      //   </React.Fragment>
      // ),
      group: "design",
      type: "array",
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
          title: "Cart",
          name: "cartSection",
          type: "reference",
          to: [{ type: "slotCart" }],
        }),
        defineArrayMember({
          title: "Wishlist",
          name: "wishlistSection",
          type: "reference",
          to: [{ type: "slotWishlist" }],
        }),
        defineArrayMember({
          title: "Featured products",
          name: "featuredProducts",
          type: "reference",
          to: [{ type: "featuredProducts" }],
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
        "This will override the common SEO settings from Slot > Commerce Pages > Collections",
      type: "seoSettings",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
