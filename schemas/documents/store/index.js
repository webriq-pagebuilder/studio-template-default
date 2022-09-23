// default store products and collections
import { default as mainProduct } from "./common/products";
import { default as mainCollection } from "./common/collections";

// overrides the default store products and collections when defined
import { default as productSettings } from "./settings/products";
import { default as collectionSettings } from "./settings/collections";
import { default as cartPage } from "./settings/cart";

const getStore = [
  mainProduct,
  mainCollection,
  productSettings,
  collectionSettings,
  cartPage,
];
export default getStore;
