import S from "@sanity/desk-tool/structure-builder";
import { BsFillBagFill } from "react-icons/bs";

/** This shows all product pages that will replace the preview of the main product page when their names are matched. **/
export default S.listItem()
  .title("Products")
  .schemaType("productSettings")
  .icon(BsFillBagFill)
  .child(
    S.document()
      .title("Products")
      .schemaType("productSettings")
      .documentId("productSettings")
  );
