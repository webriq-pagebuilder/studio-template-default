import { createPrice } from "../createPrice";
import { createProduct } from "../createProduct";
import { getProductById } from "../getProductById";
import { updateProductById } from "../updateProductById";

const sanityToken = "studio";

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
      if (plans[i].variant === "variant_b") {
        do {
          if (
            !plans[i][index].planType ||
            !plans[i][index].price ||
            !plans[i][index].checkoutButtonName
          ) {
            return {
              status: 500,
              statusText: `"Plan Type, Prices and Checkout Button Name" should not be blank in Pricing - ${
                i + 1
              }`,
            };
          }
          /*------- Creating Stripe Products --------*/

          //  Structure Requirement for /create-product API
          const productPayload = {
            id: `dxpstudio-pricing-${plans[i][index]._key}-${plans[i][
              index
            ].planType.replace(/ /g, "-")}-oneTimePrice-${
              plans[i][index].price
            }`,
            sanityToken,
            stripeSecretKey: plans[i].stripeSKey,
            hashKey: plans[i].hashKey,
            metadata: !plans[i][index].planIncludes
              ? {}
              : plans[i][index].planIncludes,
            apiVersion: !plans[i].apiVersion
              ? "2020-08-27"
              : plans[i].apiVersion,
            name: plans[i][index].planType,
            description: plans[i][index].description,
          };
          try {
            // Check if Product is existed in Stripe
            const checkProductStatus = await getProductById(productPayload);

            if (checkProductStatus.meta.status === 200) {
              // Update Product in stripe
              // Send the Request to API for Updating Our Product
              try {
                const responseUpdateProduct = await updateProductById(
                  productPayload
                );
                // If Success it will return status = 200 and the data which we will be using is ID to update the price
                if (responseUpdateProduct.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Updated`,
                  };
                }
              } catch (error) {
                console.log(error);
              }
            } else {
              // Create Product if not existed in stripe
              // Send the Request to API for Creating Our Product
              try {
                const responseCreateProduct = await createProduct(
                  productPayload
                );

                // If Success it will return status = 200 and the data which we will be using is ID to create the price
                if (responseCreateProduct.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Created`,
                  };
                }

                //  Structure Requirement for /create-price API (recurring)
                const pricePayload = {
                  sanityToken,
                  hashKey: plans[i].hashKey,
                  stripeSecretKey: plans[i].stripeSKey,
                  apiVersion: !plans[i].apiVersion
                    ? "2020-08-27"
                    : plans[i].apiVersion,
                  productId: responseCreateProduct.data.id,
                  isRecurring: false,
                  unit_amount: parseInt(plans[i][index].price),
                  currency: "usd",
                };

                // Creating Price
                const responseCreatePrice = await createPrice(pricePayload);
                if (responseCreatePrice.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Created`,
                  };
                }
              } catch (error) {
                console.log(error);
              }
            }
          } catch (error) {
            console.log("Product Not Found and Trying to Create it");
          }
          index++;
        } while (index < plans[i].length);
        i++;
      } else {
        //   If not variant B
        do {
          if (
            !plans[i][index].planType ||
            !plans[i][index].monthlyPrice ||
            !plans[i][index].yearlyPrice ||
            !plans[i][index].checkoutButtonName
          ) {
            return {
              status: 500,
              statusText: `"Plan Type, Prices and Checkout Button Name" should not be blank in Pricing - ${
                i + 1
              }`,
            };
          }
          /*------- Creating Stripe Products --------*/

          //  Structure Requirement for /create-product API
          const productPayload = {
            id: `dxpstudio-pricing-${plans[i][index]._key}-${plans[i][
              index
            ].planType.replace(/ /g, "-")}-recurring-monthlyPrice-${
              plans[i][index].monthlyPrice
            }-yearlyPrice-${plans[i][index].yearlyPrice}`,
            sanityToken,
            stripeSecretKey: plans[i].stripeSKey,
            hashKey: plans[i].hashKey,
            metadata: !plans[i][index].planIncludes
              ? {}
              : plans[i][index].planIncludes,
            apiVersion: !plans[i].apiVersion
              ? "2020-08-27"
              : plans[i].apiVersion,
            name: plans[i][index].planType,
            description: plans[i][index].description,
          };

          try {
            // Check if Product is existed in Stripe
            const checkProductStatus = await getProductById(productPayload);

            if (checkProductStatus.meta.status === 200) {
              // Update Product in stripe
              // Send the Request to API for Updating Our Product
              try {
                const responseUpdateProduct = await updateProductById(
                  productPayload
                );
                // If Success it will return status = 200 and the data which we will be using is ID to update the price
                if (responseUpdateProduct.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Updated`,
                  };
                }
              } catch (error) {
                console.log(error);
              }
            } else {
              // Create Product if not existed in stripe
              // Send the Request to API for Creating Our Product
              try {
                const responseCreateProduct = await createProduct(
                  productPayload
                );

                // If Success it will return status = 200 and the data which we will be using is ID to create the price
                if (responseCreateProduct.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Created`,
                  };
                }

                //  Structure Requirement for /create-price API (recurring)
                const pricePayload = {
                  sanityToken,
                  hashKey: plans[i].hashKey,
                  stripeSecretKey: plans[i].stripeSKey,
                  apiVersion: !plans[i].apiVersion
                    ? "2020-08-27"
                    : plans[i].apiVersion,
                  productId: responseCreateProduct.data.id,
                  isRecurring: true,
                  monthly_unit_amount: parseInt(plans[i][index].monthlyPrice),
                  yearly_unit_amount: parseInt(plans[i][index].yearlyPrice),
                  currency: "usd",
                };

                // Creating Price
                const responseCreatePrice = await createPrice(pricePayload);
                if (responseCreatePrice.meta.status !== 200) {
                  return {
                    status: 500,
                    statusText: `Product Not Created`,
                  };
                }
              } catch (error) {
                console.log(error);
              }
            }
          } catch (error) {
            console.log("Product Not Found and Trying to Create it");
          }
          index++;
        } while (index < plans[i].length);
        i++;
      }
    }
  }
};
