import { nanoid } from "nanoid"
import { client } from "../../sanity"
import { SanityDocument, BlockChildrenObjectField } from "sanity"

// for schema _type 'image'
export const defaultImage = (imageReference: string) => {
  return {
    image: {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageReference,
      },
    },
  }
}

// for logo with schema _type 'image'
export const defaultLogo = (imageReference: string) => {
  return defaultImage(imageReference)
}

// for array of schema _type 'image'
export const defaultImageArray = (arrayOfImageReferences: string[]) => {
  var images

  images = arrayOfImageReferences?.map((images, index) => ({
    _key: nanoid(),
    _type: "item",
    ...defaultImage(arrayOfImageReferences[index]),
  }))

  return images
}

// for buttons with schema _type 'conditionalLink'
export const defaultButton = (btnLabel: string) => {
  return {
    _type: "conditionalLink",
    label: btnLabel,
    linkType: "linkInternal",
    linkTarget: "_self",
  }
}

// for array of links with the same structure as defaultButton
export const defaultLinks = (labelsArray: string[]) => {
  var links

  links = labelsArray?.map((label) => ({
    _key: nanoid(),
    ...defaultButton(label),
  }))

  return links
}

export const defaultBlogPosts = async () => {
  const blog = await client.fetch(`*[_type=="post"]`)

  const references = blog?.slice(0, 6)?.map((post: SanityDocument) => ({
    _type: "reference",
    _key: nanoid(),
    _ref: post?._id,
  }))

  return references
}

// for schema _type 'block'
export const defaultBlockContent = (content) => {
  const updatedContent = content?.map((elements) => ({
    _type: "block",
    _key: nanoid(),
    style: "normal",
    markDefs: [],
    children: elements?.children?.map((child: BlockChildrenObjectField) => ({
      _type: "span",
      _key: nanoid(),
      ...child,
    })),
  }))

  return updatedContent
}

// for social links
export const defaultSocialLinks = (
  socialLinksObjArray: { socialMedia: string; socialMediaLink: string; socialMediaIcon?: any; socialMediaPlatform?: string }[]
) => {
  const updatedArray = socialLinksObjArray?.map((link) => ({
    _type: "details",
    _key: nanoid(),
    ...link,
  }))

  return updatedArray
}

// adds a random generated key for array of objects
export const defaultArrayOfObjects = (arrayOfObjects: any) => {
  const arrayOfObjectsWithKey = arrayOfObjects?.map((array: any) => ({
    _key: nanoid(),
    _type: array?._type || "object",
    ...array,
  }))

  return arrayOfObjectsWithKey
}

// for WebriQ form fields
export const defaultForm = (
  formName: string,
  formInputFields: any,
  formSubtitle: string,
  buttonLabel: string
) => {
  const fieldsWithKey = formInputFields?.map((field) => ({
    _type: "webriqFormField",
    _key: nanoid(),
    ...field
  }));


  return {
    subtitle: formSubtitle,
    name: formName,
    fields: fieldsWithKey,
    buttonLabel: buttonLabel,
  };
};