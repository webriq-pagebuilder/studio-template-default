const { SANITY_STUDIO_APP_URL } = process.env;
const URL = `${
  SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
}/api/stripe-account/create-product`;

export const createProduct = async (payload) => {
  try {
    const response = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return "Error on Creating Product";
  }
};
