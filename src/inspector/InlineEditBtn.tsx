import { ArrowTopRightIcon } from "@sanity/icons"
import { lazy } from "react"
import { DocumentInspector } from "sanity"

const InlineEditBtn: DocumentInspector = {
  name: "InlineEditBtn",
  useMenuItem: () => ({
    icon: ArrowTopRightIcon,
    title: "Launch LIVE Edit",
    showAsAction: true,
  }),
  component: lazy(() => import("./LaunchPreview")),
}

export default InlineEditBtn
