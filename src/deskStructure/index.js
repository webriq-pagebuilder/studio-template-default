import S from "@sanity/desk-tool/structure-builder"

import pages from "./pages"

export default () => S.list().title("Content").items([pages])
