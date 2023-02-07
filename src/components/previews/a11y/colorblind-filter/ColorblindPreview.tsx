/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/prop-types */
import filters from "./filters.svg"
import styles from "./ColorblindPreview.css"

const FILTER_ITEMS = [
  { title: "Protanopia", value: "protanopia" },
  { title: "Deuteranopia", value: "deuteranopia" },
  { title: "Tritanopia", value: "tritanopia" },
  { title: "Achromatopsia", value: "achromatopsia" },
  { title: "Protanomaly", value: "protanomaly" },
  { title: "Deuteranomaly", value: "deuteranomaly" },
  { title: "Tritanomaly", value: "tritanomaly" },
  { title: "Achromatomaly", value: "achromatomaly" },
  { title: "No filter", value: null },
]

function ColorblindPreview() {
  return <div>COLORBLIND PREVIEW</div>
}

export default ColorblindPreview
