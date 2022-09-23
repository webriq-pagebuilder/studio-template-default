// default store products and collections
import { default as mainProduct } from "./common/products";
import { default as mainCollection } from "./common/collections";

// overrides the default store products and collections when defined
import { default as recordOfProducts } from "./records/products";
import { default as recordOfCollections } from "./records/collections";

// other store items
import { default as cartPage } from "./cart";

const getStore = [
  mainProduct,
  mainCollection,
  recordOfProducts,
  recordOfCollections,
  cartPage,
];
export default getStore;
