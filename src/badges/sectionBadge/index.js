export const sections = [
  "navigation",
  "featuredProducts",
  "blog",
  "appPromo",
  "cartSection",
  "callToAction",
  "checkout",
  "contact",
  "cookies",
  "faqs",
  "features",
  "footer",
  "header",
  "howItWorks",
  "logoCloud",
  "portfolio",
  "pricing",
  "productInfo",
  "stats",
  "shop",
  "signInSignUp",
  "team",
  "testimonial",
  "textComponent",
  "newsletter",
  "wishlistSection",

  // C-Studio sections for page documents only
  "pages_featuredProducts",
  "pages_productInfo",

  // C-Studio dynamic sections for Store > Pages
  "dynamic_featuredProducts",
  "dynamic_productInfo",
];

function sectionName(section) {
  if (section === "appPromo") {
    return "App Promo";
  } else if (
    section === "featuredProducts" ||
    section === "pages_featuredProducts"
  ) {
    return "Featured Products";
  } else if (section === "callToAction") {
    return "Call To Action";
  } else if (section === "howItWorks") {
    return "How It Works";
  } else if (section === "logoCloud") {
    return "Logo Cloud";
  } else if (section === "productInfo" || section === "pages_productInfo") {
    return "Product Info";
  } else if (section === "signInSignUp") {
    return "Sign In Sign Up";
  } else if (section === "textComponent") {
    return "Text Component";
  } else if (section === "cartSection") {
    return "Cart";
  } else if (section === "wishlistSection") {
    return "Wishlist";
  } else if (section === "dynamic_featuredProducts") {
    return "Dynamic Featured Products";
  } else if (section === "dynamic_productInfo") {
    return "Dynamic Product Info";
  } else {
    return section;
  }
}

export function SectionBadge(props) {
  const { type } = props;

  if (sections.includes(type)) {
    return {
      label: String(`${sectionName(type)} Section`).toUpperCase(),
      title: `${sectionName(type).toUpperCase()} SECTION`,
      color: "success",
    };
  }
}
