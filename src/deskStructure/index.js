import S from "@sanity/desk-tool/structure-builder";
import pages from "./pages";

const hiddenTypes = [
  "media.tag",
  "category",
  "page",
  "post",
  "author",
  "navigation",
  "blog",
  "appPromo",
  "callToAction",
  "contact",
  "cookies",
  "faqs",
  "features",
  "footer",
  "header",
  "howItWorks",
  "logoCloud",
  "portfolio",
  "pricing",
  "stats",
  "signInSignUp",
  "team",
  "testimonial",
  "textComponent",
  "newsletter",
];
export default () =>
  S.list()
    .title("Content")
    .items([
      pages,
      ...S.documentTypeListItems().filter(
        (listItem) => !hiddenTypes.includes(listItem.getId())
      ),
    ]);
