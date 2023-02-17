import {
  defaultLogo,
  defaultLinks,
  defaultButton,
} from "@webriq-pagebuilder/sanity-plugin-schema-default/lib/schemas/common/defaults";
import { nanoid } from "nanoid";

export default {
  banner: [
    {
      _key: nanoid(),
      _type: "block",
      children: [
        {
          _key: "6f20d4af2ce0",
          _type: "span",
          marks: [],
          text: "Hi, you're new here! Get 20% off card!",
        },
      ],
      markDefs: [],
      style: "normal",
    },
  ],
  logo: defaultLogo(
    "image-7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833-png"
  ),
  routes: defaultLinks([
    "Start",
    "About Us",
    "Services",
    "Platform",
    "Testimonials",
  ]),
  primaryButton: defaultButton("Sign In"),
  secondaryButton: defaultButton("Sign Up"),
};
