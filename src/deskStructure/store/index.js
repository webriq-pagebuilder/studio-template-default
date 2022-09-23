import S from "@sanity/desk-tool/structure-builder";
import { GiShop } from "react-icons/gi";
import { mainProduct, mainCollection } from "./common";
import { recordOfCollections, recordOfProducts } from "./records";
import cartPage from "./cart";
import { MdSettings } from "react-icons/md";

export default S.listItem()
  .title("Store")
  .icon(GiShop)
  .child(
    S.list()
      .title("Store")
      .items([
        recordOfProducts,
        recordOfCollections,
        S.divider(),
        S.listItem()
          .title("Settings")
          .icon(MdSettings)
          .child(
            S.list()
              .title("Settings")
              .items([mainProduct, mainCollection, cartPage])
          ),
      ])
  );
