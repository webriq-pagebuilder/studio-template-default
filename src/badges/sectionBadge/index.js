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
];

function sectionName(section) {
  if (section === "appPromo") {
    return "App Promo";
  } else if (section === "featuredProducts") {
    return "Featured Products";
  } else if (section === "callToAction") {
    return "Call To Action";
  } else if (section === "howItWorks") {
    return "How It Works";
  } else if (section === "logoCloud") {
    return "Logo Cloud";
  } else if (section === "productInfo") {
    return "Product Info";
  } else if (section === "signInSignUp") {
    return "Sign In Sign Up";
  } else if (section === "textComponent") {
    return "Text Component";
  } else if (section === "cartSection") {
    return "Cart";
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
