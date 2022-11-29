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
  "stats",
  "shop",
  "signInSignUp",
  "team",
  "testimonial",
  "textComponent",
  "newsletter",
  "wishlistSection",
  "allProducts",

  // C-Studio sections for page documents only
  "pages_featuredProducts",
  "pages_productInfo",
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
  } else if (section === "allProducts") {
    return "All Products";
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
