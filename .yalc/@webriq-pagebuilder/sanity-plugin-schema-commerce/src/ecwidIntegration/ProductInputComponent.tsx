/* eslint-disable no-console */
import React from "react";
import { TextArea, TextInput, Stack, Text, Card } from "@sanity/ui";
import { payload, ecwidApiUrl } from "./config";
import { nanoid } from "nanoid";
import { set, unset, useFormValue } from "sanity";
import { client } from "../sanity";

export default function ProductInputComponent (props) {
  const {
    onChange, 
    value = '', 
    schemaType,
    elementProps: {
      id,
      onBlur,  
      onFocus,
      placeholder,
      readOnly,
      ref,
      // value
    }
  } = props

  const [state, setState] = React.useState("idle"); // idle > fetching > done | error

  // Actual name value of the schema field instead of `text`, `string`, `number` which I think is a bug in Sanity itself
  const currentSchemaFieldName = id;

  // Creates a unique ID for our input
  const inputId = nanoid();

  // for Ecwid data
  const ecwidProductId = useFormValue(["ecwidProductId"]);
  const documentId = useFormValue(["_id"]);

  React.useEffect(() => {
    if (ecwidProductId) {
      setState("fetching");
      fetch(`${ecwidApiUrl}/${ecwidProductId}`, payload)
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.statusText);
          }

          return res.json();
        })
        .then((product) => product?.[currentSchemaFieldName]) // we just need the ecwid value on field
        .then(async (currentEcwidValue) => {
          // check if it matches current Sanity field value
          if (currentEcwidValue !== value) {
            console.log(
              `[INFO] Out of sync value! Updating '${currentSchemaFieldName}' from '${value}' to '${currentEcwidValue}'...`
            );

            // update value if it doesn't match
            await client
              .patch(documentId)
              .set({
                [currentSchemaFieldName]: currentEcwidValue,
              })
              .commit() // perform the patch and return a promise
              // eslint-disable-next-line max-nested-callbacks
              .then(() => {
                console.log(
                  `Updated product with latest data from Ecwid store...`
                );
              });
          }

          console.log("[INFO] Nothing to do! Values are up to date... Yay");
        })
        .then(() => setState("done"))
        .catch((err) => {
          console.error("[ERR] Error fetching ECWID product details", err);
          setState("error");
        });
    }
  }, [ecwidProductId]);

  // Creates a change handler for patching data
  const handleChange = React.useCallback(
    // useCallback will help with performance
    (value) => {
      let inputValue; 

      // make sure the price value type is a number
      if(typeof value === "string" && schemaType === "number") {
        inputValue = parseFloat(value)
      } else {
        inputValue = value
      }

      onChange(inputValue !== "" ? set(inputValue) : unset())
    },
    [onChange]
  );

  return (
    <Stack space={2}>
      <MaybeTextInputOrTextArea
        id={inputId}
        onChange={handleChange}
        value={value || ""} // Current field value
        readOnly={["fetching"].includes(state) || readOnly} // If "readOnly" is defined make this field read only
        placeholder={placeholder} // If placeholder is defined, display placeholder text
        onFocus={onFocus} // Handles focus events
        onBlur={onBlur} // Handles blur events
        ref={ref}
        type={schemaType}
      />

      {state === "error" && (
        <Card padding={[2]} radius={2} shadow={1} tone="caution">
          <Text align="left" size={[1]}>
            Caution: Unable to fetch latest product info! Current value might
            override product on Ecwid if they're not the same which is not
            what you want. Please, proceed with caution...
          </Text>
        </Card>
      )}
    </Stack>
  );
}

const MaybeTextInputOrTextArea = (props) => {
  const { type, ...rest } = props;

  if (type.name === "text") {
    const defaultTextAreaRowCount = 10;
    rest["value"] = rest.value.replace(/(<.*?>)|\s+/g, " ");

    return <TextArea {...rest} rows={defaultTextAreaRowCount} />;
  }
  if (["string", "number"].includes(type.name)) {
    return <TextInput {...rest} />;
  }

  return <Text>Unsupported type! Only string and text is supported...</Text>;
};