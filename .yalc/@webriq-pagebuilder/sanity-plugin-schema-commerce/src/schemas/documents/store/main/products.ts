/* eslint-disable react/react-in-jsx-scope */
import React from "react";
//import { Link } from "part:@sanity/base/router";
import { Text, Box } from "@sanity/ui";
import { BsFillBagFill } from "react-icons/bs";
import { isSlugUnique } from "../../../../isSlugUnique";
import ProductInputComponent from "../../../../ecwidIntegration/ProductInputComponent";
import { productInfoSchema } from "../../../sections/product_info/schema";
import { initialValue } from "../../../sections/product_info/initialValue";
import { productInfoVariant } from "../../../sections/slot_productInfo/productInfoVariant";
import { client } from "../../../../sanity";
import { defineArrayMember, defineField, defineType } from "sanity";

/** This is the main product page. If a document with the same name is added from overrides/products, it will replace the values here. **/
export default defineType({
  name: "mainProduct",
  title: "Products",
  icon: BsFillBagFill,
  type: "document",
  initialValue: async () => {
    const refDoc = await client.fetch(`*[_type == "slotProductInfo"][0]`);

    return {
      sections: [
        {
          _type: "slotProductInfo",
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
      description: "Add the product name",
      type: "string",
      //inputComponent: ProductInputComponent,
      components: {
        input: ProductInputComponent
      },
      group: "basicInfo",
    }),
    defineField({
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
      group: "basicInfo",
    }),
    defineField({
      name: "price",
      title: "Price",
      description: "Add the base product price",
      type: "number",
      //inputComponent: ProductInputComponent,
      components: {
        input: ProductInputComponent
      },
      group: "basicInfo",
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Add the product description in HTML",
      type: "text",
      //inputComponent: ProductInputComponent,
      components: {
        input: ProductInputComponent
      },
      group: "basicInfo",
    }),
    productInfoVariant("design"),
    defineField({
      title: "Sections",
      name: "sections",
      type: "array",
      group: "design",
      // description: (
      //   <React.Fragment>
      //     <Box paddingY={2}>
      //       <Text size={1}>
      //         By default, a <strong>Slot Product Info</strong> component is
      //         added here as a placeholder. Adding more items below will override
      //         the common design for this Product based from{" "}
      //         <Link
      //           href="/desk/store;commercePages;products"
      //           style={{ textDecoration: `none` }}
      //         >
      //           Store > Commerce Pages > Products
      //         </Link>
      //         .
      //       </Text>
      //     </Box>
      //   </React.Fragment>
      // ),
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
          title: "[SLOT] Product Info",
          name: "slotProductInfo",
          type: "reference",

          readOnly: ({ value }) => {
            return value; // if the slotProductInfo is added here then make it readOnly so it won't be removed
          },
          to: [{ type: "slotProductInfo" }],
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
      name: "ecwidProductId",
      title: "Ecwid Product ID",
      group: "basicInfo",
      description:
        "This field is autogenerated on publish. Only update this field if you want to override where this Product is linked to.",
      type: "number",
    }),
    defineField({
      title: "Update content",
      name: "productInfo",
      type: "object",
      initialValue: initialValue, // add initial value for variants object
      fields: productInfoSchema,
      group: "productInfo",
    }),
    defineField({
      title: "SEO Settings",
      name: "seo",
      description:
        "This will override the common SEO settings from Slot > Commerce Pages > Products",
      type: "seoSettings",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "productInfo.images[0].image",
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
