/* eslint-disable react/no-unused-prop-types, react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "part:@sanity/base/client";
import { assemblePageUrl } from "./frontendUtils";
import styles from "./TwitterCard.css";

const builder = imageUrlBuilder(sanityClient);

const urlFor = (source) => {
  return builder.image(source);
};

const author = {
  name: "WebriQ",
  handle: "WebriQgoesMad",
  image:
    "https://pbs.twimg.com/profile_images/1408052895531126790/BAhX7Puq_400x400.jpg",
};

class TwitterCard extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object,
    width: PropTypes.number,
    route: PropTypes.object,
    options: PropTypes.object,
  };

  static defaultProps = {
    document: null,
    width: 500,
  };

  render() {
    const { document, width, options } = this.props;
    const { title, seo } = document;
    const url = assemblePageUrl({ document, options });
    const websiteUrlWithoutProtocol = url.split("://").pop();

    return (
      <div className={styles.seoItem}>
        <h3>Twitter card preview</h3>
        <div className={styles.tweetWrapper} style={{ width }}>
          {author && (
            <div className={styles.tweetAuthor}>
              <img
                className={styles.tweetAuthorAvatar}
                src={
                  author && typeof author.image === "object"
                    ? urlFor(author.image).width(300).url()
                    : author.image
                }
              />
              <span className={styles.tweetAuthorName}>{author.name}</span>
              <span className={styles.tweetAuthorHandle}>@{author.handle}</span>
              <span className={styles.tweetBullet}>•</span>
              <span className={styles.tweetAuthorHandle}>44m</span>
            </div>
          )}

          <div className={styles.tweetText}>
            <p>
              The card for your website will look a little something like this!
            </p>
          </div>
          <div className={styles.tweetCardPreview} style={{ width }}>
            <div className={styles.tweetCardImageContainer}>
              {seo?.seoImage && (
                <img
                  className={styles.tweetCardImage}
                  src={urlFor(seo?.seoImage)?.width(500)?.url()}
                />
              )}
            </div>
            <div className={styles.tweetCardContent}>
              <div className={styles.tweetUrlWrapper}>
                {websiteUrlWithoutProtocol}
              </div>
              <div className={styles.tweetCardTitle}>
                <a href={url}>{title}</a>
              </div>
              <div className={styles.tweetCardDescription}>
                {seo?.seoDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TwitterCard;
