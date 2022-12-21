import {
  DeleteAction,
  DuplicateAction,
  UnpublishAction,
  DiscardChangesAction,
} from "part:@sanity/base/document-actions";
import createProductsPublishAction from "./actions/createProductsPublishAction";
import createMainProductPublishAction from "./actions/createMainProductPublishAction";
import { SANITY_STUDIO_IN_CSTUDIO } from "../config";

export default function resolveDocumentActions(props) {
  const { type } = props;

  if (
    [
      "mainProduct",
      "mainCollection",
      "cartPage",
      "wishlistPage",
      "searchPage",
      "productSettings",
      "collectionSettings",
      // c-studio sections
      "allProducts",
      "featuredProducts",
      "cartSection",
      "wishlistSection",
      "productInfo",
      // c-studio sections only in Store > Pages Products/Collections
      "dynamic_featuredProducts",
      "dynamic_productInfo",
      // c-studio sections only in Pages
      "pages_featuredProducts",
      "pages_productInfo",
    ]?.includes(type) &&
    SANITY_STUDIO_IN_CSTUDIO === "false"
  ) {
    // only show the publish action button (hide the button beside "Publish") for C-Studio elements when C-Studio is disabled
    return [createProductsPublishAction];
  } else if (
    [
      "cartPage",
      "wishlistPage",
      "searchPage",
      "productSettings",
      "collectionSettings",
    ]?.includes(type)
  ) {
    return [createProductsPublishAction, DiscardChangesAction, UnpublishAction];
  } else if (type === "mainProduct") {
    // use a custom publish action function for mainProduct documents
    return [
      createMainProductPublishAction,
      DiscardChangesAction,
      UnpublishAction,
      DuplicateAction,
      DeleteAction,
    ];
  }

  // else for other document types use these document actions
  return [
    createProductsPublishAction,
    DiscardChangesAction,
    UnpublishAction,
    DuplicateAction,
    DeleteAction,
  ];
}
