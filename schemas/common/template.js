import React from "react"
import { Select } from "@sanity/ui"
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event"
import { setIfMissing } from "part:@sanity/form-builder/patch-event"
import { FormBuilderInput } from "part:@sanity/form-builder"
import FormField from "part:@sanity/components/formfields/default"
export default function Template(props, templates) {
  const { type, onChange, value, level, focusPath, onFocus, onBlur } = props

  const createPatchFrom = value =>
    PatchEvent.from(value === "" ? unset() : set(value))
  const [data, setData] = React.useState(value)
  //   const [templateChoosen, setTemplateChoosen] = React.useState(value)

  const selectTemplate = e => {
    value === undefined
      ? onChange(createPatchFrom({ template: e.target.value, position: 0 }))
      : Object.keys(value).length === 2
      ? templates.map(
          (temp, index) =>
            temp.name === e.target.value &&
            onChange(
              createPatchFrom({ template: e.target.value, position: index })
            )
        )
      : (value["template"] = e.target.value)

    templates.map(
      (temp, index) =>
        temp.name === e.target.value &&
        setData(prevState => ({
          ...prevState,
          template: e.target.value,
          position: index,
        }))
    )
    value && onChange(createPatchFrom(value))
  }

  const handleFieldChange = (field, fieldPatchEvent) => {
    onChange(
      fieldPatchEvent
        .prefixAll(field.name)
        .prepend(setIfMissing({ _type: type.name }))
    )
  }
  console.log(value)
  React.useEffect(() => {
    value &&
      setData(prevState => ({
        ...prevState,
        [value.template]:
          value[type.fields[value.position].name] === undefined
            ? data[type.fields[data.position].name]
            : value[type.fields[value.position].name],
      }))
  }, [value])

  return (
    <>
      <FormField label="Select a Template">
        <Select onChange={e => selectTemplate(e)} value={data && data.template}>
          <optgroup>
            <option value={""}>{""}</option>
            {templates.map(temp => (
              <option key={temp.name} value={temp.name}>
                {String(temp.name).replace("_", "-") + " Template"}
              </option>
            ))}
          </optgroup>
        </Select>
      </FormField>
      <div style={{ marginTop: 25 }}>
        {data && (
          <FormField label={type.title}>
            <FormBuilderInput
              level={level + data.position}
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
        )}
      </div>
    </>
  )
}
