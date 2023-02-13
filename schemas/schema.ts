import pages from "./documents/pages"
// import { mergeReplaceAndAdd } from "../src/utils";

import baseSchema from "@webriq-pagebuilder/sanity-plugin-schema-default"
const baseSchemaArray = Object.values(baseSchema)

import blogSchema from "@webriq-pagebuilder/sanity-plugin-schema-blog"
const blogSchemaArray = Object.values(blogSchema)

// import commerceSchema from "@webriq-pagebuilder/sanity-plugin-schema-commerce";
// const commerceSchemaArray = Object.values(commerceSchema);

// const allSchemas = mergeReplaceAndAdd(baseSchemaArray, commerceSchemaArray);

//export default [pages, ...allSchemas, ...blogSchemaArray];
export const schemaTypes = [pages, ...baseSchemaArray, ...blogSchemaArray]
