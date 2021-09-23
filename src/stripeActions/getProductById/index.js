const { SANITY_STUDIO_APP_URL } = process.env;
const URL = `${
  SANITY_STUDIO_APP_URL || "http://localhost:9000"
}/api/stripe-account/get-product-by-id`;

export const getProductById = async (payload) => {
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};
