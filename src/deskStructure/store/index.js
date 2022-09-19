import S from "@sanity/desk-tool/structure-builder";
import { GiShop } from "react-icons/gi";
import { mainProduct, mainCollection } from "./main";
import { overridesProduct, overridesCollection } from "./overrides";
import cart from "./cart";
import checkout from "./checkout";
import { MdSettings } from "react-icons/md";

export default S.listItem()
  .title("Store")
  .icon(GiShop)
  .child(
    S.list()
      .title("Store")
      .items([
        overridesProduct,
        overridesCollection,
        S.divider(),
        S.listItem()
          .title("Settings")
          .icon(MdSettings)
          .child(
            S.list()
              .title("Settings")
              .items([mainProduct, mainCollection, cart, checkout])
          ),
      ])
  );
