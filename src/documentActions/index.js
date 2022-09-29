import {
  DeleteAction,
  DuplicateAction,
  UnpublishAction,
  DiscardChangesAction,
} from "part:@sanity/base/document-actions";
import createProductsPublishAction from "./actions/createProductsPublishAction";
import { SANITY_STUDIO_IN_CSTUDIO } from "../config";

export default function resolveDocumentActions(props) {
  const { type } = props;

  if (
    [
      "mainProduct",
      "mainCollection",
      "cartPage",
      "productSettings",
      "collectionSettings",
      // c-studio sections
      "featuredProducts",
      "cartSection",
      "productInfo",
    ]?.includes(type) &&
    SANITY_STUDIO_IN_CSTUDIO === "false"
  ) {
    return [createProductsPublishAction];
  }

  return [
    createProductsPublishAction,
    DiscardChangesAction,
    UnpublishAction,
    DuplicateAction,
    DeleteAction,
  ];
}
