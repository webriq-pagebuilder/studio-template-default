/* eslint-disable camelcase */
// Sections
import { default as featuredProducts } from "./schemas/sections/featured_products/featuredProducts";
//import { default as navigation } from "./schemas/sections/navigation/navigation";
import { default as allProducts } from "./schemas/sections/allProducts/allProducts";
import { default as cartSectionVariant } from "./schemas/sections/slot_cart/cartSectionVariant";
import { default as wishlistSectionVariant } from "./schemas/sections/slot_wishlist/wishlistSectionVariant";
import {
  productInfoVariant,
  defaultProductInfoVariant,
} from "./schemas/sections/slot_productInfo/productInfoVariant";
import {
  collectionInfoVariant,
  defaultCollectionInfoVariant,
} from "./schemas/sections/slot_collectionInfo/collectionInfoVariant";

// Sections for page documents
import { default as pages_productInfo } from "./schemas/sections/pages_productInfo/productInfo";

// Slot sections
import { default as slot_productInfo } from "./schemas/sections/slot_productInfo";
import { default as slot_collectionInfo } from "./schemas/sections/slot_collectionInfo";
import { default as slotCart } from "./schemas/sections/slot_cart";
import { default as slotWishlist } from "./schemas/sections/slot_wishlist";

import getStore from "./schemas/documents/store";

const commerceSchema = {
  allProducts,
  featuredProducts,
  //navigation,

  // productInfo section for page documents
  pages_productInfo,

  // slot sections
  slot_productInfo,
  slot_collectionInfo,
  slotCart,
  slotWishlist,

  ...getStore, // all Store documents

  cartSectionVariant,
  wishlistSectionVariant,

  // for Store Products or Collections pages | Design field group variants list
  ...productInfoVariant,
  ...collectionInfoVariant,

  // for Store > Commerce Pages > Products or Collections | Design field group variants list
  ...defaultProductInfoVariant,
  ...defaultCollectionInfoVariant,
};

export default commerceSchema;
