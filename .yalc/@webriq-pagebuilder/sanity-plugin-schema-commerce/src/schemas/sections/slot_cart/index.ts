import { CustomString } from "./inputComponent/CustomString";
import { MdShoppingCart } from "react-icons/md";
import { defineType } from "sanity";

// The schema for the slot cart section
export default defineType({
  name: "slotCart",
  title: "Slot Cart",
  icon: MdShoppingCart,
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
