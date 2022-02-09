import { nanoid } from "nanoid";

export const defaultLogo = (imageReference) => {
  return {
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageReference,
      },
    },
  };
};

export const defaultButton = (btnLabel) => {
  return {
    label: btnLabel,
    linkType: "linkInternal",
    linkTarget: "_self",
  };
};

export const defaultLinks = (labelsArray) => {
  var links = [];

  for (var i = 0; i < labelsArray.length; i++) {
    var obj = {};

    (obj._type = "conditionalLink"),
      (obj._key = nanoid()),
      (obj.label = labelsArray[i]),
      (obj.linkTarget = "_self"),
      (obj.linkType = "linkInternal"),
      links.push(obj);
  }

  return links;
};

export const defaultMainImage = (imageReference) => {
  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: imageReference,
    },
  };
};

export const defaultImageArray = (arrayOfImageReferences) => {
  var images = [];

  for (var i = 0; i < arrayOfImageReferences.length; i++) {
    var obj = {};

    (obj._type = "image"),
      (obj._key = nanoid()),
      (obj.asset = {
        _type: "reference",
        _ref: arrayOfImageReferences[i],
      }),
      images.push(obj);
  }

  return images;
};

export const defaultForm = (formName, formInputFields) => {
  for (var i = 0; i < formInputFields.length; i++) {
    formInputFields[i]._type = "webriqFormField";
    formInputFields[i]._key = nanoid();
  }

  return {
    name: formName,
    fields: formInputFields,
  };
};

export const defaultArrayOfObjects = (arrayOfObjects) => {
  for (var i = 0; i < arrayOfObjects.length; i++) {
    arrayOfObjects[i]._key = nanoid();
  }

  return arrayOfObjects;
};

export const defaultBlockContent = (content) => {
  for (var i = 0; i < content.length; i++) {
    content[i]._type = "block"; // insert '_type' property with value 'block' to block
    content[i]._key = nanoid(); // insert 'key' property with value random string to block
    content[i].style = "normal"; // insert 'style' property with value 'normal' to block

    for (var j = 0; j < content[i].children.length; j++) {
      content[i].children[j]._type = "span"; // insert '_type' property with value 'span' to span
      content[i].children[j]._key = nanoid(); // insert 'key' property with value random string to span
    }
  }

  return content;
};

export const defaultBlogPosts = (blogReferences) => {
  for (var i = 0; i < blogReferences.length; i++) {
    blogReferences[i]._type = "reference";
    blogReferences[i]._key = nanoid();
  }

  return blogReferences;
};

export const defaultSocialLinks = {
  fbLink: "https://www.facebook.com",
  twitterLink: "https://www.twitter.com",
  instagramLink: "https://www.instagram.com",
};
