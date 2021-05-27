import React from "react"
import { setIfMissing } from "part:@sanity/form-builder/patch-event"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import FormField from "part:@sanity/components/formfields/default"
import { FormBuilderInput } from "part:@sanity/form-builder"

function Variant(props, variants, initialState, defineHeight, defineWidth) {
  // Destructuring Sanity Functions
  const { type, onChange, value, level, focusPath, onFocus, onBlur } = props

  // Create a function that set a value when call
  const createPatchFrom = value =>
    PatchEvent.from(value === "" ? unset() : set(value))

  // Create a data state holder using hooks
  const [data, setData] = React.useState()

  React.useEffect(() => {
    // At first creation value is undefined, if it is it will assign to our data state holder, and we need to tell Sanity that we had to set an initial State for our value by using an onchange handler. Telling Sanity that we had a change on our value. Else else Set the holder to our value
    value === undefined
      ? (setData(initialState), onChange(createPatchFrom(initialState)))
      : setData(value)
  }, [])

  // This function will handle the selection for our images.
  const chosenVariant = (variant, index) => {
    //  We are updating our state holder by what is the variant or image chosen and the index or position inside on our object
    setData(prevState => ({ ...prevState, variant, position: index }))

    // Updating our value base on it's key
    ;(value.variant = variant), (value.position = index)

    // Setting a new value, we need to tell Sanity that we had a change for our variant and position.
    onChange(createPatchFrom(value))
  }

  // This handles our input everytime a user pressed a key
  const handleFieldChange = (field, fieldPatchEvent) => {
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    )
  }

  React.useEffect(() => {
    // We are updating our data holder based on what user being input. if value is undefined, we need to used the data under our stateholder, else we use the default - value
    value &&
      type.fields.map((field, index) =>
        setData(prevState => ({
          ...prevState,
          [field.name]:
            value[type.fields[index].name] === undefined
              ? data[type.fields[index].name]
              : value[type.fields[index].name],
        }))
      )

    // value && console.log(value[type.fields[value.position].name]);
    // value && type.fields.map((item, index) =>
    //   item.type.fields.map((field) =>
    //     console.log([field.name][index], ' : ', value[item.name][field.name] === data[type.fields[value.position].name][field.name], value[item.name][field.name], data[type.fields[value.position].name][field.name])
    //     )
    //   )
  }, [value])

  return (
    <>
      {/*  Rendering our images or layout to be chosen by a user */}
      <div style={{ textAlign: "center" }}>
        {variants.map((item, index) => (
          <img
            key={item.name}
            style={
              data && data.position === index
                ? {
                    marginTop: 15,
                    border: "1px solid blue",
                    padding: 10,
                    // width: defineWidth === undefined ? 350 : `${defineWidth}%`,
                    maxWidth:
                      defineWidth === undefined ? 350 : `${defineWidth}%`,
                    height:
                      defineHeight === undefined ? 300 : `${defineHeight}%`,
                    maxHeight:
                      defineHeight === undefined ? 300 : `${defineHeight}%`,
                    marginLeft: 5,
                    marginRight: 5,
                    objectFit: "scale-down",
                    cursor: "pointer",
                    borderRadius: 15,
                  }
                : {
                    marginTop: 15,
                    border: "1px solid lightgray",
                    padding: 10,
                    // width: defineWidth === undefined ? 350 : `${defineWidth}%`,
                    maxWidth:
                      defineWidth === undefined ? 350 : `${defineWidth}%`,
                    height:
                      defineHeight === undefined ? 300 : `${defineHeight}%`,
                    maxHeight:
                      defineHeight === undefined ? 300 : `${defineHeight}%`,
                    marginLeft: 5,
                    marginRight: 5,
                    objectFit: "scale-down",
                    cursor: "pointer",
                    borderRadius: 15,
                  }
            }
            src={item.image}
            onClick={() => chosenVariant(item.name, index)}
          />
        ))}
      </div>
      {data && console.log(type.fields[data.position].type.title)}
      {data && (
        // This will create an a form based on what's under the fields
        <div style={{ marginTop: 25 }}>
          <FormField
            label={type.fields[data.position].type.title}
            level={level}
          >
            <FormBuilderInput
              level={0}
              type={type.fields[data.position].type}
              value={value && value[type.fields[data.position].name]}
              onChange={patchEvent =>
                handleFieldChange(type.fields[data.position], patchEvent)
              }
              path={[type.fields[data.position].name]}
              focusPath={focusPath}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </FormField>
        </div>
      )}
    </>
  )
}

export default Variant
