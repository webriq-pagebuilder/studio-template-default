/* 
  Import plugins with custom changes to its schemas here. 
  The directories point to the index files of schema folders
*
*/
import { default as customSchemaDefault } from "./sanity-plugin-schema-default/src/schemas/sections";

const schemas = {
  ...customSchemaDefault,
};

export default schemas;
