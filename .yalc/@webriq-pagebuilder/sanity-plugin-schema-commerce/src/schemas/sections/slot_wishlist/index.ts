import { CustomString } from "./inputComponent/CustomString";
import { FaHeart } from "react-icons/fa";
import { defineType } from "sanity";

// The schema for the slot wishlist section
export default defineType({
  name: "slotWishlist",
  title: "Slot Wishlist",
  icon: FaHeart,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "instruction",
      title: "Instruction",
      // inputComponent: CustomString,
      components: {
        input: CustomString
      },
      type: "string",
    },
  ],
});
