import { client } from "../../../../sanity";

export const initialValue = async () => {
  const refDoc = await client.fetch(`*[_type == "mainProduct"][0]`);

  return {
    products: {
      _ref: refDoc?._id,
      _type: "reference",
    },
  };
};
