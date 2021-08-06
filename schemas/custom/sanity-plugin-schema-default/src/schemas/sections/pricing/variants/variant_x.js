// import { nanoid } from "nanoid"
import { CgPlayListCheck } from "react-icons/cg";

import {
  arrayOfText,
  customInteger,
  customText,
  description,
  primaryButton,
  subtitle,
  title,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/fields";
import StripeAccountSelect from "../../../../../../inputComponents/stripeAccountSelect";

// export const variant_a = {
//   // _type: 'variant_a',
//   routes: [
//     {
//       text: "Home",
//       _type: "internal_link",
//       _key: nanoid(),
//     },
//     {
//       text: "About",
//       _type: "internal_link",
//       _key: nanoid(),
//     },
//   ],
//   button: [
//     {
//       text: "Login",
//       _type: "internal_link",
//       _key: nanoid(),
//     },
//     {
//       text: "Sign up",
//       _type: "internal_link",
//       _key: nanoid(),
//     },
//   ],
// }

export default {
  title: "3. Update Content",
  description:
    "Refer to above design of the variant chosen and fill in the details below accordingly. 👇",
  name: "variant_x",
  type: "object",
  fields: [
    subtitle,
    title,
    description,
    {
      name: 'stripeAccount',
      title: 'Choose Stripe Account',
      type: 'string',
      inputComponent: StripeAccountSelect
    },
    {
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          title: "Plans",
          name: "planItems",
          icon: CgPlayListCheck,
          fields: [
            customText(
              "planType",
              "Plan Type",
              "e.g. Beginner, Intermediate & Professional",
              "Enter Text Here...",
              1
            ),
            customInteger(
              "monthlyPrice",
              "Monthly Price",
              'Monthly Price of the Plan Type. Enter Number without "$" sign.',
              "Enter a number, accepts number with decimal."
            ),
            customInteger(
              "yearlyPrice",
              "Yearly Price",
              'Yearly Price of the Plan Type. Enter Number without "$" sign.',
              "Enter a number, accepts number with decimal."
            ),
            description,
            arrayOfText(
              "planIncludes",
              "Plan Includes",
              "Add some inclusions for this Plan Type",
              "Add Plan Inclusions Here..."
            ),
            {
              name: "checkoutButtonName",
              title: "Checkout Button Name",
              description:
                "Checkout button link will be automatically provided after this product created",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
