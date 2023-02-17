import { client } from "../../../../sanity";

export const initialValue = async () => {
  const refDoc = await client.fetch(
    `*[_type == "mainCollection" && name == "All Products"][0]`
  );

  return {
    collections: {
      _ref: refDoc?._id,
      _type: "reference",
    },
  };
};
