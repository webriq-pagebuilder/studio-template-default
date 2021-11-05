import sanityClient from "part:@sanity/base/client"
import imageUrlBuilder from "@sanity/image-url"

const builder = imageUrlBuilder(sanityClient.withConfig({ apiVersion: "v1" }))

export const urlFor = (source) => {
  return builder.image(source)
}
