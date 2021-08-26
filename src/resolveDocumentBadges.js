import defaultResolve from "part:@sanity/base/document-badges";

import { LiveURLBadge } from "./badges/LiveURLBadge";

export default function resolveDocumentBadges(props) {
  return [...defaultResolve(props), LiveURLBadge];
}
