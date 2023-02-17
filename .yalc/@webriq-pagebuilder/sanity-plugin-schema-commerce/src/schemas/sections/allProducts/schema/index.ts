export const allProductsSchema = [
  {
    name: "allProducts",
    title: "All products",
    description: "Select from Store > Collections to display products",
    type: "array",
    of: [
      {
        type: "reference",
        to: [{ type: "mainCollection" }],
      },
    ],
  },
];
