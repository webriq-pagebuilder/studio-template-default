// default store products and collections
import { default as mainProduct } from "./main/products";
import { default as mainCollection } from "./main/collections";

// overrides the default store products and collections when defined
import { default as overridesProduct } from "./overrides/products";
import { default as overridesCollection } from "./overrides/collections";

// other store items
import { default as cart } from "./cart";
import { default as checkout } from "./checkout";

const getStore = [
  mainProduct,
  mainCollection,
  overridesProduct,
  overridesCollection,
  cart,
  checkout,
];
export default getStore;
