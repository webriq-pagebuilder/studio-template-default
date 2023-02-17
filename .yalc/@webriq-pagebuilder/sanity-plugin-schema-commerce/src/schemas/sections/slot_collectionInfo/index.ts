import { CustomString } from "./inputComponent/CustomString";
import { MdStar } from "react-icons/md";
import { defineType } from "sanity";

// The schema for the slot collection info section
export default defineType({
  name: "slotCollectionInfo",
  title: "Slot Collection Info",
  icon: MdStar,
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
