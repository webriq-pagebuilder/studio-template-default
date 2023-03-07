import pages from "./documents/pages"
import { mergeReplaceAndAdd } from "../src/utils";

import { baseSchema } from "@webriq-pagebuilder/sanity-plugin-schema-default"
const baseSchemaArray = Object.values(baseSchema)

import blogSchema from "@webriq-pagebuilder/sanity-plugin-schema-blog"
const blogSchemaArray = Object.values(blogSchema)

import commerceSchema from "@webriq-pagebuilder/sanity-plugin-schema-commerce";
const commerceSchemaArray = Object.values(commerceSchema);

const allSchemas = mergeReplaceAndAdd(baseSchemaArray, commerceSchemaArray);

export const schemaTypes = [pages, ...allSchemas, ...blogSchemaArray];

/** 
 * When adding custom components import the custom file and define new variable for schemaTypes
 * 
 * Example: 
 * 
 *  import customSchema from "./custom"
    const customSchemaArray = Object.values(customSchema)
    const updatedSchema = mergeReplaceAndAdd(allSchemas, customSchemaArray);

    export const schemaTypes = [pages, ...updatedSchema, ...blogSchemaArray]
* 
*/