const { SANITY_STUDIO_APP_URL } = process.env;

export const processData = async (payload) => {
  let pricings = [];
  let plans = [];

  // Filtering out all pricing under this section into pricings array
  if (payload) {
    payload.map((section) => {
      section._type === "pricing" && pricings.push(section);
    });
  }

  // Filtering out again all plans and stripeSKey into plans array
  if (pricings) {
    let i = 0;
    for (; i < pricings.length; ) {
      const variant = pricings[i].variants.condition;

      // Validate if plans and stripe account is not undefined
      if (
        !pricings[i].variants[variant]?.plans ||
        pricings[i].variants[variant]?.plans?.length === 0 ||
        !pricings[i].variants[variant].stripeAccount
      ) {
        return {
          status: 500,
          statusText: `You must create at least 1 plan, and a valid Stripe Account on Pricing - ${
            i + 1
          }`,
        };
      }

      // else it will add the stripeSKey into plans object and push it to plans array
      pricings[i].variants[variant].plans["stripeSKey"] =
        pricings[i].variants[variant]?.stripeAccount?.stripeSKey;
      pricings[i].variants[variant].plans["hashKey"] =
        pricings[i].variants[variant]?.stripeAccount?.hashKey;
      pricings[i].variants[variant].plans["apiVersion"] =
        pricings[i].variants[variant]?.stripeAccount?.apiVersion;
      pricings[i].variants[variant].plans["variant"] = variant;
      plans.push(pricings[i].variants[variant].plans);
      i++;
    }
  }

  // Looping our plans array to create the products
  if (plans) {
    let i = 0;
    for (; i < plans.length; ) {
      let index = 0;
      do {
        if (plans[i].variant === "variant_b") {
          if (
            !plans[i][index]?.planType ||
            !plans[i][index]?.price ||
            !plans[i][index]?.checkoutButtonName
          ) {
            return {
              status: 500,
              statusText: `"Plan Type, Prices and Checkout Button Name" should not be blank in Pricing - ${
                i + 1
              }`,
            };
          }
        } else {
          if (
            !plans[i][index]?.planType ||
            !plans[i][index]?.monthlyPrice ||
            !plans[i][index]?.yearlyPrice ||
            !plans[i][index]?.checkoutButtonName
          ) {
            return {
              status: 500,
              statusText: `"Plan Type, Prices and Checkout Button Name" should not be blank in Pricing - ${
                i + 1
              }`,
            };
          }
        }
        /*------- Creating Stripe Products --------*/

        const credentials = {
          stripeSecretKey: plans[i].stripeSKey,
          hashKey: plans[i].hashKey,
          apiVersion: plans[i].apiVersion,
        };
        const id =
          plans[i].variant === "variant_b"
            ? `dxpstudio-pricing-${plans[i][index]._key}-${plans[i][
                index
              ].planType.replace(/ /g, "-")}-oneTimePrice-${
                plans[i][index].price
              }`
            : `dxpstudio-pricing-${plans[i][index]._key}-${plans[i][
                index
              ].planType.replace(/ /g, "-")}-recurring-monthlyPrice-${
                plans[i][index].monthlyPrice
              }-yearlyPrice-${plans[i][index].yearlyPrice}`;

        const checkProductPayload = {
          credentials,
          StripeParams: {
            id,
          },
        };

        try {
          const checkProductURL = `${
            SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
          }/api/payments/stripe?resource=products&action=retrieve`;
          const response = await fetch(checkProductURL, {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(checkProductPayload),
          });
          const checkProductStatus = await response.json();
          if (checkProductStatus.id) {
            const updateProductPayload = {
              credentials,
              StripeParams: {
                id,
                params: {
                  metadata: !plans[i][index].planIncludes
                    ? {}
                    : plans[i][index].planIncludes,
                  name: plans[i][index].planType,
                  description: plans[i][index].description,
                },
              },
            };
            const updateProductURL = `${
              SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
            }/api/payments/stripe?resource=products&action=update`;
            try {
              await fetch(updateProductURL, {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(updateProductPayload),
              });
            } catch (error) {
              console.log(error);
            }
          } else {
            const createProductPayload = {
              credentials,
              StripeParams: {
                id,
                metadata: !plans[i][index].planIncludes
                  ? {}
                  : plans[i][index].planIncludes,
                name: plans[i][index].planType,
                description: plans[i][index].description,
              },
            };
            const createProductURL = `${
              SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
            }/api/payments/stripe?resource=products&action=create`;
            try {
              const response = await fetch(createProductURL, {
                headers: {
                  "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(createProductPayload),
              });
              const createProduct = await response.json();
              if (createProduct.id) {
                const createPriceURL = `${
                  SANITY_STUDIO_APP_URL || "https://dxpstudio.webriq.com"
                }/api/payments/stripe?resource=prices&action=create`;

                if (plans[i].variant === "variant_b") {
                  const createPricePayload_VariantB = {
                    credentials,
                    StripeParams: {
                      product: createProduct.id,
                      currency: "usd",
                      metadata: !plans[i][index].planIncludes
                        ? {}
                        : plans[i][index].planIncludes,
                      unit_amount: plans[i][index].price * 100,
                    },
                  };
                  try {
                    const response = await fetch(createPriceURL, {
                      headers: {
                        "Content-Type": "application/json",
                      },
                      method: "POST",
                      body: JSON.stringify(createPricePayload_VariantB),
                    });
                    await response.json();
                  } catch (error) {}
                } else {
                  const createPricePayload_VariantAC_Monthly = {
                    credentials,
                    StripeParams: {
                      product: createProduct.id,
                      currency: "usd",
                      metadata: !plans[i][index].planIncludes
                        ? {}
                        : plans[i][index].planIncludes,
                      unit_amount: plans[i][index].monthlyPrice * 100,
                      recurring: {
                        interval: "month",
                      },
                    },
                  };
                  const createPricePayload_Variant_AC_Yearly = {
                    credentials,
                    StripeParams: {
                      product: createProduct.id,
                      currency: "usd",
                      metadata: !plans[i][index].planIncludes
                        ? {}
                        : plans[i][index].planIncludes,
                      unit_amount: plans[i][index].yearlyPrice * 100,
                      recurring: {
                        interval: "year",
                      },
                    },
                  };
                  const responseMonthly = await fetch(createPriceURL, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(createPricePayload_VariantAC_Monthly),
                  });
                  await responseMonthly.json();
                  const responseYearly = await fetch(createPriceURL, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(createPricePayload_Variant_AC_Yearly),
                  });
                  await responseYearly.json();
                }
              }
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
        index++;
      } while (index < plans[i].length);
      i++;
    }
  }
};
