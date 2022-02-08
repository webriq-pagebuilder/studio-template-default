// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pages from "./documents/pages";

import baseSchema from "@webriq-pagebuilder/sanity-plugin-schema-default";
const baseSchemaArray = Object.values(baseSchema);

import blogSchema from "@webriq-pagebuilder/sanity-plugin-schema-blog";
import reusableSections from "./documents/reusableSections";
import reusableHeader from "./custom/sanity-plugin-schema-default/src/schema/sections/header/header";
const blogSchemaArray = Object.values(blogSchema);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    pages,
    reusableSections,
    reusableHeader,
    ...baseSchemaArray,
    ...blogSchemaArray, // added blog schema
  ]),
});
