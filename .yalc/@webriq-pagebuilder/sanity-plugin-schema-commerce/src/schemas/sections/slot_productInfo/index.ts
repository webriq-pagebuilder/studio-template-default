import { CustomString } from "./inputComponent/CustomString";
import { RiPriceTag2Fill } from "react-icons/ri";
import { defineType } from "sanity";

// The schema for the slot product info section
export default defineType({
  name: "slotProductInfo",
  title: "Slot Product Info",
  icon: RiPriceTag2Fill,
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
