import { FiExternalLink } from "react-icons/fi"

import { lazy } from "react"
import { DocumentInspector } from "sanity"

const InlineEditBtn: DocumentInspector = {
  name: "InlineEditBtn",
  useMenuItem: () => ({
    icon: FiExternalLink,
    title: "Launch Inline Editing",
    showAsAction: true,
  }),
  component: lazy(() => import("./LaunchPreview")),
}

export default InlineEditBtn
