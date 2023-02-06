import pages from "./documents/pages"

// import { mergeReplaceAndAdd } from "../src/utils";

// import commerceSchema from "@webriq-pagebuilder/sanity-plugin-schema-commerce";
// const commerceSchemaArray = Object.values(commerceSchema);

// import baseSchema from "@webriq-pagebuilder/sanity-plugin-schema-default";
// const baseSchemaArray = Object.values(baseSchema);

// import blogSchema from "@webriq-pagebuilder/sanity-plugin-schema-blog";
// const blogSchemaArray = Object.values(blogSchema);

// const allSchemas = mergeReplaceAndAdd(baseSchemaArray, commerceSchemaArray);

//export default [pages, ...allSchemas, ...blogSchemaArray];
export const schemaTypes = [pages]
