const { SANITY_STUDIO_APP_URL } = process.env;
const URL = `${
  SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
}/api/stripe-account/update-product-by-id`;

export const updateProductById = async (payload) => {
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
};
