import React from "react";
import {
  SANITY_STUDIO_DEV_SITE_URL,
  SANITY_STUDIO_PRODUCTION_SITE_URL,
} from "../config";

export function LiveURLBadge(props) {
  const { type } = props;
  let siteUrl = SANITY_STUDIO_DEV_SITE_URL;
  if (!window.location.hostname.includes("localhost")) {
    siteUrl = SANITY_STUDIO_PRODUCTION_SITE_URL;
  }
  const isPublished = !props.draft;

  if (type === "page") {
    return {
      label: (
        <Link
          target={`${siteUrl}/${
            isPublished
              ? props?.published?.slug?.current
              : props?.draft?.slug?.current ?? ""
          }`}
          isPublished={isPublished}
        />
      ),
      title: "Open LIVE URL in a new window!",
      color: isPublished ? "success" : "default",
    };
  }
}

const Link = ({ target, isPublished }) => {
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
