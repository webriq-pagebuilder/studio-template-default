import defaultResolve from "part:@sanity/base/document-badges";

import { LiveURLBadge } from "./badges/LiveURLBadge";
import { SectionBadge } from "./badges/sectionBadge";

export default function resolveDocumentBadges(props) {
  return [...defaultResolve(props), LiveURLBadge, SectionBadge];
}
