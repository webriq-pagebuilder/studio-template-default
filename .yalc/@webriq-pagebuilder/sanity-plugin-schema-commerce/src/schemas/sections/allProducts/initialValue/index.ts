import { client } from "../../../../sanity";
import { nanoid } from "nanoid";


export const initialValue = async () => {
  const refDoc = await client.fetch(
    `*[_type =="mainCollection" && name == "All Products"][0]`
  );

  return {
    allProducts: [
      {
        _key: nanoid(),
        _type: "reference",
        _ref: refDoc?._id,
      },
    ],
  };
};
