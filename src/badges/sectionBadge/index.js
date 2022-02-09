export function SectionBadge(props) {
  const { type } = props;
  if (type === "reusableHeader") {
    return {
      label: "Reusable Header Section",
      title: "Header Section",
      color: "success",
    };
  }
}
