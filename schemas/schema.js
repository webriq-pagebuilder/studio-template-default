// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pages from "./documents/pages";

import { mergeReplaceAndAdd } from "../src/utils";

import baseSchema from "@webriq-pagebuilder/sanity-plugin-schema-default";
import customSchema from "./custom";

const baseSchemaArray = Object.values(baseSchema);
const customSchemaArray = Object.values(customSchema);
const allSchemas = mergeReplaceAndAdd(baseSchemaArray, customSchemaArray);

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([pages, ...allSchemas]),
});
