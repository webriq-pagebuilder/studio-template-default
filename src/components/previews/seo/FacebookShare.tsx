/* eslint-disable react/no-unused-prop-types, react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from "react";
import { useClient } from "sanity";
import imageUrlBuilder from "@sanity/image-url";
import { assemblePageUrl } from "./frontendUtils";
import "./styles/FacebookShare.css"


function FacebookShare (props) {
  const client = useClient({ apiVersion: "2021-10-21" })
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => builder.image(source);

  const { document, width = 500, options } = props;
  const { title, seo } = document;
  const url = assemblePageUrl({ document, options });
  const websiteUrlWithoutProtocol = url.split("://").pop();

  return (
    <div className="seoItem">
      <h3>Facebook share</h3>
      <div className="facebookWrapper" style={{ width }}>
        <div className="facebookImageContainer">
          {seo?.seoImage && (
            <img
              className="facebookCardImage"
              src={urlFor(seo?.seoImage)?.width(500)?.url()}
            />
          )}
        </div>
        <div className="facebookCardContent">
          <div className="facebookCardUrl">
            {websiteUrlWithoutProtocol}
          </div>
          <div className="facebookCardTitle">
            <a href={url}>{title}</a>
          </div>
          <div className="facebookCardDescription">
            {seo?.seoDescription}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacebookShare;