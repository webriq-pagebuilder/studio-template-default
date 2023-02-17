import {
  logo,
  primaryButton,
  routes,
  secondaryButton,
  blockContentNormalStyle,
} from "../../../common/fields";
import { hideIfVariantIn } from "../../../common/hideIfVariantIn";

export const navigationSchema = [
  blockContentNormalStyle(
    "banner",
    "Banner",
    "Add promo banner above navigation menu",
    hideIfVariantIn(["variant_a", "variant_b", "variant_c", "variant_d"])
  ),
  logo(),
  routes(),
  primaryButton(hideIfVariantIn(["variant_e"])),
  secondaryButton(hideIfVariantIn(["variant_e"])),
];
