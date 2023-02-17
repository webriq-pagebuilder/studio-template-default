// default store products and collections
import { default as mainProduct } from "./main/products";
import { default as mainCollection } from "./main/collections";

// overrides the default store products and collections when defined
import { default as productSettings } from "./pages/products";
import { default as collectionSettings } from "./pages/collections";
import { default as cartPage } from "./pages/cart";
import { default as wishlistPage } from "./pages/wishlist";
import { default as searchPage } from "./pages/search";

const getStore = [
  mainProduct,
  mainCollection,
  productSettings,
  collectionSettings,
  cartPage,
  wishlistPage,
  searchPage,
];
export default getStore;
