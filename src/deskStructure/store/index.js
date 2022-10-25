import S from "@sanity/desk-tool/structure-builder";
import { GiShop } from "react-icons/gi";
import { mainProduct, mainCollection } from "./main";
import {
  collectionSettings,
  productSettings,
  cartPage,
  wishlistPage,
  searchPage,
} from "./pages";
import { MdSettings } from "react-icons/md";

export default S.listItem()
  .title("Store")
  .icon(GiShop)
  .child(
    S.list()
      .title("Store")
      .items([
        mainProduct,
        mainCollection,
        S.divider(),
        S.listItem()
          .title("Commerce Pages")
          .icon(MdSettings)
          .child(
            S.list()
              .title("Commerce Pages")
              .items([
                productSettings,
                collectionSettings,
                cartPage,
                wishlistPage,
                searchPage,
              ])
          ),
      ])
  );
