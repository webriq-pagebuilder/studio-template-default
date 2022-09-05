import S from "@sanity/desk-tool/structure-builder";
import { MdShoppingCart } from "react-icons/md";
import products from "./store/products";
import categories from "./store/categories";
import siteSettings from "./store/siteSettings";

export default S.listItem()
  .title("Store")
  .icon(MdShoppingCart)
  .child(S.list().title("Store").items([products, categories, siteSettings]));
