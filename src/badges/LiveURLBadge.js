import React from "react";

export function LiveURLBadge(props) {
  let siteUrl =
    process.env.SANITY_STUDIO_DEV_SITE_URL || "http://localhost:3000";
  if (!window.location.hostname.includes("localhost")) {
    siteUrl = process.env.SANITY_STUDIO_PRODUCTION_SITE_URL;
  }

  return {
    label: (
      <Link
        target={`${siteUrl}/${
          props?.published?.slug?.current || (props?.draft?.slug?.current ?? "")
        }`}
        isPublished={!props.draft}
      />
    ),
    title: "Site custom URL",
    color: props.draft ? "default" : "success",
  };
}

const Link = ({ target, isPublished }) => {
  console.log(
    "🚀 ~ file: LiveURLBadge.js ~ line 26 ~ Link ~ isPublished",
    isPublished
  );
  return (
    <a
      onClick={() => (isPublished ? window.open(target) : null)}
      target="_blank"
      style={{
        marginRight: 5,
        padding: 8,
        fontSize: "1.5em",
        textTransform: "lowercase",
        color: "var(--card-fg-color)",
        cursor: isPublished ? "pointer" : "default",
      }}
    >
      {target}
    </a>
  );
};
