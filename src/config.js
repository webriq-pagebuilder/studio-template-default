// Site Netlify app used for web preview
export const SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL =
  process.env.SANITY_STUDIO_PRODUCTION_NETLIFY_SITE_URL;

// Site LIVE domain URL
export const SANITY_STUDIO_PRODUCTION_SITE_URL =
  process.env.SANITY_STUDIO_PRODUCTION_SITE_URL;

// Defaults to `localhost:3000` but can be override as per your local settings
export const SANITY_STUDIO_DEV_SITE_URL = SANITY_STUDIO_DEV_SITE_URL;

// Preview secret key both shared by site and studio. Randomly generated in production
export const SANITY_STUDIO_PREVIEW_SECRET =
  process.env.SANITY_STUDIO_PREVIEW_SECRET || "secret";

// LIVE App URL
export const SANITY_STUDIO_APP_URL = process.env.SANITY_STUDIO_APP_URL;
