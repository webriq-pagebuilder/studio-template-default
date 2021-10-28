import {
  DeleteAction,
  DuplicateAction,
  UnpublishAction,
  DiscardChangesAction,
} from "part:@sanity/base/document-actions";
import createProductsPublishAction from "./actions/createProductsPublishAction";

export default function resolveDocumentActions() {
  return [
    createProductsPublishAction,
    DiscardChangesAction,
    UnpublishAction,
    DuplicateAction,
  ];
}
